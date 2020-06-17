import React, { useEffect} from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './style.css';
import Footer from '../../Footer';
import InputComponent from '../../Generique/inputComponent';

const InformationsUser = ({username, email, date, contributions, inputChangeEmailInformation, inputChangePseudoInformation, inputChangePasswordInformation, newUserPassword, newUserEmail, newUserPseudo, insertNewInformation, updateMessage, userAvatar, isLogged}) => { 
    
    

    

    return(
    <div className="informations--user">
       {
           !isLogged && <Redirect to="/" />
       }
        <header>
            <Link to="/"><h1>O'travel</h1></Link>
            <h2>Mes informations</h2>
        </header>

        <main className="informations--user__content">
           <div id="user__picture" style={{margin:'auto', textAlign:'center'}} >
                <img src={`https://apiotravel.ovh/${userAvatar}`} style={{width:'150px', height:'150px', borderRadius:'50%'}}></img>
           </div>
           <div className="user--statistic">
               <div className="user--additions">Contribution: <span>{contributions != undefined ? contributions.length : "0"}</span> ajouts</div>
           </div>
           <div className="user--all--data">
              <div className="user--username user--data ">
                  <div className="user--label--data" >Changer ici pour un nouveaux pseudo</div>
                  <InputComponent label={username} value={newUserPseudo} onChange={(event) => inputChangePseudoInformation(event.target.value)} />
              </div>
              <div className="user--email user--data ">
                  <div className="user--label--data">Changer ici votre Email</div>
                  <InputComponent label={email} value={newUserEmail} onChange={(event) => inputChangeEmailInformation(event.target.value)} />
              </div>
              <div className="user--username user--data ">
                <div className="user--label--data">Changement de mot de passe</div>
                <InputComponent value={newUserPassword} onChange={(event) => inputChangePasswordInformation(event.target.value)} />
            </div>
           </div>
        </main>

        <footer className="modification--data">
            <button type="button" onClick={() => {insertNewInformation()}}>Modifier les informations</button>
            <p><a href="#">Supprimer le compte</a></p>
            <div>
                <h2>{updateMessage}</h2>
            </div>
        </footer>

        <Footer />

    </div>
    );
};

InformationsUser.propTypes = {
    username: PropTypes.string,
    email: PropTypes.string,
    date: PropTypes.string,
    contributions: PropTypes.array,
};

export default InformationsUser;