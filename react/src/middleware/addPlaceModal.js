import axios from 'axios';
import { ADD_PLACE, SEND_ADRESS, convertAdress } from '../actions/geolocation';
import { fetchPlaces, fetchShower, fetchToilet, fetchSpotKite, fetchSpotVan, fetchLaundry, fetchMarketFarm } from '../actions/places';
import {isEmpty} from 'lodash';

export default (store) => (next) => (action) => {
    switch(action.type) {
        case ADD_PLACE: 
        const formLatitude = () => {
          if (!isEmpty(store.getState().placesReducer.locationPlace)) {
            return store.getState().placesReducer.locationPlace.lat;
          } else {
            return store.getState().geolocation.coords.lat;
          }
        }
        
      
        const formLongitude = () => {      
          if (!isEmpty(store.getState().placesReducer.locationPlace)) {
            return store.getState().placesReducer.locationPlace.lng;
          } else {
            return store.getState().geolocation.coords.long;
          }
        }
        axios({
            method: 'post',
            url: 'https://apiotravel.ovh/places/add', 
            withCredentials: true,
            headers: { 'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${localStorage.getItem('id_token')}`},
            data: {
              name: store.getState().geolocation.form.name,
              category: store.getState().geolocation.form.category,
              description: store.getState().geolocation.form.description,
              street: store.getState().geolocation.form.street,
              zipCode: store.getState().geolocation.form.zipCode,
              city: store.getState().geolocation.form.city,
              lat: formLatitude(),
              lng: formLongitude(),
              nameFile: store.getState().geolocation.form.nameFile,
              adress: '1 rue ',
              place_picture: localStorage.getItem('picturePlace'),


            },
          }).then((res) => {
            // Si succès -> dispatcher une action success
            localStorage.removeItem('picturePlace');
            store.setState().geolocation.form.name = "";
            store.setState().geolocation.form.description = "";
            store.dispatch(fetchPlaces());
            store.dispatch(fetchShower());
            store.dispatch(fetchToilet());
            store.dispatch(fetchSpotKite());
            store.dispatch(fetchSpotVan());
            store.dispatch(fetchLaundry());
            store.dispatch(fetchMarketFarm());
          })
            .catch((err) => {
            // Si error -> Dispatcher une action error
            });
            break;

            case SEND_ADRESS: 
            let data = {};
            if(!isEmpty(store.getState().placesReducer.locationPlace)){
              data = {
                lat: store.getState().placesReducer.locationPlace.lat,
                long: store.getState().placesReducer.locationPlace.lng
              }
            }else{
              data = store.getState().geolocation.coords
            }

            axios({
              method: 'post',
              url: 'https://apiotravel.ovh/api/adress/places', 

              withCredentials: true,
              headers: {'Authorization': `Bearer ${localStorage.getItem('id_token')}`},
              data : {
                lat: data.long,
                lng: data.lat,              
              },
            })
          .then((res) => {
            store.dispatch(convertAdress(res.data.results[0].components))
          })
          .catch((err) => {
          })
        break;
        default :
        next(action);
    };
};