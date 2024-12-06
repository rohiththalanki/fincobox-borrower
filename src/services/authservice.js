import config, { config2 } from "./_apiConfig/apiConfig";
import { performRequest, apiEndPoints, methodType } from "./_apiConfig";

console.log('copnfig', config2)
export const loginRequest = (data = {}) => {
    return performRequest(
        methodType.POST, (config.baseURL + apiEndPoints.authLogin), data, false
    ).then((response) => {
        return response
    }).catch((error) => {
        return error
    });
};

export const signupRequest = (data = {}) => {
    return performRequest(
        methodType.POST, (config.baseURL + apiEndPoints.authSignup), data, false
    ).then((response) => {
        return response
    }).catch((error) => {
        return error
    });
};

export const otpVerificationRequest = (data = {}) => {
    return performRequest(
        methodType.POST, (config.baseURL + apiEndPoints.authVerifyMail), data, false
    ).then((response) => {
        return response
    }).catch((error) => {
        return error
    });
};

export const changePasswordRequest = (data = {}) => {
    return performRequest(
        methodType.POST, (config.baseURL + apiEndPoints.authChangePassword), data, true
    ).then((response) => {
        return response
    }).catch((error) => {
        return error
    });
};

export const resetPasswordRequest = (data = {}) => {
    return performRequest(
        methodType.POST, (config.baseURL + apiEndPoints.resetPassword), data, false
    ).then((response) => {
        return response
    }).catch((error) => {
        return error
    });
};

export const resendEmailOtpRequest = (data = {}) => {
    return performRequest(
        methodType.POST, (config.baseURL + apiEndPoints.resendEmailOtp), data, false
    ).then((response) => {
        return response
    }).catch((error) => {
        return error
    });
};

export const verifyPasswordResetRequest = (data = {}) => {
    return performRequest(
        methodType.POST, (config.baseURL + apiEndPoints.verifyPasswordReset), data, false
    ).then((response) => {
        return response
    }).catch((error) => {
        return error
    });
};
