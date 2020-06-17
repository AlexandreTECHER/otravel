import { connect } from 'react-redux';
import NavBarBottom from '../components/NavBarBottom/index';

const mapStateToProps = (state) => ({
    isLogged: state.user.isLogged,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(NavBarBottom);