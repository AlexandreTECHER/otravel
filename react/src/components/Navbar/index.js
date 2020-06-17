import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faSearch } from '@fortawesome/free-solid-svg-icons';
import {IconButton, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import './style.css';
import useStyles from './style.js';
import InscriptionModal from '../../containers/Inscription';
import ItemsMenu from '../../containers/NavBarTop';
import FilterPc from '../../containers/filterPC';
import { Link, Route, BrowserRouter as Router, Redirect } from 'react-router-dom';
import Account from './account';
import ConnexionButton from '../../containers/ConnexionButtonContainer'
import AddPlaceButton from '../../containers/AddPlaceButtonContainer'

const NavBar = ({isLogged, isAdmin }) => {

  const classes = useStyles();

  const [openMenu, setOpenMenu] = useState(null);

  const handleClick = (event) => {
    setOpenMenu(event.currentTarget);
  };

  const handleClose = () => {
    setOpenMenu(null);
  };

  return(
  <nav className="navbar navbar-expand-lg navbar-light menuOtravel " >
    <a className="navbar-brand navbar--title" href="#">O'Travel</a>


    {/* VERSION ORDINATEUR */ }
    <div className="menu-desktop">
      <div className="nav-item nav-link">
      <AddPlaceButton isLogged={isLogged}/>
      </div>

      <div className="dropdown">
      <FilterPc />
      </div>
      <div className="dropdown">
        <button className="btn navbar-btn dropdown" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false" type="button">
          Plus
        </button>
        <div className="dropdown-menu dropdown-menu-right more--infos">
          <div><Link to="/conditions-utilisations">Conditions</Link></div>
          <div><Link to="/a-propos">A propos</Link></div>
          <div><Link to="/contact">Conctact</Link></div>
        </div>
      </div>
      {
        isAdmin.includes('ROLE_ADMIN')&&
        <Button type="button"><a target="_blank" href="https://apiotravel.ovh/admin">Admin</a></Button>
      }

      <div className="dropdown">
        <button className="btn navbar-btn dropdown" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false" type="button">
          <FontAwesomeIcon icon={faUserCircle} className="user--circle" />
        </button>
        <div className="dropdown-menu dropdown-menu-right menuP">
          <ConnexionButton />
          {
            !isLogged&& <InscriptionModal />
          }
          
          {
            isLogged&& <Account />
          }
        </div>
      </div>
    </div>

    {/* VERSION MOBILE  */ }




    <IconButton
    edge="start"
    className={classes.menuButton}
    color="inherit"
    aria-label="open drawer"
    onClick={handleClick}
    >
    <MenuIcon />
    </IconButton>
    <ItemsMenu openMenu={openMenu} closeMenu={handleClose} />
  </nav>
);
}
export default NavBar;
