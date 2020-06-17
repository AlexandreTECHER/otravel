export const CHANGE_NEW_PASSWORD = 'CHANGE_NEW_PASSWORD';
export const CHANGE_NEW_EMAIL = 'CHANGE_NEW_EMAIL';
export const CHANGE_NEW_PSEUDO = 'CHANGE_NEW_PSEUDO';
export const INSERT_NEW_INFORMATION = 'INSERT_NEW_INFORMATION';
export const UPDATE_MESSAGE = 'UPDATE_MESSAGE';

export const updateMessage = (payload) => ({
    type: UPDATE_MESSAGE,
    payload,
});
export const insertNewInformation = () => ({
    type: INSERT_NEW_INFORMATION,
});
export const changeNewPseudo = (payload) => ({
  type: CHANGE_NEW_PSEUDO,
  payload,
});
export const changeNewEmail = (payload) => ({
  type: CHANGE_NEW_EMAIL,
  payload,
});
export const changeNewPassword = (payload) => ({
  type: CHANGE_NEW_PASSWORD,
  payload,
});