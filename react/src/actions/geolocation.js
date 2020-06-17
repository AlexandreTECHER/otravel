export const GEOLOCATION = 'GEOLOCATION';
export const NAME_PLACE = 'NAME_PLACE';
export const CATEGORY_PLACE = 'CATEGORY_PLACE';
export const DESCRIPTION_PLACE = 'DESCRIPTION_PLACE';
export const STREET_PLACE = 'STREET_PLACE';
export const ZIPCODE_PLACE = 'ZIPCODE_PLACE';
export const CITY_PLACE = 'CITY_PLACE';
export const ADD_PLACE = 'ADD_PLACE';
export const CONVERT_ADRESS = 'CONVERT_ADRESS';
export const SEND_ADRESS= 'SEND_ADRESS';
export const ADD_NAME_PICTURE_PLACE ='ADD_NAME_PICTURE_PLACE';


export const sendAdress = () => ({
  type: SEND_ADRESS,
});

export const convertAdress = (payload) => ({
  type: CONVERT_ADRESS,
  payload,
});

export const addNamePicturePlace = (payload) => ({
  type: ADD_NAME_PICTURE_PLACE,
  payload
});
export const addPlace = () => ({
  type: ADD_PLACE,
});
 
export const cityPlace = (payload) => ({
  type: CITY_PLACE,
  payload,
});

export const zipCodePlace = (payload) => ({
  type: ZIPCODE_PLACE,
  payload,
});

export const streetPlace = (payload) => ({
  type: STREET_PLACE,
  payload,
});

export const categoryPlace = (payload) => ({
  type: CATEGORY_PLACE,
  payload,
});

export const namePlace = (payload) => ({
  type: NAME_PLACE,
  payload,
});

export const geolocation = (payload) => ({
  type: GEOLOCATION,
  payload,
});


export const descriptionPlace = (payload) => ({
  type: DESCRIPTION_PLACE,
  payload,
});