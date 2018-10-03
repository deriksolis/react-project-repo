import React from 'react';

const ContactsCards = (props) => {
    return (
        <div className="contactcard-container__contactcard">
            <p className="contactcard-container__contactcard__name">{`${props.firstName} ${props.lastName}`}</p>
            <p className="contactcard-container__contactcard__work">{`${props.work}`}</p>
            <p className="contactcard-container__contactcard__description">{`${props.description}`}</p>
            <p className="contactcard-container__contactcard__email">{`${props.email}`}</p>
        </div>
    )
};

export default ContactsCards;