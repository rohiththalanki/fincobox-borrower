// export * from './storage'
export const isEqualObject = (obj1, obj2) =>
  JSON.stringify(obj1) === JSON.stringify(obj2);

export const isObjectValueEmpty = (obj) =>
  Object.values(obj).every((item) => item !== "") ? true : false;

export const checkFormError = async (inputValue, schema) => {
  try {
    const validationResult = await schema.validate(inputValue, {
      abortEarly: false,
    });
    return !!validationResult;
  } catch (error) {
    let obj = {};
    error.inner.forEach((vr) => {
      obj[vr.path] = vr.errors[0];
    });
    return obj;
  }
};

export const getResposeError = (resError) => {
  let error = "";
  for (const key in resError) {
    if (Object.hasOwnProperty.call(resError, key)) {
      error =
        typeof resError[key] === "string" ? resError[key] : resError[key][0];
    }
  }
  return error;
};

export const getResponseAllErrors = (resError) => {
  let error = {};
  for (const key in resError) {
    if (Object.hasOwnProperty.call(resError, key)) {
      error[key] = resError[key][0];
    }
  }
  return error;
};

export const queryString = (params) =>
  Object.keys(params)
    .map((key) => key + "=" + params[key])
    .join("&");

export const formateDatewithJoin = (value = "", join = "-") => {
  value = new Date(value);
  return value
    ? value.getDate() +
    join +
    (value.getMonth() + 1) +
    join +
    value.getFullYear()
    : "";
};

export const getRangeArray = (start = 0, stop = 1, step = 1) => {
  const length = Math.ceil((stop - start) / step);
  return Array.from({ length }, (_, i) => i * step + start);
};

export const getYear = (date) => new Date(date).getFullYear();

export const spliceString = (
  text = "", // string
  start = 0, // index
  end = 0, // index
  join = "", // character
  from = "", // character
  to = 0 //lenght or count
) => {
  if (from !== "") {
    let ind = text.indexOf(".");
    return (
      text.slice(start, end > ind ? ind : end) +
      join +
      text.slice(ind, text.length)
    );
  } else {
    return text.slice(start, end);
  }
};

export const firstLetterCapital = (word = "") =>
  word?.length > 1
    ? word?.charAt(0).toUpperCase() + word?.slice(1)
    : word?.toUpperCase();

export const maskProtectedNumber = (phone = "") =>
  phone.replace(/\d(?=\d{3})/g, "*");

export const maskProtectedEmail = (string = "") =>
  string.replace(
    /(...)(.{1,4})(?=.*@)/g,
    (_, a, b) => a + "*".repeat(b.length)
  );

export * from "./toast_context";
