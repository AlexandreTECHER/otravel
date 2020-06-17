import React from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { grey } from '@material-ui/core/colors';
import DialogTitleComponent from '../components/Generique/dialogTitleComponent';
import { isEmpty } from 'lodash';

const useStyles = makeStyles(() => ({
    root: {
        maxWidth: 345,
        marginBottom: '1rem',
      },
      avatar: {
        backgroundColor: grey[500],
      },
}));



const ViewCommentPlace = ({ onClose, open, commentaryInfos }) => {

  const classes = useStyles();

  console.log(commentaryInfos);
  return (
    <Dialog onClose={onClose} aria-labelledby="simple-dialog-title" open={open}>
    <DialogTitleComponent onClose={onClose} id="simple-dialog-title" style={{paddingRight: '3rem'}} >Commentaires de ce lieu</DialogTitleComponent>
      <DialogContent>
{ commentaryInfos.map((comment) => (

        <Card className={classes.root} key={comment.id}>
        <CardHeader
            avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
            { isEmpty(comment.user.avatar)?
                <img style={{ width:'100%' }} src={`https://apiotravel.ovh/uploads/images/account.png`}/>:
                <img style={{ width:'100%' }} src={`https://apiotravel.ovh/${comment.user.avatar}`}/>
            
            }
            </Avatar>
            }
        
            title={comment.user.username}
            subheader={comment.created_at}
        />
        <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
            {comment.text}
            </Typography>
        </CardContent>
        </Card>
        ))}
      </DialogContent>
  </Dialog>
  );
}

export default ViewCommentPlace;