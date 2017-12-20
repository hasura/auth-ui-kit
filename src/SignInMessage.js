import React, { Component } from "react";
import './style.css';
import { Link } from "react-router-dom";
class SignInMessage extends Component {
  render() {
    return (
      <div className='descriptionText'>
        Already have an account?
      	<Link to={{pathname: '/ui', search: this.props.location.search}} className='linkDescription textDecoration'> Login
      	</Link>
      </div>
    );
  }
}

export default SignInMessage;
