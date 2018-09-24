import React from 'react';
import {Link} from 'react-router-dom';

const Footer = ()=> { 
    return (
        <div className="container">
            <footer className='footer'>
                <ul className='footer__left-nav'>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/products">Destinations</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
                <ul className='footer__right-nav'>
                    <li><a>Facebook</a></li>
                    <li><a>Instagram</a></li>
                    <li><a>Twitter</a></li>
                </ul>
                <ul className='footer__bottom-nav'>
                    <li><a>FAQ</a></li>
                    <li><a>Help</a></li>
                    <li><a>Customer Service</a></li>
                </ul>
            </footer>
        </div>
    )
}

export default Footer;