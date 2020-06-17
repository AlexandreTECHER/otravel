import React from 'react';
import FormLoginModal from '../../containers/Login';

const ConnexionButtonComponent = ({ isLogged, logout }) => {

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    
    return (
        <div className="nav-link"> 
            {
            isLogged&&
                <div>
                <button className="dropdown-item nav-link" type="button" onClick={() => {logout(), handleClose()}} style={{padding:'3'}}>
                    Déconnexion
                </button>
                </div>
            }
            { !isLogged &&<div>
            <button className="dropdown-item nav-link" type="button" onClick={handleOpen}>
                Connexion
            </button>
            <FormLoginModal 
                open={open}
                setOpen={setOpen}
                onClose={handleClose}
            />
            </div>}

        </div>
    )
}

export default ConnexionButtonComponent;