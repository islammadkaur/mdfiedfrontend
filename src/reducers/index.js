import {combineReducers} from 'redux';
import currentUserReducer from './currentUser'
import currentDoctorReducer from './currentDoctor'



export default combineReducers({
    currentUser: currentUserReducer,
    currentDoctor: currentDoctorReducer,
})