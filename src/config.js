import globals from './globals';

const clusterName = "h34-barn99-stg.hasura-app.io";
const authVersion = "v1";
const authUrl = "https://auth." + clusterName + "/" + authVersion;
const endpoints = {
	'signup': '/signup',
	'login': '/login',
	'googleLogin': 'https://accounts.google.com/o/oauth2/v2/auth?client_id=' + globals.googleClientId + '&redirect_uri=' + globals.redirectUrl + '&scope=openid%20profile%20email&response_type=id_token&nonce=user_id',
	'githubLogin': 'https://github.com/login/oauth/authorize?client_id=' + globals.githubClientId + '&redirect_uri=' + globals.redirectUrl + '&scope=user:email'
};

export {
	endpoints,
	authUrl
}