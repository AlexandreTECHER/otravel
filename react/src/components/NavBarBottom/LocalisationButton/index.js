import React from 'react';
import NavigationIcon from '@material-ui/icons/Navigation';
import './style.css';

const LocalisationButton = (props) => {

    const { onClick } = props
    
    return(    
        <button className="Localisation--Button"  onClick={onClick} >
            <NavigationIcon color="primary" />
        </button>
    )
};

export default LocalisationButton;