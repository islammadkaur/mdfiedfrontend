const currentDoctor = (state=null, action) => {
    switch(action.type){
        case "SIGN_IN_DOCTOR":
        case "CURRENT_DOCTOR":
            return action.doctor
        case "SIGN_UP_DOCTOR":
            return action.doctor
        case "UPDATE_DOCTOR":
            return action.doctor
        case "SIGN_OUT_DOCTOR":
            return null
        default:
            return state
    }
}


export default currentDoctor;