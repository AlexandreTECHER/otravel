import React from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import ButtonIcon from '../components/Generique/ButtonIcon';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import InputComponent from '../components/Generique/inputComponent';
import DialogTitleComponent from '../components/Generique/dialogTitleComponent';

const AddCommentsModal = ({
  open, 
  onClose, 
  newTitreComment, 
  newTextComment, 
  inputChangeTitleComment, 
  inputChangeTextComment,
  sendComment,
  createSuccess,
  resetCreatedSuccess
}) => {

    if(createSuccess === true){  
      resetCreatedSuccess();
      onClose();
    } ;

  return (
    <Dialog onClose={onClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitleComponent onClose={onClose} id="simple-dialog-title">Ajouter un commentaire</DialogTitleComponent>
        <DialogContent>
        <div className="mb-3">
            <InputComponent           
            value={newTitreComment}
            onChange={(event) => inputChangeTitleComment(event.target.value)}
            variant="outlined"
            label="Titre du commentaire"
          />
        </div>
         <div>
          <InputComponent           
            value={newTextComment}
            onChange={(event) => inputChangeTextComment(event.target.value)}
            variant="outlined"
            label="Commentaire"
            multiline
            rows={4}
          />
          </div>
        </DialogContent>
      <DialogActions>
      <ButtonIcon  
        variant="contained" 
        size="small" 
        color="default" 
        title="Annuler" 
        onClick={() =>  (onClose())}
      />
      <ButtonIcon 
        variant="contained" 
        size="small" 
        color="primary" 
        title="Valider"
        onClick={() => (sendComment()) }
      />
      </DialogActions>
    </Dialog>
  );
};



export default AddCommentsModal;
