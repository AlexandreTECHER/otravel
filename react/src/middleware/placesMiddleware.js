import axios from 'axios';
import {
  FETCH_PLACES,
  FETCH_SHOWER,
  FETCH_TOILET,
  FETCH_SPOT_VAN,
  FETCH_SPOT_KITE,
  FETCH_LAUNDRY,
  FETCH_MARKET_FARM,
  fetchSpotVanSuccess,
  fetchSpotKiteSuccess,
  fetchShowerSuccess,
  fetchPlacesSuccess,
  fetchToiletSuccess,
  fetchLaundrySuccess,
  fetchMarketFarmSuccess,
} from '../actions/places';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_PLACES:

      axios({
        method: 'post',
        url: 'https://apiotravel.ovh/api/places',

      }).then((res) => {
        store.dispatch(fetchPlacesSuccess(res.data));
      }).catch((err) => {
      });

      break;
    case FETCH_SHOWER:
      axios({
        method: 'post',
        url: 'https://apiotravel.ovh/api/category/places/3',

      }).then((res) => {
        // console.log('VOICI LA LISTE DES DOUCHES PAR FILTRE', res);
        store.dispatch(fetchShowerSuccess(res.data));
      }).catch((err) => {
        // console.log(err);
      });

      break;
    case FETCH_TOILET:

      axios({
        method: 'post',
        url: 'https://apiotravel.ovh/api/category/places/4',

      }).then((res) => {
        // console.log('VOICI LA LISTE DES WC PAR FILTRE', res);
        store.dispatch(fetchToiletSuccess(res.data));
      }).catch((err) => {
      });

      break;
    case FETCH_SPOT_KITE:

      axios({
        method: 'post',
        url: 'https://apiotravel.ovh/api/category/places/5',

      }).then((res) => {
        // console.log('VOICI LA LISTE DES SPOT DE KITE PAR FILTRE', res);
        store.dispatch(fetchSpotKiteSuccess(res.data));
      }).catch((err) => {
      });

      break;
    case FETCH_SPOT_VAN:

      axios({
        method: 'post',
        url: 'https://apiotravel.ovh/api/category/places/6',

      }).then((res) => {
        // console.log('VOICI LA LISTE DES SPOT POUR VAN PAR FILTRE', res);
        store.dispatch(fetchSpotVanSuccess(res.data));
      }).catch((err) => {
      });

      break;
    case FETCH_LAUNDRY:

      axios({
        method: 'post',
        url: 'https://apiotravel.ovh/api/category/places/7',

      }).then((res) => {
        // console.log('VOICI LA LISTE DES LAVOMATIC PAR FILTRE', res);
        store.dispatch(fetchLaundrySuccess(res.data));
      }).catch((err) => {
      });

      break;
    case FETCH_MARKET_FARM:

      axios({
        method: 'post',
        url: 'https://apiotravel.ovh/api/category/places/8',

      }).then((res) => {
        // console.log('VOICI LA LISTE DES PRODUCTEUR PAR FILTRE', res);
        store.dispatch(fetchMarketFarmSuccess(res.data));
      }).catch((err) => {
      });

      break;
      // case CHECK_FILTER:

      //     axios({
      //         method: 'post',
      //         url: `https://apiotravel.ovh/api/category/places/${store.getState().placesReducer.filter}`,

      //     }).then((res) => {
      //         console.log('VOICI LA LISTE DES LIEUX PAR FILTRE',res);
      //         store.dispatch(addFilter(res.data));
      //     }).catch((err) => {
      //         console.log(err);
      //     });

      // break;

      // case REMOVE_SHOWER:

      //         console.log('-----------------------------------------------------');
      //         const showers = store.getState().placesReducer.newList;
      //         const resultShower = showers.filter((shower) => shower.name != 'douche' );
      //         store.dispatch(removeFilterShower(resultShower))
      //         console.log('------------------------------------------------------');

      //     break;

      // case REMOVE_TOILET :

      //     console.log('-----------------------------------------------------');
      //     const toilets = store.getState().placesReducer.newList;
      //     const resultToilet = toilets.filter((toilet) => toilet.name != 'toilette' );
      //     console.log(resultToilet);
      //     store.dispatch(removeFilterToilet(resultToilet))
      //     console.log('------------------------------------------------------');

      // break;
    default:
      next(action);
  }
};
