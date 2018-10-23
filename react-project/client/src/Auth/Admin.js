import React, {Component} from 'react';
import AuthCard from './AuthCard';
import Delete from './modules/delete';
import Edit from './modules/edit';
import AdminHeader from './AdminHeader';

class Admin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: null,
            description: null,
            url: null,
            days: null,
            price: null,
            landscapeType: null
        }
    }

    addNew = () => {
        const modal = document.getElementById('myModal');
        if (modal.style.display === 'none' || modal.style.display === '') {
            modal.style.display = "block";
        } else {
            modal.style.display = "none";
        }
    } 

    deleteItem = (item) => {
        fetch('http://localhost:3005/destinations/' + item, {
          method: 'delete'
        })
        .then(response => response.json())
        .catch(e => console.log(e));
        window.location.reload();
      }

    deleteModal = (id) => {
        const modal = document.getElementById(id);
        if (modal.style.display === 'block') {
            modal.style.display = "none";
        } else {
            modal.style.display = "block";
        }
    } 

    editItem = (item) => {
        const {title, description, url,
            price, landscapeType, days} = this.state;
        
        let sentBody = {title, description, url,
            price, landscapeType, days};

        console.log(JSON.stringify(sentBody));
        fetch(`http://localhost:3005/destinations/${item}`, {
          method: 'PUT',
          headers: {
              'Content-Type': 'application/json'
          },         
          body: JSON.stringify(sentBody)
        })
        .then(response =>  console.log('response-', response))
        .catch(e => console.log(e));
        console.log('yerrr', item);
        console.log('hello', title);
    }

    updateChange = (id) => {
        this.setState({
            title: document.getElementById(`edit-title${id}`).value,
            description: document.getElementById(`edit-url${id}`).value,
            url: document.getElementById(`edit-description${id}`).value,
            days: document.getElementById(`edit-days${id}`).value,
            price: document.getElementById(`edit-price${id}`).value,
            landscapeType: document.getElementById(`edit-landscapeType${id}`).value
        }, () => console.log(this.state))
    }

    editModal = (id) => {
        const modal = document.getElementById(id + 100);
        if (modal.style.display === 'block') {
            modal.style.display = "none";
        } else {
            modal.style.display = "block";
        }
    } 

    
    render () {

        const mappedCards = this.props.products.map( realArray => {
            return (
            <div>
            <AuthCard 
            name = {realArray.title} 
            description = {realArray.description} 
            img = {realArray.url}
            price = {realArray.price}
            area = {realArray.landscapeType}
            id = {realArray.id} 
            editModal = {this.editModal}
            deleteModal = {this.deleteModal} />
            <Delete 
            id = {realArray.id} 
            deleteModal = {this.deleteModal}
            deleteItem = {this.deleteItem} />
            <Edit 
            editItem = {this.editItem}
            id = {realArray.id} 
            editModal = {this.editModal}
            updateChange = {this.updateChange}
            name = {realArray.title}
            description = {realArray.description}
            url = {realArray.url}
            price = {realArray.price}
            days = {realArray.days}
            area = {realArray.landscapeType}
            />
            </div>
        )})

        return (
            <div className="container">
                <AdminHeader />
                <header className="auth-header">
                    <div className="auth-header__dividers Image">
                        <p>Image</p>
                    </div>
                    <div className="auth-header__dividers Title">
                        <p>Title</p>
                    </div>
                    <div className="auth-header__dividers Location">
                        <p>Location</p>
                    </div>
                    <div className="auth-header__dividers Price">
                        <p>Price</p>
                    </div>
                    <div className="auth-header__dividers Edit">
                        <p>Edit</p>
                    </div>
                </header>
                <div id="myModal" className="modal">
                    <div className="modal-content">
                        <span onClick={this.addNew} className="close">&times;</span>
                        <form className="form" action="http://localhost:3005/destinations/" href="about:blank" method="POST" name="big-form"> 
                            <div className="form__left">
                                <div>
                                    <label htmlFor="name">Title</label>
                                    <input type="text" name="title" id="name" />
                                </div>
                                <div>
                                    <label htmlFor="l-name">Image Url</label>
                                    <input type="text" name="url" id="l-name" />
                                </div>
                                <div>
                                    <label className="title" htmlFor="more-info">Description</label>
                                    <textarea className="text-area" name="description" id="more-info" rows="10" cols="40"></textarea>
                                </div>
                                <div>
                                    <label>Landscape type:
                                    <select id="l" name="landscapeType" >
                                        <option className="select-form--dim" value="null">Select an option:</option>
                                        <option value="beach">Beach</option>
                                        <option value="mountain">Mountains</option>
                                        <option value="lake">Lake</option>
                                    </select>
                                    </label>
                                    <label>Length of trip:
                                    <select id="d" name="days">
                                        <option className="select-form--dim" value="null">Select an option:</option>
                                        <option value="2day">2 Day</option>
                                        <option value="3day">3 Day</option>
                                        <option value="week">Week</option>
                                    </select>
                                    </label>
                                    <label>Choose price:
                                    <select id="p" name="price">
                                        <option className="select-form--dim" value="null">Select an option:</option>
                                        <option value="200">$200</option>
                                        <option value="500">$500</option>
                                        <option value="1000">$1000</option>
                                    </select>
                                    </label>
                                </div>
                                <input className="submit" type="submit" value="Submit" id="submit" /> 
                            </div> 
                        </form>
                    </div>
                </div>
                {mappedCards}
                <button className="add-button" onClick={this.addNew}>ADD</button>
            </div>
        )
    }
}
export default Admin;