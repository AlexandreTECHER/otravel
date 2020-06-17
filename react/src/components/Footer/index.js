import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';


const Footer = () => (
    <div className="footer">
        <ul className="footer__menu">
            <Link to="/conditions-utilisations"><li>Conditions</li></Link>
            <Link to="/a-propos"><li>A propos</li></Link>
            <Link to="contact"><li>Contact</li></Link>
            <Link to="/"><li>carte</li></Link>
        </ul>
    </div>
);

export default Footer;