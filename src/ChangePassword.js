import React, { Component } from "react";
import './style.css';
class ChangePassword extends React.Component {

  render() {
    return (
      <div className='landingPageWrapper container-fluid'>
        <div className='landingPageInnerWrapper'>
          <div className='signUpWrapper'>
            <div className='headerDescription addPaddTop'>
              Change Password
            </div>
            <div className='descriptionText'>
              Hello! Change your password
            </div>
            <form className='formGroupWrapper'>
              <input type="password" placeholder='Enter new password' />
            </form>
            <form className='formGroupWrapper'>
              <input type="password" placeholder='confirm new password' />
            </form>
            <form className='formGroupWrapper hide'>
              <input type="text" placeholder='otp' />
            </form>
            <div className='signInbtn'>
              <a><button>Reset password</button></a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ChangePassword
