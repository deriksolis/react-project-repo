import React from 'react';

const AuthCard = (props) => {

    return (
      <div className="auth-cards">
          <div className="auth-cards__dividers Image">
            <img src={props.img} alt="img description"/>
          </div>
          <div className="auth-cards__dividers Title">
            <h3>{props.name}</h3>
          </div>
          <div className="auth-cards__dividers Location">
            <p>{props.area}</p>
          </div>
          <div className="auth-cards__dividers Price">
            <p>${props.price}</p>
          </div>
          <div className="auth-cards__dividers Edit">
              <span onClick={() => props.deleteModal(props.id)}>
                <i className="fas fa-minus-circle"></i>
              </span>
              <span onClick={() => props.editModal(props.id)}>
                <i className="fas fa-edit"></i>
              </span>
          </div>
      </div>
    );
  }

export default AuthCard;