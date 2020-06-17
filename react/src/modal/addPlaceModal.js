import React, { useState } from 'react';
import {isEmpty} from 'lodash';
import DialogTitleComponent from '../components/Generique/dialogTitleComponent';
import InputComponent from '../components/Generique/inputComponent';
import ButtonIcon from '../components/Generique/ButtonIcon';

// import material ui
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  header:{
    backgroundColor: '#3f51b5',
    color: '#fff',
    
  },
  title:{
    fontSize: '0.95em'
  }
  

}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


const AddPlaceModal = ({cityPlace, zipCodePlace, streetPlace, categoryPlace, namePlace , descriptionPlace, addNamePlace, addCategoryPlace, addDescriptionPlace, addZipCodePlace, addCityPlace, addStreetPlace, lat, long, addPlace, onClose, open, clickLocation, addNamePicturePlace}) => {
  const classes = useStyles();
  
  const [value, setValue] = useState({});

  const handleChange = (event) => {
    setValue(event.target.value);

  };

  const getPicture = (input) =>{
    //var input = event.target.files[0];
    addNamePicturePlace(input.name);
    var reader = new FileReader(); 
    reader.onload = function(){
        const photo = document.createElement("img");
        photo.src = reader.result;
        photo.style.height = "200px";
        photo.style.width ="300px";
        photo.id="photoInscription"
        const avatar = document.getElementById('avatar');
        avatar.append(photo);
        localStorage.setItem('picturePlace',reader.result);
   };  
    reader.readAsDataURL(input);
  }

  const formLatitude = () => {

    if (!isEmpty(clickLocation)) {
      return clickLocation.lat;
    } else {
      return lat;
    }
  }

  const formLongitude = () => {

    if (!isEmpty(clickLocation)) {
      return clickLocation.lng;
    } else {
      return long;
    }
  }
  return (
      <Dialog fullScreen open={open} onClose={onClose} TransitionComponent={Transition}>
        <DialogTitleComponent onClose={onClose} id="simple-dialog-title">Ajouter un lieu</DialogTitleComponent>
        <DialogContent className="m-auto row">
          <Card className="mb-3 mr-1 column">
            <CardHeader
            className={classes.header}
            title="Adresse du lieu"
            classes={{title:classes.title}}
            >
            </CardHeader>
            <CardContent>
              <div className="mb-3">
                <InputComponent 
                  id="street" 
                  label="Rue" 
                  type="text" 
                  value={streetPlace} 
                  variant="outlined"
                />
              </div>
              <div className="mb-3">
                <InputComponent 
                  id="zipcode" 
                  label="Code Postal" 
                  type="text" 
                  value={zipCodePlace} 
                  variant="outlined"
                />
              </div>
              <div className="mb-3">
                <InputComponent 
                  id="city" 
                  label="Ville" 
                  type="text" 
                  value={cityPlace} 
                  variant="outlined"
                   />
              </div>
              <div className="mb-3">
                <InputComponent 
                  id="outlined-basic" 
                  label="Latitude" 
                  variant="outlined" 
                  value={formLatitude()} />
              </div>
              <div className="mb-3">
                <InputComponent 
                  id="outlined-basic" 
                  label="Longitude" 
                  variant="outlined" 
                  value={formLongitude()} />
              </div>
            </CardContent>
          </Card>
          <Card className="mb-3 mr-1 column">
            <CardHeader
            className={classes.header}
            title="Description du lieu"
            classes={{title:classes.title}}
            >
            </CardHeader>
            <CardContent>
              <div className="mb-3">
                <InputComponent 
                  id="name" 
                  label="Nom du lieu" 
                  type="text" 
                  variant="outlined"
                  value={namePlace} 
                  onChange={(event) => addNamePlace(event.target.value)} 
                />
              </div>
              <div className="mb-3">
                <FormControl component="fieldset">
                  <FormLabel component="legend">Type de services</FormLabel>
                  <RadioGroup aria-label="services" name="services" value={value} onChange={handleChange}>
                  <FormControlLabel 
                    value="3" 
                    control={<Radio />} 
                    label="Douche" 
                    onChange={(event) => addCategoryPlace(event.target.value)} 
                  />
                  <FormControlLabel 
                    value="4" 
                    control={<Radio />} 
                    label="Toilette" 
                    onChange={(event) => addCategoryPlace(event.target.value)}
                  />
                  <FormControlLabel 
                    value="5" 
                    control={<Radio />} 
                    label="Spot KiteSurf" 
                    onChange={(event) => addCategoryPlace(event.target.value)} 
                  />
                  <FormControlLabel 
                    value="6" 
                    control={<Radio />} 
                    label="Spot Van" 
                    onChange={(event) => addCategoryPlace(event.target.value)}
                  />
                  <FormControlLabel 
                    value="7" 
                    control={<Radio />} 
                    label="Lavomatique" 
                    onChange={(event) => addCategoryPlace(event.target.value)} 
                  />
                  <FormControlLabel 
                    value="8" 
                    control={<Radio />} 
                    label="Producteur/artisan" 
                    onChange={(event) => addCategoryPlace(event.target.value)}
                  />
                  </RadioGroup>
                </FormControl>
              </div>
              <div className="mb-3">
                  <InputComponent
                    id="outlined-multiline-static"
                    label="Description"
                    multiline
                    rows={6}
                    variant="outlined"
                    value={descriptionPlace}
                    onChange={(event) => addDescriptionPlace(event.target.value)}
                  />
              </div>
            </CardContent>
          </Card>
          <Card className=" mb-3 column">
            <CardHeader
            className={classes.header}
            title="Photo du lieu"
            classes={{title:classes.title}}
            >
            </CardHeader>
            <CardContent>
              <div className="mb-3">
                <input type="file" label="file" onChange={(event) => {getPicture(event.target.files[0])}}/>
              </div>
              
              <div id="avatar"></div>
            </CardContent>
          </Card>
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
          title="Ajouter"
          onClick={() =>{addPlace(); onClose(); }}
        />
      </DialogActions>
      </Dialog>
);
}
export default AddPlaceModal;