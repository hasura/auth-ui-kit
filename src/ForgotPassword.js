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
              <div className='formInput'>
                <input type="email" placeholder='Enter username' />
              </div>
              <div className='formInput'>
                <input type="text" placeholder='otp' />
              </div>
              <div className='signInbtn'>
                <a><button>Submit</button></a>
              </div>
            </form>
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
