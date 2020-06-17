import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { useSpring, animated } from 'react-spring'; // web.cjs is required for IE 11 support
import { FormControl, FormGroup, FormControlLabel, Switch } from '@material-ui/core';
import { faList } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
  btn: {
    backgroundColor: white,
    height: '40px',
    width: '40px',
    borderRadius: '50%',
    display: flex,
    justifyContent: center,
    alignItems: center,
  }
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

const SpringModal = () => {
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
      <button type="button" className={classes.btn} onClick={handleOpen}>
        <FontAwesomeIcon icon={faList} />
      </button>
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
              <FormGroup aria-label="position" column>

                <FormControlLabel
                  value="start"
                  control={<Switch color="primary" />}
                  label="Douche"
                  labelPlacement="start"
                />

                <FormControlLabel
                  value="start"
                  control={<Switch color="primary" />}
                  label="Lavomatic"
                  labelPlacement="start"
                />
              </FormGroup>
            </FormControl>
          </div>
        </Fade>
      </Modal>
      </div>
  );
}
export default SpringModal;