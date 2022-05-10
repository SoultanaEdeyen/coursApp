import authReducers from './auth.reducers'
import registerReducer from './register.reducers'
import coursReducer from './cours.reducers'
import { combineReducers } from 'redux'


const rootReducer = combineReducers({
    auth: authReducers ,
    register: registerReducer ,
    cours : coursReducer,

})
export default rootReducer;