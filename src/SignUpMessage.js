import React, { Component } from "react";
import './style.css';
import { NavLink } from "react-router-dom";
class SignUpMessage extends Component {
  render() {
    return (
      <div className='descriptionText'>
        Don{'\''}t have an account? <b><NavLink className='textDecoration linkDescription' to="/ui/signup">Sign Up</NavLink></b>
      </div>
    );
  }
}

export default SignUpMessage;
