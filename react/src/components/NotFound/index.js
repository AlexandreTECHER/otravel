import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

const NotFound = () => (
    <div>
       <div className="not--found"> 
       <header>
            <Link to="/"><p>O'travel</p></Link>
        </header>
          <p className='not--found__oups'>Oups !</p>
          <p className="not--found__message">La page que vous recherchez semble introuvable.</p>
          <p className="not--found__code">Code d'erreur : 404</p>
            <div className="display">
                <div>.</div>
                <div>.</div>
                <div>.</div>
            </div>
            <p className="aide--liens">Voici quelques liens utiles à la place :</p>
           <div className="liens">
               <Link to="/" className="lien">Direction la carte</Link>
               <Link to="/conditions-utilisations" className="lien">Voir les conditions d'utilisations</Link>
               <Link to="/a-propos" className="lien">Plus d'informations</Link>
           </div>
        </div>   
    </div>
);

export default NotFound;