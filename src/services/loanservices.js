import config from "./_apiConfig/apiConfig";
import { performRequest, apiEndPoints, methodType } from "./_apiConfig";

export const createLoanRequest = (data = {}) => {
  return performRequest(
    methodType.POST,
    config.baseURL + apiEndPoints.createLoan,
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

export const getLoanRequest = (data = {}) => {
  return performRequest(
    methodType.GET,
    config.baseURL + apiEndPoints.createLoan,
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

export const updateLoanRequest = async (data = {}, id) => {
  return performRequest(
    methodType.PATCH,
    apiEndPoints.createLoan + "/" + id,
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

export const createInvoiceRequest = (data = {}) => {
  return performRequest(
    methodType.POST,
    config.baseURL + apiEndPoints.invoiceLoan,
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

export const deleteInvoiceRequest = (id) => {
  return performRequest(
    methodType.DELETE,
    config.baseURL + apiEndPoints.invoiceLoan + "/" + id,
    // data,
    // true
  )
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};

export const updateInvoiceRequest = async (data = {}, id) => {
  return performRequest(
    methodType.PATCH,
    apiEndPoints.invoiceLoan + "/" + id,
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