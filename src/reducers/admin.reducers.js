import {AdminConstants} from '../actions/constants';
const initState = {
  Admin: {},
  error: null,
  message: '',
  update: '',
};

const AdminReducer = (state = {initState}, action) => {
  //console.log(action)
  switch (action.type) {
    case AdminConstants.GETBYIDUSER_ADMIN_REQUEST:
        state = {
        ...state,
        };
        break;
    case AdminConstants.GETBYIDUSER_ADMIN_SUCCESS:
      state = {
        ...state,
        Admin: action.payload.Admin,
        message: 'succes',
      };
      break;
    case AdminConstants.GETBYIDUSER_ADMIN_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
      };
      break;
    case AdminConstants.UPDATE_ADMIN_REQUEST:
      state = {
        ...state,
      };
      break;
    case AdminConstants.UPDATE_ADMIN_SUCCESS:
      state = {
        ...state,
        update: 'true',
      };
      break;
    case AdminConstants.UPDATE_ADMIN_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
        update: 'false',
      };
      break;
      case AdminConstants.GET_ADMIN_REQUEST:
        state = {
        ...state,
        };
        break;
    case AdminConstants.GET_ADMIN_SUCCESS:
      state = {
        ...state,
        Admin: action.payload.admin,
        message: 'succes',
      };
      break;
    case AdminConstants.GET_ADMIN_FAILURE:
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
export default AdminReducer;
