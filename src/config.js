import globals from './globals';

const hostName = window.location.hostname;
let splitHost = hostName.split(".");
splitHost.shift();
// const clusterName = splitHost.join(".");
const clusterName = "h34-barn99-stg.hasura-app.io";
const authVersion = "v1";
//const scheme = window.location.protocol;
const scheme = 'https:';
const authUrl = scheme + "//auth." + clusterName + "/" + authVersion;

// let redirectUrl = window.localStorage.getItem("redirect_url");
const currentLocation = window.location;
let redirectUrl = currentLocation.search.split("=")[1];
if ( redirectUrl === undefined || redirectUrl === 'undefined' || redirectUrl === null ) {
	redirectUrl = authUrl + "/user/info";
}
const endpoints = {
  'forgot_password_otp': '/providers/mobile-password/forgot-password',
  'email_forgot_password': '/providers/email/forgot-password',
  'verify_email': '/providers/email/verify-email',
  'reset_password': '/providers/email/reset-password',
  'reset_password_otp': '/providers/mobile-password/reset-password',
  'verify_mobile_password': '/providers/mobile-password/verify-otp',
  'verify_mobile_otp': '/providers/mobile/verify-otp',
  'otp_initiate': '/providers/mobile/send-otp',
  'resend_otp': '/providers/mobile/resend-otp',
  'resend_mobile_password_otp': '/providers/mobile-password/resend-otp',
  'signup': '/signup',
  'login': '/login',
  'logout': '/logout',
  'facebookLogin': 'https://www.facebook.com/v2.11/dialog/oauth?client_id=' + globals.facebook + '&redirect_uri=' + redirectUrl,
  'googleLogin': 'https://accounts.google.com/o/oauth2/v2/auth?client_id=' + globals.google + '&redirect_uri=' + redirectUrl + '&scope=openid%20profile%20email&response_type=id_token&nonce=user_id',
  'githubLogin': 'https://github.com/login/oauth/authorize?client_id=' + globals.github + '&redirect_uri=' + redirectUrl + '&scope=user:email',
  'linkedinLogin': 'https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=' + globals.linkedin + '&redirect_uri=' + redirectUrl + '&state=987654321&scope=r_basicprofile'
};

export {
	endpoints,
	authUrl
}
