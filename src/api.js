import fetch from 'isomorphic-fetch';
import {authUrl, endpoints} from './config';

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

  return fetch(authUrl + endpoints.otp_initiate, requestOptions);
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
    console.log('Request Failed:' + error);
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

  return fetch(authUrl + endpoints.resend_otp, requestOptions);
}

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
    console.log('Request Failed:' + error);
  });
}

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

  return fetch(authUrl + endpoints.signup, requestOptions)
  .then(function(response) {
    console.log(response);
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

  return fetch(authUrl + endpoints.login, requestOptions)
  .then(function(response) {
    return response.json();
  })
  .catch(function(error) {
    console.log('Request Failed:' + error);
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
  resendMobileOtp
  /*
  mobileSignUp,
  */
}
