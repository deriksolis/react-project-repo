import React from 'react';
import AdminHeader from './AdminHeader';
import ContactsCards from './ContactsCards';

const AdminContact = (props) => {
    return (
        <div className="container"> 
            <AdminHeader />
            <div className="contactcard-container">
                {props.contacts.map( contact => {
                    return <ContactsCards 
                    key = {contact.firstName}
                    firstName = {contact.firstName} 
                    lastName = {contact.lastName}
                    email = {contact.email}
                    work = {contact.work}
                    description = {contact.description} />
                    })}
            </div>
        </div>
    )
};

export default AdminContact;