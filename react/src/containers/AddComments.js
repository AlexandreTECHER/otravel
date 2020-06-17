import { connect } from 'react-redux';
import { changeTitleComment, changeTextComment, sendComment, resetCreatedSuccess} from '../actions/comments';
import addCommentsModal from '../modal/addCommentsModal';

const mapStateToProps = (state) => ({
  newTitreComment: state.commentsReducer.form.title,
  newTextComment: state.commentsReducer.form.text,
  createSuccess: state.commentsReducer.createSuccess
});

const mapDispatchToProps = (dispatch) => ({
    inputChangeTitleComment: (event) => dispatch(changeTitleComment(event)),
    inputChangeTextComment: (event) => dispatch(changeTextComment(event)),
    sendComment: () => dispatch(sendComment()),
    resetCreatedSuccess: (event) => dispatch(resetCreatedSuccess(event)),
});

export default connect(mapStateToProps, mapDispatchToProps)(addCommentsModal);

