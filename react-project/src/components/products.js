import React from 'react';
import Card from './card';


const Products = (props) => {

    return (
      <div className="container"> 
        <form className="select-form">
          <div>
            <label>Choose an landscape type:
              <select id="l" >
                <option className="select-form--dim" value="null"><span>Select an option:</span></option>
                <option value="beach">Beach</option>
                <option value="mountain">Mountains</option>
                <option value="lake">Lake</option>
              </select>
            </label>
            <label>Choose length of your trip:
              <select id="d">
                <option className="select-form--dim" value="null"><span>Select an option:</span></option>
                <option value="2day">2 Day</option>
                <option value="3day">3 Day</option>
                <option value="week">Week</option>
              </select>
            </label>
            <label>Choose your price range:
              <select id="p">
                <option className="select-form--dim" value="null"><span>Select an option:</span></option>
                <option value="200">Below $200</option>
                <option value="500">Below $500</option>
                <option value="1000">Below $1000</option>
              </select>
            </label>
          </div>
          <input type="submit" value="submit" onClick={props.handleSubmit}/>
        </form>
        <div className="card-container">
        {props.finishedArr.map( realArray => {
            return <Card 
              key = {realArray.name}
              name = {realArray.name} 
              description = {realArray.description} 
              img = {realArray.url}
              price = {realArray.price} />
            })}
        </div>
      </div>
    );
  }

export default Products;

