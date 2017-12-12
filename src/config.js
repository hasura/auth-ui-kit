import globals from './globals';

const hostName = window.location.hostname;
let splitHost = hostName.split(".");
splitHost.shift();
const clusterName = splitHost.join(".");
const authVersion = "v1";
const authUrl = window.location.protocol + "//auth." + clusterName + "/" + authVersion;

let redirectUrl = window.localStorage.getItem("redirect_url");
if ( redirectUrl === undefined || redirectUrl === 'undefined' ) {
	redirectUrl = authUrl + "/user/info";
}
console.log(redirectUrl);
const endpoints = {
  'forgot_password_otp': '/providers/mobile-password/forgot-password',
  'reset_password_otp': '/providers/mobile-password/reset-password',
  'verify_mobile_password': '/providers/mobile-password/verify-otp',
  'verify_mobile_otp': '/providers/mobile/verify-otp',
  'otp_initiate': '/providers/mobile/send-otp',
  'resend_otp': '/providers/mobile/resend-otp',
  'resend_mobile_password_otp': '/providers/mobile-password/resend-otp',
  'signup': '/signup',
  'login': '/login',
  'facebookLogin': 'https://www.facebook.com/v2.11/dialog/oauth?client_id=' + globals.facebookClientId + '&redirect_uri=' + redirectUrl,
  'googleLogin': 'https://accounts.google.com/o/oauth2/v2/auth?client_id=' + globals.googleClientId + '&redirect_uri=' + redirectUrl + '&scope=openid%20profile%20email&response_type=id_token&nonce=user_id',
  'githubLogin': 'https://github.com/login/oauth/authorize?client_id=' + globals.githubClientId + '&redirect_uri=' + redirectUrl + '&scope=user:email',
  'linkedinLogin': 'https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=' + globals.linkedinClientId + '&redirect_uri=' + redirectUrl + '&state=987654321&scope=r_basicprofile'
};

export {
	endpoints,
	authUrl
}
