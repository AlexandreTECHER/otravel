import { connect } from 'react-redux';
import mapContainer from '../components/MapContainer';
import { geolocation } from '../actions/geolocation';
import { 
    fetchPlaces, 
    fetchShower, 
    fetchToilet, 
    addLocationPlace, 
    idClickPlace, 
    fetchSpotKite, 
    fetchSpotVan, 
    fetchLaundry,
    fetchMarketFarm} from '../actions/places';

const mapStateToProps = (state) => ({
    lat: state.geolocation.coords.lat,
    long: state.geolocation.coords.long,
    isLocated: state.geolocation.isLocated,
    list: state.placesReducer.list,
    listShower: state.placesReducer.listShower,
    isFilterShower: state.placesReducer.isFilterShower,
    listToilet: state.placesReducer.listToilet,
    isFilterToilet: state.placesReducer.isFilterToilet,
    listSpotKite: state.placesReducer.listSpotKite,
    isFilterSpotKite: state.placesReducer.isFilterSpotKite,
    listSpotVan: state.placesReducer.listSpotVan,
    isFilterSpotVan: state.placesReducer.isFilterSpotVan,
    listLaundry: state.placesReducer.listLaundry,
    isFilterLaundry: state.placesReducer.isFilterLaundry,
    listMarketFarm: state.placesReducer.listMarketFarm,
    isFilterMarketFarm: state.placesReducer.isFilterMarketFarm,
    newList: state.placesReducer.newList,
    isLogged: state.user.isLogged,
    clickLocation: state.placesReducer.locationPlace
});

const mapDispatchToProps = (dispatch) => ({
    userLocation: (position) => {
        dispatch(geolocation(position));
    },
    fetchPlaces: () => {
        dispatch(fetchPlaces());
        dispatch(fetchShower());
        dispatch(fetchToilet());
        dispatch(fetchSpotKite());
        dispatch(fetchSpotVan());
        dispatch(fetchLaundry());
        dispatch(fetchMarketFarm());
    },
    addLocationPlace: (position) => {
        dispatch(addLocationPlace(position));
     },
    idClickPlace: (idPlace) => {
        dispatch(idClickPlace(idPlace));
     }
});

export default connect(mapStateToProps, mapDispatchToProps)(mapContainer);
