import {
  ADD_LOCATION_PLACE,
  FETCH_PLACES_SUCCESS,
  IS_FILTER_SHOWER,
  IS_FILTER_TOILET,
  RESET_LOCATION_PLACE,
  ID_CLICK_PLACE,
  FETCH_SHOWER_SUCCESS,
  FETCH_TOILET_SUCCESS,
  FETCH_SPOT_KITE_SUCCESS,
  FETCH_SPOT_VAN_SUCCESS,
  IS_FILTER_SPOT_KITE,
  IS_FILTER_SPOT_VAN,
  FETCH_LAUNDRY_SUCCESS,
  FETCH_MARKET_FARM_SUCCESS,
  IS_FILTER_LAUNDRY,
  IS_FILTER_MARKET_FARM,
} from '../actions/places';

export const initialState = {
  list: [],
  isFilterShower: true,
  isFilterToilet: true,
  isFilterSpotVan: true,
  isFilterSpotKite: true,
  isFilterLaundry: true,
  isFilterMarketFarm: true,
  filter: null,
  newList: [],
  listShower: [],
  listToilet: [],
  listSpotVan: [],
  listSpotKite: [],
  listLaundry: [],
  listMarketFarm: [],
  locationPlace: {},
  idClickPlace: null,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case ID_CLICK_PLACE:
      return {
        ...state,
        idClickPlace: action.payload,

      };
    case FETCH_PLACES_SUCCESS:
      // console.log(action.payload)
      return {
        ...state,
        list: [...action.payload],

      };
    case FETCH_SHOWER_SUCCESS:
      // console.log(action.payload)
      return {
        ...state,
        listShower: [...action.payload],

      };
    case FETCH_TOILET_SUCCESS:
      // console.log(action.payload)
      return {
        ...state,
        listToilet: [...action.payload],

      };
    case IS_FILTER_SHOWER:
      return {
        ...state,
        isFilterShower: !state.isFilterShower,
        // filter: 3
      };
    case IS_FILTER_TOILET:
      return {
        ...state,
        isFilterToilet: !state.isFilterToilet,
        // filter: 4
      };
    case FETCH_SPOT_KITE_SUCCESS:
      return {
        ...state,
        listSpotKite: [...action.payload],

      };
    case FETCH_SPOT_VAN_SUCCESS:
      return {
        ...state,
        listSpotVan: [...action.payload],

      };
    case IS_FILTER_SPOT_KITE:
      return {
        ...state,
        isFilterSpotKite: !state.isFilterSpotKite,
        // filter: 5
      };
    case IS_FILTER_SPOT_VAN:
      return {
        ...state,
        isFilterSpotVan: !state.isFilterSpotVan,
        // filter: 6
      };
      // =====
    case FETCH_LAUNDRY_SUCCESS:
      return {
        ...state,
        listLaundry: [...action.payload],

      };
    case FETCH_MARKET_FARM_SUCCESS:
      return {
        ...state,
        listMarketFarm: [...action.payload],

      };
    case IS_FILTER_LAUNDRY:
      return {
        ...state,
        isFilterLaundry: !state.isFilterLaundry,
        // filter: 7
      };
    case IS_FILTER_MARKET_FARM:
      return {
        ...state,
        isFilterMarketFarm: !state.isFilterMarketFarm,
        // filter: 8
      };
      // =====
    case ADD_LOCATION_PLACE:
      return {
        ...state,
        locationPlace: action.payload,
      };
    case RESET_LOCATION_PLACE:
      return {
        ...state,
        locationPlace: {},
      };
      // case ADD_FILTER:
      //   return {
      //     ...state,
      //     newList: [...state.newList, ...action.payload],

    //   };
      // case REMOVE_FILTER_TOILET:
      //   return {
      //     ...state,
      //     newList: action.payload,
      //       isFilterToilet: !state.isFilterToilet,
      //       filter: null,
      //   };
      //   case REMOVE_FILTER_SHOWER:
      //   return {
      //     ...state,
      //     newList: action.payload,
      //       isFilterShower: !state.isFilterShower,
      //       filter: null,
      //   };
    default:
      return state;
  }
};
