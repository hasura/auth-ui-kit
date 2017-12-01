import globals from './globals';

const clusterName = "h34-enduring88-stg.hasura-app.io";
const authVersion = "v1";
const authUrl = "https://auth." + clusterName + "/" + authVersion;
const endpoints = {
  'otp_initiate': '/providers/mobile/send-otp',
  'resend_otp': '/providers/mobile/resend-otp',
	'signup': '/signup',
	'login': '/login',
	'facebookLogin': 'https://www.facebook.com/v2.11/dialog/oauth?client_id=' + globals.facebookClientId + '&redirect_uri=' + globals.redirectUrl,
	'googleLogin': 'https://accounts.google.com/o/oauth2/v2/auth?client_id=' + globals.googleClientId + '&redirect_uri=' + globals.redirectUrl + '&scope=openid%20profile%20email&response_type=id_token&nonce=user_id',
	'githubLogin': 'https://github.com/login/oauth/authorize?client_id=' + globals.githubClientId + '&redirect_uri=' + globals.redirectUrl + '&scope=user:email',
	'linkedinLogin': 'https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=' + globals.linkedinClientId + '&redirect_uri=' + globals.redirectUrl + '&state=987654321&scope=r_basicprofile'
};

export {
	endpoints,
	authUrl
}
