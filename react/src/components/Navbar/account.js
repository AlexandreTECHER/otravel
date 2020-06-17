import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';



const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List style={{marginTop:'0px', paddingTop:'0px'}}>
          <ListItem style={{backgroundColor: '#3f51b5', color:'white', fontWeight:'bold', paddingTop:'0px', display:'flex'}}>
            <ListItemText primary={'Mon compte'}/>
            <FontAwesomeIcon icon={faTimes} />
          </ListItem>

          <Link to="/mes-informations">
          <ListItem button>
            <ListItemText primary={'Mes informations'} />
          </ListItem>
          </Link>

          
          
          <Link to="/mes-ajouts">
          <ListItem button>
          <ListItemText primary={'Mes ajouts'} />
          </ListItem>
          </Link>

         
      
      </List>
      <Divider />

    </div>
  );

  return (
    <div>
      {[ 'Top'].map((anchor) => (
        <React.Fragment key={'top'}>
          <Button onClick={toggleDrawer('top', true)} style={{textTransform:'lowercase',fontSize:'1rem'}}>{'Mon compte'}</Button>
          <Drawer anchor={'top'} open={state['top']} onClose={toggleDrawer('top', false)}>
            {list('top')}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
