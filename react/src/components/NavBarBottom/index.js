import React from 'react';
import FilterPlace from '../../containers/filterPC';
import LocalisationButton from './LocalisationButton';
import './style.css';
import AddPlaceButton from '../../containers/AddPlaceButtonContainer'

const NavBarBottom = (props) => {
    
    const { isLogged, onClick,} = props

    return(
        <div className="nav--bar--bottom">
            <div className="mobile--buttons">
                <FilterPlace />
                    <AddPlaceButton isLogged={isLogged}/>
                <LocalisationButton 
                onClick={onClick}
                />
            </div>
            <div className="localisation--button--desktop">
            <LocalisationButton 
            onClick={onClick}
            />
            </div>
        </div>
    );
};

export default NavBarBottom;