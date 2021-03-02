import {combineReducers} from 'redux';
import currentUserReducer from './currentUser'
import currentDoctorReducer from './currentDoctor'
// import accountsReducer from './accounts'
// import selectAccountReducer from './selectAccount'


export default combineReducers({
    currentUser: currentUserReducer,
    currentDoctor: currentDoctorReducer,
    // accounts: accountsReducer,
    // selectAccount: selectAccountReducer
})