import React, { Component } from "react";
import './style.css';
class Mobile extends React.Component {

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
              <input type="email" placeholder='Sign in with mobile' />
            </form>
            <form className='formGroupWrapper'>
              <input type="password" placeholder='Password' />
            </form>
            <div className='linkDescription forgotPassword descriptionText'>
              <a href='#'> Forgot Password?</a>
            </div>
            <div className='signInbtn'>
              <a><button>Sign In</button></a>
            </div>
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

export default Mobile
