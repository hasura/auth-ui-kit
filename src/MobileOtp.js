import React, { Component } from "react";
import './style.css';
class MobileOtp extends React.Component {
  render() {
    return (
      <div className='landingPageWrapper container-fluid'>
        <div className='landingPageInnerWrapper'>
          <div className='signUpWrapper'>
            <div className='headerDescription addPaddTop'>
              Sign In
            </div>
            <div className='descriptionText'>
              Hello! Sign in with your username or email
            </div>
            <form className='formGroupWrapper'>
              <div className='formInput'>
                <input type="email" placeholder='Sign in with mobile otp' />
              </div>
              <div className='formInput'>
                <input type="text" placeholder='otp' />
              </div>
              <div className='signInbtn'>
                <a><button>Sign In</button></a>
              </div>
            </form>
            <div className='socialLoginWrapper'>
              <div className='descriptionText'>
                Or connect with:
              </div>
              <div className='socialLoginIconWrapper'>
                <div className='socialLoginIcon'>
                  <i className='fa fa-github' aria-hidden='true'></i>
                </div>
                <div className='socialLoginIcon'>
                  <i className='fa fa-facebook' aria-hidden='true'></i>
                </div>
                <div className='socialLoginIcon'>
                  <i className='fa fa-google' aria-hidden='true'></i>
                </div>
                <div className='socialLoginIcon'>
                  <i className='fa fa-linkedin' aria-hidden='true'></i>
                </div>
              </div>
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

export default MobileOtp
