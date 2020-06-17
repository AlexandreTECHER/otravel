import { connect } from 'react-redux';
import { isFilterShower, isFilterToilet, isFilterSpotKite, isFilterSpotVan, isFilterLaundry, isFilterMarketFarm } from '../actions/places';
import FilterPc from '../modal/filterPC';

const mapStateToProps = (state) => ({
    isFilterShower: state.placesReducer.isFilterShower,
    isFilterToilet: state.placesReducer.isFilterToilet,
    isFilterSpotKite: state.placesReducer.isFilterSpotKite,
    isFilterSpotVan: state.placesReducer.isFilterSpotVan,
    isFilterLaundry: state.placesReducer.isFilterLaundry,
    isFilterMarketFarm: state.placesReducer.isFilterMarketFarm,
    places: state.placesReducer.list,
});

const mapDispatchToProps = (dispatch) => ({
    changeIsFilterShower: ()=> dispatch(isFilterShower()),
    changeIsFilterToilet: () => dispatch(isFilterToilet()),
    changeIsFilterSpotKite: () => dispatch(isFilterSpotKite()),
    changeIsFilterSpotVan: () => dispatch(isFilterSpotVan()),
    changeIsFilterLaundry: () => dispatch(isFilterLaundry()),
    changeIsFilterMarketFarm: () => dispatch(isFilterMarketFarm())
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterPc);