require('dotenv').config();

let api_base_url = null;
if (process.env.API_ENV === 'prod')
    api_base_url = 'https://blogbase-app.herokuapp.com';
else
    api_base_url = 'http://localhost:8080';

console.log(process.env.API_ENV);
console.log(api_base_url);
export const API_BASE_URL = api_base_url;

export const ACCESS_TOKEN = 'accessToken';

export const OAUTH2_REDIRECT_URI = 'http://localhost:3000/oauth2/redirect'

export const GOOGLE_AUTH_URL = API_BASE_URL + '/oauth2/authorize/google?redirect_uri=' + OAUTH2_REDIRECT_URI;
// export const FACEBOOK_AUTH_URL = API_BASE_URL + '/oauth2/authorize/facebook?redirect_uri=' + OAUTH2_REDIRECT_URI;
// export const GITHUB_AUTH_URL = API_BASE_URL + '/oauth2/authorize/github?redirect_uri=' + OAUTH2_REDIRECT_URI;
