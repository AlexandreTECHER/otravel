// == Import npm
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './style.css';

import { Switch, Route, Redirect } from 'react-router-dom';
// == Import

// import MapContainer from '../MapContainer';

import MapContainer from '../../containers/Geolocation'
import NavBarBottom from '../../containers/NavBarBottom';
import InformationsUser from '../../containers/AccountInformtions';
import Conditions from '../Conditions';
import Informations from '../Informations';
import Contact from '../../containers/FormContact';
import PAGE404 from '../NotFound';
import Places from '../../containers/PlacesUser';


const DEFAULT_VIEWPORT = {
  center: [46.603354, 1.8883335],
  zoom: 5,
}

// == Composant

const App = ({ checkAuth , lat, long, isLogged}) => {

  const [viewport, setViewport] = useState(DEFAULT_VIEWPORT)

  useEffect(checkAuth, []);

  const onClickReset = () => {
    setViewport({center:[lat, long], zoom: 12})
  }
  
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" render={() => (
          <div>    
            <MapContainer viewport={viewport} setViewport={setViewport} />
            <NavBarBottom onClick={onClickReset} />
          </div>
        )}
        />
      
        <Route exact path="/mes-ajouts" component={Places} />
        <Route exact path="/mes-informations" component={InformationsUser} />
        <Route exact path="/conditions-utilisations" component={Conditions} />
        <Route exact path="/a-propos" component={Informations} />
        <Route exact path ="/contact" component={Contact} />
        <Route component={PAGE404} />
      </Switch>
    </div>

);
}

App.propTypes = {
  checkAuth: PropTypes.func,
  geolocation: PropTypes.func,
};

// == Export
export default App;
