const version = "/v1";

export const methodType = {
  PUT: "put",
  GET: "get",
  POST: "post",
  DELETE: "delete",
  PATCH: "patch",
};

export const apiEndPoints = {
  authSignup: "/auth/signup/",
  authLogin: "/auth/login/",
  authVerifyMail: "/auth/verify-mail/",
  authChangePassword: "/auth/change-password/",
  resendEmailOtp: "/auth/resend-email-otp/",
  verifyPasswordReset: "/auth/verify-password-reset/",
  resetPassword: "/auth/reset-password/",

  kycPersonal: "/kyc/personal-kyc",
  kycBusiness: "/kyc/business-kyc",
  authCities: "/auth/cities",
  authOccupation: "/auth/occupation",
  authNationality: "/auth/nationality",
  authIndustrySector: "/auth/industry-sector",
  getUserBusinessKyc: "/kyc/business-kyc/user/",
  getUserPersonalKyc: "/kyc/personal-kyc/user/",
  updateUserKyc: "/auth/user/",

  createLoan: "/loan/loan",
  invoiceLoan: "/loan/loan-invoice",
};

export default Object.keys(apiEndPoints).forEach(
  (key) => (apiEndPoints[key] = version + apiEndPoints[key])
);
