import React from 'react';
import {Link} from 'react-router-dom';
import auth0Client from './Auth/Auth';

const Header = ()=> { 
    return (
        <header className="header">
            <p className="header__title">dreamcation</p>
           <nav className='nav'>
               <ul className='nav__ul'>
                   <li><Link to="/">Home</Link></li>
                   <li><Link to="/products">Destinations</Link></li>
                   <li><Link to="/contact">Contact</Link></li>
                   {auth0Client.isAuthenticated() ? <li><Link to="/admin">Admin</Link></li> : null}
               </ul>
           </nav>
           {!auth0Client.isAuthenticated() && (
                  <button className="header__auth" onClick={auth0Client.login} >Log In</button>
            )}
            {auth0Client.isAuthenticated() && (
                  <button className="header__auth" onClick={auth0Client.logout} >Log Out</button>
            )}
           <i className="fas fa-user header__user"></i>
           <i className="fa fa-search header__search" aria-hidden="true"></i>
       </header>
    )
}

export default Header;