/* DEV */
//export const API_BASE_URL = 'http://localhost:8080';
//export const NODE_BASE_URL = 'http://localhost:3000';

/* PROD */
export const API_BASE_URL = 'https://blogbase-app.herokuapp.com';
export const NODE_BASE_URL = 'https://blogbase.io/';


export const ACCESS_TOKEN = 'accessToken';

export const OAUTH2_REDIRECT_URI = NODE_BASE_URL + '/oauth2/redirect'

export const GOOGLE_AUTH_URL = API_BASE_URL + '/oauth2/authorize/google?redirect_uri=' + OAUTH2_REDIRECT_URI;
// export const FACEBOOK_AUTH_URL = API_BASE_URL + '/oauth2/authorize/facebook?redirect_uri=' + OAUTH2_REDIRECT_URI;
// export const GITHUB_AUTH_URL = API_BASE_URL + '/oauth2/authorize/github?redirect_uri=' + OAUTH2_REDIRECT_URI;
