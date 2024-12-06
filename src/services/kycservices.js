import config from "./_apiConfig/apiConfig";
import { performRequest, apiEndPoints, methodType } from "./_apiConfig";

export const personalKycRequest = (data = {}, id = false) => {
  const url = id
    ? config.baseURL + apiEndPoints.kycPersonal + "/" + id
    : config.baseURL + apiEndPoints.kycPersonal;
  return performRequest(
    methodType[id ? "PATCH" : "POST"],
    url,
    data,
    true,
    true
  )
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};

export const businessKycRequest = async (data = {}, id = false) => {
  const url = id
    ? config.baseURL + apiEndPoints.kycBusiness + "/" + id
    : config.baseURL + apiEndPoints.kycBusiness;
  return performRequest(
    methodType[id ? "PATCH" : "POST"],
    url,
    data,
    true,
    true
  )
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};

export const citiesRequest = (data = {}) => {
  return performRequest(methodType.GET, apiEndPoints.authCities, data, true)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};

export const occupationRequest = (data = {}) => {
  return performRequest(methodType.GET, apiEndPoints.authOccupation, data, true)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};

export const nationalityRequest = (data = {}) => {
  return performRequest(
    methodType.GET,
    apiEndPoints.authNationality,
    data,
    true
  )
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};

export const industrySectorRequest = (data = {}) => {
  return performRequest(
    methodType.GET,
    apiEndPoints.authIndustrySector,
    data,
    true
  )
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};

export const getKycData = (businessType) => {
  return performRequest(
    methodType.GET,
    businessType === "Business"
      ? apiEndPoints.getUserBusinessKyc
      : apiEndPoints.getUserPersonalKyc
  )
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};

export const updateUserDetail = async (data = {}) => {
  return performRequest(
    methodType.PATCH,
    apiEndPoints.updateUserKyc + data?.id + "/",
    data,
    true
  )
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};
