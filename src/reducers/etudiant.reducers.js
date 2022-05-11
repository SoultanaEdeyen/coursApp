import { EtudiantConstants } from '../actions/constants';
const initState = {
    etudiant: {},
    error: null,
    message: '',
    update: '',
};

const EtudiantReducer = (state = { initState }, action) => {
    //console.log(action)
    switch (action.type) {
        case EtudiantConstants.GETBYIDUSER_ETUDIANT_REQUEST:
            state = {
                ...state,
            };
            break;
        case EtudiantConstants.GETBYIDUSER_ETUDIANT_SUCCESS:
            state = {
                ...state,
                etudiant: action.payload.etudiant,
                message: 'succes',
            };
            break;
        case EtudiantConstants.GETBYIDUSER_ETUDIANT_FAILURE:
            state = {
                ...state,
                error: action.payload.error,
            };
            break;
        case EtudiantConstants.UPDATE_ETUDIANT_REQUEST:
            state = {
                ...state,
            };
            break;
        case EtudiantConstants.UPDATE_ETUDIANT_SUCCESS:
            state = {
                ...state,
                update: 'true',
            };
            break;
        case EtudiantConstants.UPDATE_ETUDIANT_FAILURE:
            state = {
                ...state,
                error: action.payload.error,
                update: 'false',
            };
            break;
        case EtudiantConstants.GET_ETUDIANT_REQUEST:
            state = {
                ...state,
            };
            break;
        case EtudiantConstants.GET_ETUDIANT_SUCCESS:
            state = {
                ...state,
                etudiant: action.payload.etudiant,
                message: 'succes',
            };
            break;
        case EtudiantConstants.GET_ETUDIANT_FAILURE:
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
export default EtudiantReducer;
