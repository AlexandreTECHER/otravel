import React, {useState} from 'react';
import ButtonIcon from '../Generique/ButtonIcon';
import DirectionsCarRoundedIcon from '@material-ui/icons/DirectionsCarRounded';
import VisibilityRoundedIcon from '@material-ui/icons/VisibilityRounded';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import AddCommentsModal from '../../containers/AddComments';
import ViewComments from '../../modal/viewCommentModal';
import LoginModal from '../../containers/Login';
import './style.css';

const PopupNavBar = ({ placeInfos, isLogged }) => {

    const [openComments, setOpenComments] = useState(false);
    const [open, setOpen] = useState(false);

    const handleOpenComments = () => {
        setOpenComments(true);
    }

    const handleCloseComments = () => {
        setOpenComments(false);
      };

    const handleClickOpen = () => {
    setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return(
        <div className="popupNavbar">
            <ButtonIcon 
                className="buttonPopupNavbar"
                variant="contained" 
                size="small" 
                color="primary" 
                title="Commentaire" 
                startIcon={<VisibilityRoundedIcon />}
                onClick={handleOpenComments}
             />
            <ButtonIcon 
                className="buttonPopupNavbar"
                variant="contained" 
                size="small" 
                color="primary" 
                title="Commentaire" 
                startIcon={<AddCircleRoundedIcon />}
                onClick={handleClickOpen}
             />
            {/*<ButtonIcon 
                variant="contained" 
                size="small" 
                color="primary" 
                title="Itineraire" 
                startIcon={<DirectionsCarRoundedIcon />}
            />*/}
             <ViewComments 
                open={openComments} 
                onClose={handleCloseComments} 
                commentaryInfos={placeInfos.commentary} 
                onClick={handleClickOpen}
              />

             {
                isLogged ?
                <AddCommentsModal 
                open={open} 
                onClose={handleClose} 
                />
                : <LoginModal 
                open={open}
                setOpen={setOpen}
                onClose={handleClose}
              />
             }
        </div>
    );
}

export default PopupNavBar;
