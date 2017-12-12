import fetch from 'isomorphic-fetch';
import {authUrl, endpoints} from './config';

import makeRequest from './utils/makeRequest';

/* Helper function */

const redirectAppropriately = ( payload ) => {
  const redirectUrl = window.localStorage.getItem("redirect_url");
  if ( redirectUrl !== 'undefined' ) {
    window.location.href = redirectUrl;
  } else {
    const userAccountUrl = authUrl + '/user/info';
    window.location.href = userAccountUrl;
  }
  return Promise.resolve();
}

/* End of it */

const usernameSignUp = (username, password) => {
  var requestOptions = {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      credentials: 'include',
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
    const redirectUrl = window.localStorage.getItem("redirect_url");
    if (response.ok) {
      if (redirectUrl) {
        window.location.href = redirectUrl;
      }
    } else {
      console.log(response.json());
      alert("An error occured");
    }
    return response.json();
  })
  .catch(function(error) {
    alert("An error occured");
    console.log('Request Failed:' + error);
  });
}

const usernameSignIn = (username, password) => {
  var requestOptions = {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      credentials: 'include',
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
    const redirectUrl = window.localStorage.getItem("redirect_url");
    if (response.ok) {
      window.location.href = redirectUrl;
    } else {
      console.log(response.json());
      alert("An error occured");
    }
    return response.json();
  })
  .catch(function(error) {
    alert("An error occured");
    console.log('Request Failed:' + error);
  });
}

const emailSignUp = (email, password) => {
  var requestOptions = {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      credentials: 'include',
      body: JSON.stringify({
        provider: "email",
        data: {
          "email": email,
          "password": password
        }
      })
  };

  return fetch(authUrl + endpoints.signup, requestOptions)
  .then(function(response) {
    const redirectUrl = window.localStorage.getItem("redirect_url");
    if (response.ok) {
      window.location.href = redirectUrl;
    } else {
      console.log(response.json());
      alert("An error occured");
    }
    return response.json();
  })
  .catch(function(error) {
    alert("An error occured");
    console.log('Request Failed:' + error);
  });
}

const emailSignIn = (email, password) => {
  var requestOptions = {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      credentials: 'include',
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
    const redirectUrl = window.localStorage.getItem("redirect_url");
    if (response.ok) {
      window.location.href = redirectUrl;
    } else {
      console.log(response.json());
      alert("An error occured");
    }
    return response.json();
  })
  .catch(function(error) {
    console.log('Request Failed:' + error);
  });
}

const mobileOtpSignUp = (mobile_number, country_code) => {
  var requestOptions = {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      credentials: 'include',
      body: JSON.stringify({
        "mobile": mobile_number,
        "country_code": country_code
      })
  };

  return makeRequest(authUrl + endpoints.otp_initiate, requestOptions);
}

const mobileOtpLogin = (mobile, country_code, otp) => {
  var requestOptions = {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      credentials: 'include',
      body: JSON.stringify({
        provider: "mobile",
        data: {
          "mobile": mobile,
          "country_code": country_code,
          "otp": otp 
        }
      })
  };

  return makeRequest(authUrl + endpoints.login, requestOptions)
  .then(redirectAppropriately)
  .catch(function(error) {
    alert("Error sign in: " + JSON.stringify(error));
  });
}
const mobileOtpSignupFinal = (mobile, country_code, otp) => {
  var requestOptions = {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      credentials: 'include',
      body: JSON.stringify({
        provider: "mobile",
        data: {
          "mobile": mobile,
          "country_code": country_code,
          "otp": otp 
        }
      })
  };

  return makeRequest(authUrl + endpoints.signup, requestOptions)
  .then(redirectAppropriately)
  .catch(function(error) {
    alert("Error signing up: " + JSON.stringify(error));
  });
}

const resendMobileOtp = (mobile_number, country_code) => {
  var requestOptions = {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      credentials: 'include',
      body: JSON.stringify({
        "mobile": mobile_number,
        "country_code": country_code
      })
  };

  return makeRequest(authUrl + endpoints.resend_otp, requestOptions);
};

const sendForgotPasswordOTP = (mobile_number, country_code) => {
  var requestOptions = {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      credentials: 'include',
      body: JSON.stringify({
        "mobile": mobile_number,
        "country_code": country_code
      })
  };

  return makeRequest(authUrl + endpoints.forgot_password_otp, requestOptions);
};

const resetMobilePassword = (mobile_number, country_code, otp, password) => {
  var requestOptions = {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      credentials: 'include',
      body: JSON.stringify({
        "mobile": mobile_number,
        "country_code": country_code,
        "password": password,
        "otp": otp
      })
  };

  return makeRequest(authUrl + endpoints.reset_password_otp, requestOptions)
  .then(redirectAppropriately)
  .catch(function(error) {
    alert("Error resetting password: " + JSON.stringify(error));
    console.log('Request Failed:' + error);
  });
};

const resendMobilePasswordOtp = (mobile_number, country_code) => {
  var requestOptions = {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      credentials: 'include',
      body: JSON.stringify({
        "mobile": mobile_number,
        "country_code": country_code
      })
  };

  return makeRequest(authUrl + endpoints.resend_mobile_password_otp, requestOptions);
};

const mobilePasswordSignUp = (mobile, password, country_code) => {
  var requestOptions = {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      credentials: 'include',
      body: JSON.stringify({
        provider: "mobile-password",
        data: {
          "mobile": mobile,
          "password": password,
          "country_code": country_code
        }
      })
  };

  return makeRequest(authUrl + endpoints.signup, requestOptions);
};

const mobilePasswordSignIn = (mobile, password, country_code) => {
  var requestOptions = {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      credentials: 'include',
      body: JSON.stringify({
        provider: "mobile-password",
        data: {
          "mobile": mobile,
          "country_code": country_code,
          "password": password
        }
      })
  };

  return makeRequest(authUrl + endpoints.login, requestOptions)
  .then(redirectAppropriately);
}

const mobilePasswordVerify = (mobile, country_code, otp) => {
  var requestOptions = {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      credentials: 'include',
      body: JSON.stringify({
        "mobile": mobile,
        "country_code": country_code,
        "otp": otp 
      })
  };

  return makeRequest(authUrl + endpoints.verify_mobile_password, requestOptions)
  .then(redirectAppropriately)
  .catch(function(error) {
    alert("Error signing up: " + JSON.stringify(error));
  });
}

const mobileOtpVerify = (mobile, country_code, otp) => {
  var requestOptions = {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      credentials: 'include',
      body: JSON.stringify({
        "mobile": mobile,
        "country_code": country_code,
        "otp": otp 
      })
  };

  return makeRequest(authUrl + endpoints.verify_mobile_otp, requestOptions)
  .then(redirectAppropriately)
  .catch(function(error) {
    alert("Error verifying mobile: " + JSON.stringify(error));
  });
}

const mobileOnlySignUp = (mobile, password) => {
  var requestOptions = {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      credentials: 'include',
      body: JSON.stringify({
        provider: "mobile-password",
        data: {
          "mobile": mobile,
          "password": password
        }
      })
  };

  return makeRequest(authUrl + endpoints.signup, requestOptions)
  .catch(function(error) {
    alert("Error signing up using mobile: " + JSON.stringify(error));
  });
}

const mobileOtpSignIn = (mobile, otp, country_code) => {
  var requestOptions = {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      credentials: 'include',
      body: JSON.stringify({
        provider: "mobile",
        data: {
          "mobile": mobile,
          "otp": otp,
          "country_code": country_code
        }
      })
  };

  return makeRequest(authUrl + endpoints.login, requestOptions)
  .catch(function(error) {
    alert("Error sign in: " + JSON.stringify(error));
  });
}

const emailForgotPassword = (email) => {
  var requestOptions = {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      credentials: 'include',
      body: JSON.stringify({
        "email": email
      })
  };

  return makeRequest(authUrl + endpoints.email_forgot_password, requestOptions)
  .catch(function(error) {
    alert("Error sending an email for forgot password: " + JSON.stringify(error));
  });
}

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
  sendForgotPasswordOTP,
  resetMobilePassword,
  emailForgotPassword
  /*
  mobileSignUp,
  */
}
