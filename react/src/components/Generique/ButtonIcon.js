import React from 'react';
import Button from '@material-ui/core/Button';

const ButtonIcon = ({ 
    variant, 
    size, 
    color, 
    title, 
    startIcon, 
    onClick }) => {

    return(
        <Button 
            variant={variant} 
            size={size} 
            color={color} 
            title={title} 
            startIcon={startIcon} 
            onClick={onClick}
        >
            {title}
        </Button>
    );
}

export default ButtonIcon;
