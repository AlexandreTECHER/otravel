import { connect } from 'react-redux';
import App from '../components/App';

import { checkAuth } from '../actions/connexion';

const mapStateToProps = (state) => ({

  isLogged: state.user.isLogged,
  lat: state.geolocation.coords.lat,
  long: state.geolocation.coords.long,
});


const mapDispatchToProps = (dispatch) => ({
  checkAuth: () => {
    dispatch(checkAuth());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
