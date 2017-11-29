import React, { Component } from "react";
import './style.css';
class ForgotPassword extends React.Component {

  render() {
    return (
      <div className='landingPageWrapper container-fluid'>
        <div className='landingPageInnerWrapper'>
          <div className='signUpWrapper'>
            <div className='headerDescription addPaddTop'>
              Forgot Password
            </div>
            <div className='descriptionText'>
              Hello! Sign in with your username or email
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
