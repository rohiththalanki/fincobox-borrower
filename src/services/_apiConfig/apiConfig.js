// To differentiate environments we use this variable passed in Package.json
console.log('preoces', import.meta);
export const env = import.meta.env.MODE;

const configList = {
  development: {
    CURRENT_ENV: env,
    API_BASE_URL: 'http://localhost:8000'
  },
  staging: {
    CURRENT_ENV: env,
    API_BASE_URL: 'https://devapi.fincobox.com'
  },
  production: {
    CURRENT_ENV: env,
    API_BASE_URL: 'http://localhost:8000'
  },
};

export const config2 = configList[env];


export const AppConfig = {
  baseURL: "http://localhost:8000/api",
};

export default AppConfig 