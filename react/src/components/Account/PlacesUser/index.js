import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import './style.css';
import Footer from '../../Footer';
import Places from './itemsPlaces';
import { v4 as uuid } from 'uuid';

const InformationsUser = ({places, isLogged}) => {

  let nbPlaces;

       if(places.length != 0) {
      nbPlaces = true
  } else {
      nbPlaces = false;
  }
  



    return(
    <div className="places--user">
        {
           !isLogged && <Redirect to="/" />
         }
          <header>
            <Link to="/"><h1>O'travel</h1></Link>
            <h2 style={{fontWeight:'lighter'}}>Mes ajouts</h2>
        </header>

        <main>
            {
               nbPlaces&&places.map((place) => <Places place={place} key={uuid()} />)
            }
            {
                !nbPlaces&&<div style={{textAlign:'center', marginTop:'1rem'}}>Aucun lieux ajoutés</div>
            }
        </main>

    </div>
    );
};

InformationsUser.propTypes = {
    places: PropTypes.array,
}


export default InformationsUser;