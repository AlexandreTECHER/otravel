import { connect } from 'react-redux';
import AddPlaceButtonComponent from '../components/AddPlaceButton/addPlaceButtonComponent';
import { sendAdress } from '../actions/geolocation';
import { resetClickLocation } from '../actions/places';

const mapStateToProps = (state) => ({
    clickLocation: state.placesReducer.locationPlace,
});

const mapDispatchToProps = (dispatch) => ({
    sendAdress: () => dispatch(sendAdress()),
    resetClickLocation: () => dispatch(resetClickLocation()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddPlaceButtonComponent);