import React, { Component } from 'react';
import './index';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './components/header';
import Home from './components/Home';
import Contact from './components/contact';
import Products from './components/products';
import Footer from './components/footer';
import './assets/css/input.css';
import Callback from './Auth/Callback';
import Admin from './Auth/Admin';
import SecuredRoute from './Auth/SecuredRoute';
import AdminContact from './Auth/AdminContact';




class App extends Component {
  constructor() {
    super();
    this.state = {
      data: null,
      finishedArr: [],
      loading: true,
      contacts: null
    } 
  }

  componentDidMount() {
    fetch('http://localhost:3005/destinations')
      .then(response => response.json())
      .then(data => this.setState({
        data: data,
        loading: false
      }, () => console.log(this.state.data)));

    fetch('http://localhost:3005/contacts')
      .then(response => response.json())
      .then(data => this.setState({
        contacts: data,
        loading: false
      }, () => console.log(this.state.contacts)));
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const land = document.getElementById('l').value;
    const day = document.getElementById('d').value;
    const price = parseInt(document.getElementById('p').value, 10);
    let products = this.state.data;
    
    let filteredArr = products.filter( product => product.landscapeType === land && product.price <= price && product.days === day );

    this.setState({
      finishedArr: filteredArr
    }, () => console.log(this.props.finishedArr) );
  }

  render() {
    if (this.state.loading) {
      return null;
    }
    let products = []
      if (this.state.finishedArr.length === 0) {
        products = this.state.data
      } else {
        products = this.state.finishedArr
      }
    return (
      <BrowserRouter>
        <div className="App">
            <Header />
            <Switch>
              <Route exact path='/callback' component={Callback}/>
              <Route exact path="/" component={Home} />
              <Route path="/products" render={()=><Products products={products} handleSubmit={this.handleSubmit}/> }/>
              <Route path="/contact" component={Contact} />
              <SecuredRoute path='/admin' component={Admin} products={this.state.data}/>
              <SecuredRoute path="/contact-info" component={AdminContact} contacts={this.state.contacts}/>
            </Switch>
            <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;