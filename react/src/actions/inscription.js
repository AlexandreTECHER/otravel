export const CHANGE_NEW_PSEUDO = 'CHANGE_NEW_PSEUDO';
export const INSCRIPTION_SUCCESS = 'INSCRIPTION_SUCCESS'
export const CHANGE_NEW_EMAIL = 'CHANGE_NEW_EMAIL';
export const CHANGE_NEW_PASSWORD = 'CHANGE_NEW_PASSWORD';
export const ADD_AVATAR = 'ADD_AVATAR';
export const ADD_NAME_PICTURE_AVATAR = 'ADD_NAME_PICTURE_AVATAR';
export const TEST_EMAIL = 'TEST_EMAIL';
export const CONDITION = 'CONDITION';
export const INSCRIPTION_ERROR = 'INSCRIPTION_ERROR';
export const CHECK_EMAIL = 'CHECK_EMAIL';
export const CHECK_STATE = 'CHECK_STATE';

export const checkState = () => ({
  type: CHECK_STATE,
});

export const checkEmail = (payload) => ({
  type: CHECK_EMAIL,
  payload
});

export const inscriptionError = (payload) => ({
  type: INSCRIPTION_ERROR,
  payload
});

export const condition = () => ({
  type: CONDITION,
});

export const testEmail = (payload) => ({
  type:TEST_EMAIL,
  payload
});

export const addAvatar = (payload) => ({
    type: ADD_AVATAR,
    payload,
});
export const addNamePictureAvatar = (payload) =>({
    type: ADD_NAME_PICTURE_AVATAR,
    payload
})
export const changeNewPassword = (payload) => ({
    type: CHANGE_NEW_PASSWORD,
    payload,
  });
  export const changeNewEmail = (payload) => ({
    type: CHANGE_NEW_EMAIL,
    payload,
  });
export const changeNewPseudo = (payload) => ({
  type: CHANGE_NEW_PSEUDO,
  payload,
});

export const inscriptionSuccess = () => ({
    type: INSCRIPTION_SUCCESS,
})

