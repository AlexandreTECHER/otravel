import { connect } from 'react-redux';
import NavBar from '../components/Navbar/index';

const mapStateToProps = (state) => ({
    isLogged: state.user.isLogged,
    isAdmin: state.user.userInfos.roles
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);