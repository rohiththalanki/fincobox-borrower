import config from "./_apiConfig/apiConfig";
import { performRequest, apiEndPoints, methodType } from "./_apiConfig";

console.log('copnfig', config);
export const loginRequest = (data = {}) => {
    return performRequest(
        methodType.POST, (config.API_BASE_URL + apiEndPoints.authLogin), data, false
    ).then((response) => {
        return response
    }).catch((error) => {
        return error
    });
};

export const signupRequest = (data = {}) => {
    return performRequest(
        methodType.POST, (config.API_BASE_URL + apiEndPoints.authSignup), data, false
    ).then((response) => {
        return response
    }).catch((error) => {
        return error
    });
};

export const otpVerificationRequest = (data = {}) => {
    return performRequest(
        methodType.POST, (config.API_BASE_URL + apiEndPoints.authVerifyMail), data, false
    ).then((response) => {
        return response
    }).catch((error) => {
        return error
    });
};

export const changePasswordRequest = (data = {}) => {
    return performRequest(
        methodType.POST, (config.API_BASE_URL + apiEndPoints.authChangePassword), data, true
    ).then((response) => {
        return response
    }).catch((error) => {
        return error
    });
};

export const resetPasswordRequest = (data = {}) => {
    return performRequest(
        methodType.POST, (config.API_BASE_URL + apiEndPoints.resetPassword), data, false
    ).then((response) => {
        return response
    }).catch((error) => {
        return error
    });
};

export const resendEmailOtpRequest = (data = {}) => {
    return performRequest(
        methodType.POST, (config.API_BASE_URL + apiEndPoints.resendEmailOtp), data, false
    ).then((response) => {
        return response
    }).catch((error) => {
        return error
    });
};

export const verifyPasswordResetRequest = (data = {}) => {
    return performRequest(
        methodType.POST, (config.API_BASE_URL + apiEndPoints.verifyPasswordReset), data, false
    ).then((response) => {
        return response
    }).catch((error) => {
        return error
    });
};
