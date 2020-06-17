import { connect } from 'react-redux';
import PlacesUser from '../components/Account/PlacesUser';

const mapStateToProps = (state) => ({
  places: state.user.userInfos.Places,
  isLogged: state.user.isLogged,
});

const mapDispatchToProps = {} ;

export default connect(mapStateToProps, mapDispatchToProps)(PlacesUser);