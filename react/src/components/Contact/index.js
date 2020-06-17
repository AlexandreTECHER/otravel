import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import Footer from '../Footer';

const Contact = ({email,pseudo}) => (
    <div className="contact">
       <header>
         <Link to="/"><h1>O'travel</h1></Link>
         <h2>Nous contater</h2>
       </header> 

       <form>
           <label htmlFor="contact__info">Nature de la question :</label>
           <select id="contact__info">
               <option>bug application</option>
               <option>Signaler un problème</option>
               <option>Suggestion</option>
           </select>
           <input type="text" className="contact__input" value={pseudo} disabled/>
           <input type="email"  className="contact__input" value={email} disabled />
           <textarea placeholder="Commentaire" rows="5" className="contact__input contact__comment"/>
           <br />
           <button type="submit" className="contact__submit">Envoyer</button>
       </form>
       <div className="contact__footer">
          <Footer />
       </div>
    </div>
);

export default Contact;