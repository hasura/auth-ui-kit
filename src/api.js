import fetch from 'isomorphic-fetch';
import {authUrl, endpoints} from './config';

const usernameSignUp = (username, password) => {
  var requestOptions = {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify({
        provider: "username",
        data: {
          "username": username,
          "password": password
        }
      })
  };

  return fetch(authUrl + endpoints.signup, requestOptions)
  .then(function(response) {
    return response.json();
  })
  .catch(function(error) {
    console.log('Request Failed:' + error);
  });
}

const usernameSignIn = (username, password) => {
  var requestOptions = {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify({
        provider: "username",
        data: {
          "username": username,
          "password": password
        }
      })
  };

  return fetch(authUrl + endpoints.login, requestOptions)
  .then(function(response) {
    return response.json();
  })
  .catch(function(error) {
    console.log('Request Failed:' + error);
  });
}

const emailSignIn = (email, password) => {
  var requestOptions = {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify({
        provider: "email",
        data: {
          "email": email,
          "password": password
        }
      })
  };

  return fetch(authUrl + endpoints.login, requestOptions)
  .then(function(response) {
    return response.json();
  })
  .catch(function(error) {
    console.log('Request Failed:' + error);
  });
}

const mobileSignIn = (mobile, password, country_code) => {
  var requestOptions = {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify({
        provider: "mobile-password",
        data: {
          "mobile": mobile,
          "country_code": country_code,
          "password": password
        }
      })
  };

  return fetch(authUrl + endpoints.login, requestOptions)
  .then(function(response) {
    return response.json();
  })
  .catch(function(error) {
    console.log('Request Failed:' + error);
  });
}

const mobileOtpSignIn = (mobile, otp, country_code) => {
  var requestOptions = {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify({
        provider: "mobile",
        data: {
          "mobile": mobile,
          "otp": otp,
          "country_code": country_code
        }
      })
  };

  return fetch(authUrl + endpoints.login, requestOptions)
  .then(function(response) {
    return response.json();
  })
  .catch(function(error) {
    console.log('Request Failed:' + error);
  });
}

export {
  usernameSignUp,
  usernameSignIn,
  emailSignIn,
  mobileSignIn,
  mobileOtpSignIn
  /*
  emailSignUp,
  mobileSignUp,
  mobileOtpSignUp
  */
}
