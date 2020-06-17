import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { useSpring, animated } from 'react-spring'; // web.cjs is required for IE 11 support
import { FormControl, FormGroup, FormControlLabel, Switch } from '@material-ui/core';
import { faList } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.css';



const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    margin: '4px',
    borderRadius: '4px',
    padding: theme.spacing(2, 4, 3),
    
  },
}));

const Fade = React.forwardRef((props, ref) => {
  const {
    in: open, children, onEnter, onExited, ...other
  } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element,
  in: PropTypes.bool.isRequired,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
};

const SpringModal = ({
  isFilterShower, 
  changeIsFilterShower, 
  isFilterToilet, 
  changeIsFilterToilet, 
  isFilterSpotKite, 
  changeIsFilterSpotKite,
  isFilterSpotVan, 
  changeIsFilterSpotVan, 
  isFilterLaundry, 
  isFilterMarketFarm, 
  changeIsFilterLaundry,
  changeIsFilterMarketFarm }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div>
      <button type="button" className="btn btn-circle pc mobile" onClick={handleOpen}>
        <span className="icon"><FontAwesomeIcon icon={faList} /></span>
        <span className="text">Catégories</span>
      </button>
     <div className="test">
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <FormControl component="fieldset">
              <FormGroup aria-label="position" >


                <FormControlLabel
                  checked={isFilterShower === false ? false : true}
                  value="1"
                  control={<Switch color="primary" />}
                  label="Douche"
                  labelPlacement="start"
                  // onClick={isFilterShower === false ? (event) => {changeIsFilterShower(); checkFilter(); console.log(event.target.label)} : (event) => {removeShower(); console.log(event.target.label)}}
                  onClick={() => changeIsFilterShower()}
                />

                <FormControlLabel
                  checked={isFilterToilet === false ? false : true}
                  value="2"
                  control={<Switch color="primary" />}
                  label="Toilette"
                  labelPlacement="start"
                  //onClick={isFilterToilet === false ? () => {changeIsFilterToilet(); checkFilter()} : () => {removeToilet()}}
                  onClick={()=> changeIsFilterToilet() }
                />
                <FormControlLabel
                  checked={isFilterSpotKite === false ? false : true}
                  value="3"
                  control={<Switch color="primary" />}
                  label="spot KiteSurf"
                  labelPlacement="start"
                  // onClick={isFilterShower === false ? (event) => {changeIsFilterShower(); checkFilter(); console.log(event.target.label)} : (event) => {removeShower(); console.log(event.target.label)}}
                  onClick={() => changeIsFilterSpotKite()}
                />

                <FormControlLabel
                  checked={isFilterSpotVan === false ? false : true}
                  value="4"
                  control={<Switch color="primary" />}
                  label="Spot van"
                  labelPlacement="start"
                  //onClick={isFilterToilet === false ? () => {changeIsFilterToilet(); checkFilter()} : () => {removeToilet()}}
                  onClick={()=> changeIsFilterSpotVan() }
                />
            
                <FormControlLabel
                  checked={isFilterLaundry === false ? false : true}
                  value="5"
                  control={<Switch color="primary" />}
                  label="Lavomatique"
                  labelPlacement="start"
                  //onClick={isFilterToilet === false ? () => {changeIsFilterToilet(); checkFilter()} : () => {removeToilet()}}
                  onClick={()=> changeIsFilterLaundry() }
                />

                <FormControlLabel
                  checked={isFilterMarketFarm === false ? false : true}
                  value="6"
                  control={<Switch color="primary" />}
                  label="Producteur/artisan"
                  labelPlacement="start"
                  //onClick={isFilterToilet === false ? () => {changeIsFilterToilet(); checkFilter()} : () => {removeToilet()}}
                  onClick={()=> changeIsFilterMarketFarm() }
                />
                
              </FormGroup>
            </FormControl>
          </div>
        </Fade>
      </Modal>
      </div> 
    </div>
  );
};

export default SpringModal;