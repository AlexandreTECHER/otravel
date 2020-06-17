import { connect} from 'react-redux';
import MapContainer from '../components/MapContainer';
import { fetchPlaces } from '../actions/places';

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => ({
    fetchPlaces: () => {
        dispatch(fetchPlaces());
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(MapContainer);
