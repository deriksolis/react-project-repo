import React from 'react';
import {NavLink} from 'react-router-dom';

const Admin = ()=> { 
    return (
        <header className="header">
           <nav className='nav'>
               <ul className='nav__ul'>
                   <li><NavLink to="/admin">EDIT PRODUCTS</NavLink></li>
                   <li><NavLink to="/contact-info">CONTACT INFO</NavLink></li>
               </ul>
           </nav>
       </header>
    )
}

export default Admin;