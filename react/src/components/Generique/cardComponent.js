import React, { useState } from 'react';

// import material ui
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles((theme) => ({
  header:{
    backgroundColor: '#3f51b5',
    color: '#fff',
    
  },
  title:{
    fontSize: '0.95em'
  }
  

}));

const cardComponent = ({ children, title}) => {
    const classes = useStyles();
  return (

          <Card className="mb-3 mr-1 column">
            <CardHeader
            className={classes.header}
            title={title}
            classes={{title:classes.title}}
            >
            </CardHeader>
            <CardContent>
                {children}
            </CardContent>
          </Card>
          
);
}
export default cardComponent;