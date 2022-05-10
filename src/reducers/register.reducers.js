import { registerConstants } from '../actions/constants';

const initState = {
  error: null,
  message: '',
  loading: false,
  register: false,
  error: null,
  verific: {},
  verified: false
};

const RegisterReducer = (state = initState, action) => {
  switch (action.type) {
    case registerConstants.REGISTER_REQUEST:
      state = {
        ...state,
        loading: true
      };
      break;

    case registerConstants.REGISTER_SUCCESS:
      // localStorage.setItem('token', action.payload.token)
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
        register: true,
      };
      break;

    case registerConstants.REGISTER_FAILURE:
      state = {
        ...state,
        loading: false,
        register: false,
        error: action.payload.error,
        //    error: action.payload.error,
      };
      break;

    case registerConstants.SENDOTP_REQUEST:
      state = {
        ...state,
        // loading : true
        //error : action.payload.error
      }
      break;

    case registerConstants.SENDOTP_SUCCESS:
      state = {
        ...state,
        loading: false,
        // register : true,
        verific: action.payload.verific,
        message: 'send code verification'
      }
      break;


    case registerConstants.SENDOTP_FAILURE:
      state = {
        ...state,
        loading: false,
        register: false,
        error: "erreur send otp verification ",


      }
      break;

    case registerConstants.VERIFYOTP_REQUEST:
      state = {
        ...state,
        // loading : true
        //error : action.payload.error
      }
      break;

    case registerConstants.VERIFYOTP_SUCCESS:
      state = {
        ...state,
        loading: false,
        //     register : true,
        verific: action.payload.verific,
        verified: true,
        message: 'otp code verification success',
        error: ''
      }
      break;


    case registerConstants.VERIFYOTP_FAILURE:
      state = {
        ...state,
        loading: false,
        register: false,
        error: 'otp code verification failed'
      }

      break;


    default:
      console.log('default');
  }
  return state;
}
export default RegisterReducer