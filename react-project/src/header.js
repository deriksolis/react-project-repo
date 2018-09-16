import React from 'react';
import {Link} from 'react-router-dom';

const Header = ()=> { 
    return (
        <header className="header">
            <p className="header__title">dreamcation</p>
           <nav className='nav'>
               <ul className='nav__ul'>
                   <li><Link to="/home">Home</Link></li>
                   <li><Link to="/products">Destinations</Link></li>
                   <li><Link to="/contact">Contact</Link></li>
               </ul>
           </nav>
           <i className="fas fa-user header__user"></i>
           <i className="fa fa-search header__search" aria-hidden="true"></i>
       </header>
    )
}

export default Header;