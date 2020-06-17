import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import Footer from '../Footer';
const Informations = () => (
    <div className="informations">
        <header className="informations__header" >
          <Link to="/"><h1>O'travel</h1></Link>
          <h2>A propos</h2>
        </header>

        <main className="informations__contents">
            <div className="informations__content">
                <h3>Présentation de O'travel</h3>
                <p>
                O’travel est un service de cartographie permettant de rendre visible, des lieux divers que peuvent rechercher des voyageurs. Nous pouvons par exemple retrouver sur l’application, des lieux de type services de première nécessité, comme l’approvisionnement en eau et nourritures, mais aussi des espaces publics comme des points de repos. 
                La particularité de l’application repose sur la participation active de la communauté. En effet, en tant que membres de O’travel, il est possible d’ajouter, noter ou encore commenter des lieux. Ceci permet à la fois pour les voyageurs, de répertorier des endroits utiles durant leur trajet, et de partager des sites qui ne sont pas forcément rendus visible par des applications tels que google map ou auroundMe par exemple. Cette particularité représente donc un atout majeur dans la mesure ou les membres ont dans un certain sens, le contrôle sur l’information. En effet, si nous regardons des commentaires sur des applications, nous pouvons retrouver le manque d’information, comme des horaires imprécis. Des adresses inaccessibles ou encore fermée ou encore des lieux non partagés.
                </p>
            </div>
            <div className="informations__content">
                <h3>Services</h3>
                <div>
                    En tant qu'utilisateur du site il est possible  : 
                    <ul>
                        <li>De rechercher un lieu/service précis en fonction des besoins</li>
                        <li>De filtrer ses recherches parmis un grand nombre de catégorie</li>
                        <li>D'ajouter et de partager des lieux</li>
                        <li>D'ajouter des avis </li>
                    </ul>
                </div>
            </div>

            <Footer />

        </main>
    </div>
);

export default Informations;