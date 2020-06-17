import { connect } from 'react-redux';
import popupNavBar from '../components/popupNavBar/popupNavBar';

const mapStateToProps = (state) => ({
  isLogged: state.user.isLogged,
});

const mapDispatchToProps = {} ;

export default connect(mapStateToProps, mapDispatchToProps)(popupNavBar);