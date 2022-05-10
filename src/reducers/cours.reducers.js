import {CoursConstants} from '../actions/constants';
const initState = {
  cours: {},
  error: null,
  message: '',
  update: '',
};

const CoursReducer = (state = {initState}, action) => {
  //console.log(action)
  switch (action.type) {
    case CoursConstants.GETBYIDUSER_COURS_REQUEST:
        state = {
        ...state,
        
        };
        break;
    case CoursConstants.GETBYIDUSER_COURS_SUCCESS:
      state = {
        ...state,
        cours: action.payload.cours,
        message: 'succes',
      };
      break;
    case CoursConstants.GETBYIDUSER_COURS_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
      };
      break;
    case CoursConstants.UPDATE_COURS_REQUEST:
      state = {
        ...state,
      };
      break;
    case CoursConstants.UPDATE_COURS_SUCCESS:
      state = {
        ...state,
        update: 'true',
      };
      break;
    case CoursConstants.UPDATE_COURS_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
        update: 'false',
      };
      break;
      case CoursConstants.GET_COURS_REQUEST:
        state = {
        ...state,
        };
        break;
    case CoursConstants.GET_COURS_SUCCESS:
      state = {
        ...state,
        cours: action.payload.cours,
        message: 'succes',
      };
      break;
    case CoursConstants.GET_COURS_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
      };
      break;
    default:
      console.log('default');
  }
  return state;
};
export default CoursReducer;
