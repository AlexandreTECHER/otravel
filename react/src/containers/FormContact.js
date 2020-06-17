import { connect } from 'react-redux';
import FormContact from  '../components/Contact';

const mapStateToProps = (state) => ({
    pseudo: state.user.userInfos.username,
    email: state.user.userInfos.email
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(FormContact);