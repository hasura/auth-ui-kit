import {
  authUrl,
  endpoints,
  githubRedirectUrl,
  linkedinRedirectUrl,
  redirectUrl as finalRedirectUrl,
} from './config';

import { clusterName } from './config';

import makeRequest from '../Utils/makeRequest';

/* Helper function */

const handleAuthResponse = (response, callback) => {
  // set cookie state
  // check if response from signup/login
  if (response.auth_token && response.hasura_id && response.hasura_roles) {
    const uiKitCookie = JSON.stringify({ user_info: response });
    document.cookie =
      'hasura_auth_uikit=' +
      uiKitCookie +
      ';path=/;domain=' +
      clusterName +
      ';max-age=' +
      20 * 24 * 60 * 60 * 1000 +
      ';';
  }
  if (typeof response === 'function') {
    response.json().then(resp => {
      console.log(resp);
      if (response.ok) {
        const currentLocation = window.location;
        let redirectUrl = decodeURIComponent(
          currentLocation.search.split('=')[1]
        );
        if (
          redirectUrl === undefined ||
          redirectUrl === 'undefined' ||
          redirectUrl === null
        ) {
          // redirectUrl = authUrl + "/user/info";
          redirectUrl = finalRedirectUrl;
        }
        window.location.href = redirectUrl;
        return callback(resp);
      } else {
        // check error code mapping and update state to show in UI
        // alert(resp.message);
        return callback(resp);
      }
    });
  } else {
    const currentLocation = window.location;
    let redirectUrl = decodeURIComponent(currentLocation.search.split('=')[1]);
    if (
      redirectUrl === undefined ||
      redirectUrl === 'undefined' ||
      redirectUrl === null
    ) {
      // redirectUrl = authUrl + "/user/info";
      redirectUrl = finalRedirectUrl;
    }
    window.location.href = redirectUrl;
    // return callback(response);
  }
};

/* End of it */

const usernameSignUp = (username, password) => {
  var requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({
      provider: 'username',
      data: {
        username: username.trim(),
        password: password,
      },
    }),
  };

  return makeRequest(authUrl + endpoints.signup, requestOptions);
};

const usernameSignIn = (username, password) => {
  var requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({
      provider: 'username',
      data: {
        username: username.trim(),
        password: password,
      },
    }),
  };

  return makeRequest(authUrl + endpoints.login, requestOptions);
};

const emailSignUp = (email, password) => {
  var requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({
      provider: 'email',
      data: {
        email: email.trim(),
        password: password,
      },
    }),
  };

  return makeRequest(authUrl + endpoints.signup, requestOptions);
};

const emailSignIn = (email, password) => {
  var requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({
      provider: 'email',
      data: {
        email: email.trim(),
        password: password,
      },
    }),
  };

  return makeRequest(authUrl + endpoints.login, requestOptions);
};

const mobileOtpSignUp = (mobile_number, country_code) => {
  var requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({
      mobile: mobile_number.trim(),
      country_code: country_code.trim(),
    }),
  };

  return makeRequest(authUrl + endpoints.otp_initiate, requestOptions);
};

const mobileOtpLogin = (mobile, country_code, otp) => {
  var requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({
      provider: 'mobile',
      data: {
        mobile: mobile.trim(),
        country_code: country_code.trim(),
        otp: otp.trim(),
      },
    }),
  };

  return makeRequest(authUrl + endpoints.login, requestOptions);
};
const mobileOtpSignupFinal = (mobile, country_code, otp) => {
  var requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({
      provider: 'mobile',
      data: {
        mobile: mobile.trim(),
        country_code: country_code.trim(),
        otp: otp.trim(),
      },
    }),
  };

  return makeRequest(authUrl + endpoints.signup, requestOptions);
};

const resendMobileOtp = (mobile_number, country_code) => {
  var requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({
      mobile: mobile_number.trim(),
      country_code: country_code.trim(),
    }),
  };

  return makeRequest(authUrl + endpoints.resend_otp, requestOptions);
};

const sendForgotPasswordOTP = (mobile_number, country_code) => {
  var requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({
      mobile: mobile_number.trim(),
      country_code: country_code.trim(),
    }),
  };

  return makeRequest(authUrl + endpoints.forgot_password_otp, requestOptions);
};

const resetMobilePassword = (mobile_number, country_code, otp, password) => {
  var requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({
      mobile: mobile_number.trim(),
      country_code: country_code.trim(),
      password: password,
      otp: otp.trim(),
    }),
  };

  return makeRequest(authUrl + endpoints.reset_password_otp, requestOptions);
};

const resendMobilePasswordOtp = (mobile_number, country_code) => {
  var requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({
      mobile: mobile_number.trim(),
      country_code: country_code.trim(),
    }),
  };

  return makeRequest(
    authUrl + endpoints.resend_mobile_password_otp,
    requestOptions
  );
};

const mobilePasswordSignUp = (mobile, password, country_code) => {
  var requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({
      provider: 'mobile-password',
      data: {
        mobile: mobile.trim(),
        password: password,
        country_code: country_code.trim(),
      },
    }),
  };

  return makeRequest(authUrl + endpoints.signup, requestOptions);
};

const mobilePasswordSignIn = (mobile, password, country_code) => {
  var requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({
      provider: 'mobile-password',
      data: {
        mobile: mobile.trim(),
        country_code: country_code.trim(),
        password: password,
      },
    }),
  };

  return makeRequest(authUrl + endpoints.login, requestOptions).then(
    response => {
      handleAuthResponse(response);
    }
  );
};

const mobilePasswordVerify = (mobile, country_code, otp) => {
  var requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({
      mobile: mobile.trim(),
      country_code: country_code.trim(),
      otp: otp,
    }),
  };

  return makeRequest(
    authUrl + endpoints.verify_mobile_password,
    requestOptions
  );
};

const mobileOtpVerify = (mobile, country_code, otp) => {
  var requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({
      mobile: mobile.trim(),
      country_code: country_code.trim(),
      otp: otp.trim(),
    }),
  };

  return makeRequest(authUrl + endpoints.verify_mobile_otp, requestOptions)
    .then(response => {
      handleAuthResponse(response);
    })
    .catch(function(error) {
      alert('Error verifying mobile: ' + JSON.stringify(error));
    });
};

const mobileOnlySignUp = (mobile, password) => {
  var requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({
      provider: 'mobile-password',
      data: {
        mobile: mobile.trim(),
        password: password,
      },
    }),
  };

  return makeRequest(authUrl + endpoints.signup, requestOptions)
    .then(response => {
      handleAuthResponse(response);
    })
    .catch(function(error) {
      alert('Error signing up using mobile: ' + JSON.stringify(error));
    });
};

const mobileOtpSignIn = (mobile, otp, country_code) => {
  var requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({
      provider: 'mobile',
      data: {
        mobile: mobile.trim(),
        otp: otp.trim(),
        country_code: country_code.trim(),
      },
    }),
  };

  return makeRequest(authUrl + endpoints.login, requestOptions)
    .then(response => {
      handleAuthResponse(response);
    })
    .catch(function(error) {
      alert('Error sign in: ' + JSON.stringify(error));
    });
};

const facebookLogin = (access_token, redirectUrl) => {
  var requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({
      provider: 'facebook',
      data: {
        access_token: access_token,
      },
    }),
  };

  return makeRequest(authUrl + endpoints.login, requestOptions)
    .then(response => {
      console.log(response);
      window.location.href = redirectUrl;
    })
    .catch(function(error) {
      alert('Error sign in: ' + JSON.stringify(error));
    });
};

const googleLogin = (id_token, redirectUrl) => {
  var requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({
      provider: 'google',
      data: {
        id_token: id_token,
      },
    }),
  };

  return makeRequest(authUrl + endpoints.login, requestOptions)
    .then(response => {
      console.log(response);
      window.location.href = redirectUrl;
    })
    .catch(function(error) {
      alert('Error sign in: ' + JSON.stringify(error));
    });
};

const githubLogin = (code, redirectUrl) => {
  var requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({
      provider: 'github',
      data: {
        code: code,
        redirect_uri: githubRedirectUrl,
        state: redirectUrl,
      },
    }),
  };

  return makeRequest(authUrl + endpoints.login, requestOptions)
    .then(response => {
      console.log(response);
      window.location.href = redirectUrl;
    })
    .catch(function(error) {
      alert('Error sign in: ' + JSON.stringify(error));
    });
};

const linkedinLogin = (code, redirectUrl) => {
  var requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({
      provider: 'linkedin',
      data: {
        code: code,
        redirect_uri: linkedinRedirectUrl,
      },
    }),
  };

  return makeRequest(authUrl + endpoints.login, requestOptions)
    .then(response => {
      console.log(response);
      window.location.href = redirectUrl;
    })
    .catch(function(error) {
      alert('Error sign in: ' + JSON.stringify(error));
    });
};

const emailForgotPassword = email => {
  var requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({
      email: email.trim(),
    }),
  };

  return makeRequest(authUrl + endpoints.email_forgot_password, requestOptions);
};

// this is logout for restricted role
const logout = () => {
  var requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({}),
  };

  return makeRequest(authUrl + endpoints.logout, requestOptions)
    .then(function(response) {
      window.location = '/ui' + decodeURIComponent(window.location.search);
    })
    .catch(function(error) {
      alert('Could not logout: ' + JSON.stringify(error.message));
    });
};

const logoutGlobal = () => {
  var requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({}),
  };

  return makeRequest(authUrl + endpoints.logout, requestOptions)
    .then(response => {
      // reset the cookie
      document.cookie =
        'hasura_auth_uikit=;expires=Thu, 01 Jan 1970 00:00:00 GMT;domain=' +
        clusterName +
        ';path=/;';
      return response;
      // handleAuthResponse(response);
    })
    .catch(function(error) {
      // alert("Could not logout: " + JSON.stringify(error.message));
      const errorMsg = 'Could not logout: ' + JSON.stringify(error.message);
      console.log(errorMsg);
      return error;
    });
};

const resetPassword = (token, password) => {
  var requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({ token: token, password: password }),
  };

  return makeRequest(authUrl + endpoints.reset_password, requestOptions);
};

const verifyEmail = token => {
  var requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  };

  return makeRequest(
    authUrl + endpoints.verify_email + '?token=' + token,
    requestOptions
  )
    .then(function(response) {
      // alert("Email verified successfully.");
      return {
        status: 'Verification Successful. Redirecting...',
        error: false,
      };
    })
    .catch(function(error) {
      // alert("Could not reset password: " + JSON.stringify(error));
      return { status: error, error: true };
    });
};

export {
  usernameSignIn,
  emailSignIn,
  mobilePasswordSignIn,
  mobileOtpSignIn,
  usernameSignUp,
  emailSignUp,
  mobilePasswordSignUp,
  mobileOnlySignUp,
  mobileOtpSignUp,
  mobileOtpLogin,
  mobileOtpSignupFinal,
  resendMobileOtp,
  resendMobilePasswordOtp,
  mobilePasswordVerify,
  mobileOtpVerify,
  facebookLogin,
  googleLogin,
  githubLogin,
  linkedinLogin,
  sendForgotPasswordOTP,
  resetMobilePassword,
  emailForgotPassword,
  resetPassword,
  verifyEmail,
  logout,
  logoutGlobal,
  handleAuthResponse,
};
