import React, { Component } from "react";
import './style.css';
import { NavLink } from "react-router-dom";
class SignInMessage extends Component {
  render() {
    return (
      <div className='descriptionText'>
        Already have an account? <b><NavLink className='linkDescription textDecoration' to="/ui">Sign In</NavLink></b>
      </div>
    );
  }
}

export default SignInMessage;
