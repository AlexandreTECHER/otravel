import { CONVERT_ADRESS, GEOLOCATION, NAME_PLACE, CATEGORY_PLACE, DESCRIPTION_PLACE, STREET_PLACE, ZIPCODE_PLACE, CITY_PLACE, ADD_NAME_PICTURE_PLACE } from '../actions/geolocation';

const initialState = {
    coords: {
        lat: 46.603354,
        long: 1.8883335,
    },
    form: {
      name: "",
      category: [],
      description: "",
      street : "",
      zipCode: 0,
      city: "",
      nameFile: "",
    },
    isLocated: false,
};

export default (state = initialState, action = {}) => {
    switch (action.type) {
      case GEOLOCATION:
        return {
          ...state,
          coords: {
            lat: action.payload.latitude,
            long: action.payload.longitude,
        },
        isLocated: true,
        };
        case NAME_PLACE:
        return {
          ...state,
         form : {
           ...state.form,
           name: action.payload,
         },
        };
        case ADD_NAME_PICTURE_PLACE:
          return {
            ...state,
           form : {
             ...state.form,
             nameFile: action.payload,
           },
          };
        case CATEGORY_PLACE:
          return {
            ...state,
         form : {
           ...state.form,
           category: [action.payload],
         },
          };
        case DESCRIPTION_PLACE:
          return {
            ...state,
          form : {
            ...state.form,
            description: action.payload,
            },
          };
        case STREET_PLACE:
          return {
            ...state,
          form : {
            ...state.form,
            street: action.payload,
         },
              };
        case ZIPCODE_PLACE:
          return {
            ...state,
          form : {
            ...state.form,
            zipCode: action.payload,
         },
          };
          case CITY_PLACE:
            return {
              ...state,
         form : {
           ...state.form,
           city: action.payload,
         },
         };
         case CONVERT_ADRESS:
          return {
            ...state,
       form : {
         ...state.form,
         street : action.payload.road || action.payload.street || action.payload.hamlet || "pas du rue identifié prédéfinie",
         zipCode: action.payload.postcode || "pas de code postal prédéfini",
         city: action.payload.village || action.payload.city || action.payload.county || "pas de ville prédéfinie",
       },
       };
                              

        default:
      return state;
  }
};