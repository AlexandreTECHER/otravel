import React from 'react';
import TextField from '@material-ui/core/TextField';

const InputComponent = ({ variant, label, value, onChange, rows, multiline }) => {

    return(
        <TextField label={label} variant={variant} value={value} onChange={onChange}
        rows={rows} multiline={multiline} />
    );
}

export default InputComponent; 
