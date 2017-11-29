import React, { Component } from "react";
import './style.css';
// import { NavLink } from "react-router-dom";
import globals from './globals';

class SocialLoginWrapper extends Component {
  render() {
    return (
      <div>
        {globals.facebook || globals.google || globals.github || globals.linkedin ?
        <div className='socialLoginWrapper'>
          <div className='descriptionText'>
            Or connect with:
          </div>
          <div className='socialLoginIconWrapper'>
            {globals.facebook ?
            <div className='socialLoginIcon'>
              <i className='fa fa-facebook' aria-hidden='true'></i>
            </div>
            : null}
            {globals.google ?
            <div className='socialLoginIcon'>
              <i className='fa fa-google' aria-hidden='true'></i>
            </div>
            : null}
            {globals.github ?
            <div className='socialLoginIcon'>
              <i className='fa fa-github' aria-hidden='true'></i>
            </div>
            : null}
            {globals.linkedin ?
            <div className='socialLoginIcon'>
              <i className='fa fa-linkedin' aria-hidden='true'></i>
            </div>
            : null}
          </div>
        </div>
        : null}
      </div>
    );
  }
}

export default SocialLoginWrapper;
