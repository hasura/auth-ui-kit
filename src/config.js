import globals from './globals';

const hostName = window.location.hostname;
let splitHost = hostName.split(".");
splitHost.shift();
const authVersion = "v1";
let clusterName = splitHost.join(".");
let scheme = window.location.protocol;
if (process && process.env && process.env.NODE_ENV === 'development') {
  clusterName = 'come56.hasura-app.io';
  scheme = 'https:';
}
const baseDomain = scheme + "//auth." + clusterName;
const authUrl = baseDomain + "/" + authVersion;

// let redirectUrl = window.localStorage.getItem("redirect_url");
const currentLocation = window.location;
let redirectUrl = currentLocation.search.split("=")[1];
if ( redirectUrl === undefined || redirectUrl === 'undefined' || redirectUrl === null ) {
  // if url param is not present, check for conf
  // check if conf gave a valid url;
  if (window.__env.redirectUrl) {
    redirectUrl = window.__env.redirectUrl;
  } else {
    redirectUrl = authUrl + "/user/info";
  }
}
const facebookRedirectUrl = baseDomain + "/ui/facebook-response";
const googleRedirectUrl = baseDomain + "/ui/google-response";
const githubRedirectUrl = baseDomain + "/ui/github-response";
const linkedinRedirectUrl = baseDomain + "/ui/linkedin-response";
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
  'logout': '/user/logout',
  'facebookLogin': 'https://www.facebook.com/v2.11/dialog/oauth?client_id=' + globals.facebook + '&redirect_uri=' + facebookRedirectUrl + '&response_type=token&scope=email&state=' + redirectUrl,
  'googleLogin': 'https://accounts.google.com/o/oauth2/v2/auth?client_id=' + globals.google + '&redirect_uri=' + googleRedirectUrl + '&scope=openid%20profile%20email&response_type=id_token&nonce=user_id&state=' + redirectUrl,
  'githubLogin': 'https://github.com/login/oauth/authorize?client_id=' + globals.github + '&redirect_uri=' + githubRedirectUrl + '&scope=user:email&state=' + redirectUrl,
  'linkedinLogin': 'https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=' + globals.linkedin + '&redirect_uri=' + linkedinRedirectUrl + '&scope=r_emailaddress%20r_basicprofile&state=' + redirectUrl
};

export {
	endpoints,
	authUrl,
  githubRedirectUrl,
  linkedinRedirectUrl,
  redirectUrl
}
