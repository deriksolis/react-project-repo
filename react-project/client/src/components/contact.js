import React from 'react';

const Contact = () => {
    return (
      <div className="container">
        <form className="form" action="http://localhost:3005/contacts" href="about:blank" method="POST" name="big-form"> 
            <div>
                <label htmlFor="name">First Name:</label>
                <input type="text" name="firstName" id="name" />
            </div>
            <div>
                <label htmlFor="l-name">Last Name:</label>
                <input type="text" name="lastName" id="l-name" />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="email" />
            </div>
            <div>
                <label htmlFor="work">Work:</label>
                <input type="text" name="work" id="work" />
            </div>
            <div>
                <label className="title" htmlFor="more-info">Additional Comments/Concerns:</label>
                <textarea className="text-area" name="description" id="more-info" rows="10" cols="40"></textarea>
            </div>
            <input className="submit" type="submit" value="Submit" id="submit" />  
        </form>
      </div>
    );
  }

export default Contact;