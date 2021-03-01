export const signInDoctor = (doctor) => {
    return {
        type: "SIGN_IN_DOCTOR",
        doctor: doctor
    }
}
export const currentDoctor = (doctor) => {
    return {
        type: "CURRENT_DOCTOR",
        doctor: doctor
    }
}

export const signUpDoctor = (doctor) => {
    return {
        type: "SIGN_UP_DOCTOR",
        doctor: doctor
    }
}
export const signOutDoctor = () => {
    return {
        type: "SIGN_OUT_DOCTOR",
    }
}

export const updateDoctor = (doctor) => {
    return {
        type: "UPDATE_DOCTOR",
        doctor: doctor
    }
}