import React, { Component } from "react";
import {Helmet} from "react-helmet";
import './style.css';
class ForgotPassword extends Component {

  render() {
    return (
      <div className='landingPageWrapper container-fluid'>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Forgot Password</title>
        </Helmet>
        <div className='landingPageInnerWrapper'>
          <div className='signUpWrapper'>
            <div className='headerDescription addPaddTop'>
              Forgot Password
            </div>
            <div className='descriptionText'>
              Hello! Submit your username to reset your password
            </div>
            <form className='formGroupWrapper'>
              <input type="email" placeholder='Enter username' />
            </form>
            <form className='formGroupWrapper hide'>
              <input type="text" placeholder='otp' />
            </form>
            <div className='signInbtn'>
              <a><button>Submit</button></a>
            </div>
            <div className='descriptionText'>
              Don{'\''}t have an account? <b>Sign Up</b>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ForgotPassword
