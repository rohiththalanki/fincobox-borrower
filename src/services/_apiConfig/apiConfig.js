// To differentiate environments we use this variable passed in Package.json
export const env = import.meta.env.MODE;

const configList = {
  development: {
    CURRENT_ENV: env,
    API_BASE_URL: 'http://localhost:8000/api'
  },
  staging: {
    CURRENT_ENV: env,
    API_BASE_URL: 'http://localhost:8000/api'
  },
  production: {
    CURRENT_ENV: env,
    API_BASE_URL: 'http://localhost:8000/api'
  },
};

export const APP_CONFIG = configList[env || 'development'];


// export const AppConfig = {
//   baseURL: "http://localhost:8000/api",
// };

export default APP_CONFIG;
