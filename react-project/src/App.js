import React, { Component } from 'react';
import './index';
import { BrowserRouter, Route} from 'react-router-dom';
import Header from './header';
import Home from './components/Home';
import Contact from './components/contact';
import Products from './components/products';
import Footer from './footer';
import './assets/css/input.css';
import jsonObject from './json';



class App extends Component {
  constructor() {
    super();
    this.state = {
      jsonObject,
      finishedArr: [],
      bl: !true
    } 
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const land = document.getElementById('l').value;
    const day = document.getElementById('d').value;
    const price = parseInt(document.getElementById('p').value, 10);
    let products = this.state.jsonObject.products;

    
    let filteredArr = products.filter( product => product.landscapeType === land && product.price <= price && product.days === day );

    this.setState({
      finishedArr: filteredArr
    }, () => console.log(this.props.finishedArr) );
  }

  render() {
    console.log(jsonObject.products);
    return (
      <BrowserRouter>
        <div className="App">
            <Header />
            <Route exact path="/home" component={Home} />
            <Route path="/products" render={()=><Products products={this.state.jsonObject.products} finishedArr={this.state.finishedArr} handleSubmit={this.handleSubmit}/> }/>
            <Route path="/contact" component={Contact} />
            <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;