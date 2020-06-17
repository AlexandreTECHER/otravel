import { 
  CHANGE_EMAIL, 
  CHANGE_PASSWORD, 
  LOGIN_SUCCESS, 
  LOGOUT_SUCCESS, 
  LOGIN_ERROR, 
 } from '../actions/connexion';
import {
  CHANGE_NEW_PASSWORD,
  CHANGE_NEW_EMAIL,
  CHANGE_NEW_PSEUDO,
  UPDATE_MESSAGE
} from '../actions/account';

const stateInit = {
  form: {
    email: '',
    password: '',
  },
  isLogged: false,
  error: '',
  userInfos: {
    Places: [],
    roles: []
  },
  updateUserInfo: {
    newUserPseudo: "",
    newUserEmail: "",
    newUserPassword: "",
  },
  updateMessage: "",
};

export default (state = stateInit, action = {}) => {
  switch (action.type) {
    case UPDATE_MESSAGE:
      return {
        ...state,
          updateMessage: action.payload,
      };
    case CHANGE_NEW_PASSWORD:
      return {
        ...state,
        updateUserInfo: {
          ...state.updateUserInfo,
          newUserPassword: action.payload,
        },
      };
    case CHANGE_NEW_EMAIL:
        return {
          ...state,
          updateUserInfo: {
            ...state.updateUserInfo,
            newUserEmail: action.payload,
          },
        };
    case CHANGE_NEW_PSEUDO:
      return {
        ...state,
        updateUserInfo: {
          ...state.updateUserInfo,
          newUserPseudo: action.payload,
        },
      };
    case CHANGE_EMAIL:
      return {
        ...state,
        form: {
          ...state.form,
          email: action.payload,
        },
      };
    case CHANGE_PASSWORD:
      return {
        ...state,
        form: {
          ...state.form,
          password: action.payload,
        },
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        userInfos: {
          ...state.userInfos,
          ...action.payload,
        },
        form : {
          email: '',
          password: '',
        },
        isLogged: true,
      };
      case LOGOUT_SUCCESS:
      return {
        ...state,
        form: {
          email: '',
          password: '',
        },
        isLogged: false,
        infos: {},
      };
      case LOGIN_ERROR:
        return {
          ...state,
          isLogged: false,
          error: 'Identifiants incorrects',
        };
    default:
      return state;
  }
};
