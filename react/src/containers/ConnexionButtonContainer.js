import { connect } from 'react-redux';
import { logout } from '../actions/connexion';
import ConnexionButtonComponent from '../components/ConnexionButtonComponent/connexionButtonComponent'

const mapStateTopProps = (state) => ({
  isLogged: state.user.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(mapStateTopProps, mapDispatchToProps)(ConnexionButtonComponent);