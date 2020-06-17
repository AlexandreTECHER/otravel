import { CHANGE_NEW_PSEUDO, CHANGE_NEW_EMAIL, CHANGE_NEW_PASSWORD, INSCRIPTION_SUCCESS, ADD_AVATAR, ADD_NAME_PICTURE_AVATAR , TEST_EMAIL, CONDITION, INSCRIPTION_ERROR, CHECK_EMAIL, CHECK_STATE} from '../actions/inscription';

const stateInit = {
  form: {
    pseudo: '',
    avatar: '',
    email: '',
    password: '',
    nameFile: ''
  },
  correctEmail: '',
  condition: false,
  errorMessage:'',
  responseIns: null,
  nb: 1,
};

export default (state = stateInit, action = {}) => {
  switch (action.type) {
    case ADD_AVATAR:
      return {
        ...state,
        form: {
          ...state.form,
          avatar: action.payload,
        },
      };
    case ADD_NAME_PICTURE_AVATAR:
      return {
        ...state,
        form: {
          ...state.form,
          nameFile: action.payload,
        },
      };
    case CHANGE_NEW_PSEUDO:
        return {
          ...state,
          form: {
            ...state.form,
            pseudo: action.payload,
          },
          errorMessage: '',
        };
    case CHANGE_NEW_EMAIL:
      return {
        ...state,
        form: {
          ...state.form,
          email: action.payload,
        },
        errorMessage: '',
      };
    case CHANGE_NEW_PASSWORD:
      return {
        ...state,
        form: {
          ...state.form,
          password: action.payload,
        },
        errorMessage: '',
      };
    case INSCRIPTION_SUCCESS:
      return {
        ...state,
        responseIns: action.payload,
      };
      case TEST_EMAIL:
        return {
          ...state,
          correctEmail: action.payload
        };
        case CONDITION:
        return {
          ...state,
          condition: !state.condition
        };

        case INSCRIPTION_ERROR :
          return {
            ...state,
            errorMessage: action.payload,
            nb: state.nb +1,
          }

          case CHECK_EMAIL : 
          return {
            ...state,
            responseIns: action.payload,
            nb: state.nb +1,
          }
          case CHECK_STATE : 
          return {
            ...state,
            form: {
              ...state.form,
              pseudo: '',
              avatar: '',
              email:'',
              password: '',
              nameFile:''
            },
            condition: false,
          }
    default:
      return state;
  }
};
