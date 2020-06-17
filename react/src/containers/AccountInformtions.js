import { connect } from 'react-redux';
import InformationsUser from '../components/Account/InformationsUser';
import { changeNewEmail, changeNewPseudo, changeNewPassword, insertNewInformation } from '../actions/account';

const mapStateToProps = (state) => ({
    username: state.user.userInfos.username,
    email: state.user.userInfos.email,
    date: state.user.userInfos.created_at,
    contributions: state.user.userInfos.Places,
    newUserPseudo: state.user.updateUserInfo.newPseudo,
    newUserEmail: state.user.updateUserInfo.newEmail,
    newUserPassword: state.user.updateUserInfo.newPassword,
    updateMessage: state.user.updateMessage,
    userAvatar: state.user.userInfos.avatar,
    isLogged: state.user.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
    inputChangeEmailInformation: (event) => dispatch(changeNewEmail(event)),
    inputChangePseudoInformation: (event) => dispatch(changeNewPseudo(event)),
    inputChangePasswordInformation: (event) => dispatch(changeNewPassword(event)),
    insertNewInformation: () => dispatch(insertNewInformation()),
});

export default connect(mapStateToProps, mapDispatchToProps)(InformationsUser);