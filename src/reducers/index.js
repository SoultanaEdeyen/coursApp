import authReducers from './auth.reducers'
import registerReducer from './register.reducers'
import coursReducer from './cours.reducers'
import EtudiantReducer from './etudiant.reducers'
import { combineReducers } from 'redux'


const rootReducer = combineReducers({
    auth: authReducers,
    register: registerReducer,
    cours: coursReducer,
    Etudiant:EtudiantReducer,
})
export default rootReducer;