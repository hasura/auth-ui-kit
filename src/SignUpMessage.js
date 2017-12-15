import React, { Component } from "react";
import './style.css';
import { Link } from "react-router-dom";
class SignUpMessage extends Component {
  render() {
    return (
      <div className='descriptionText'>
        Don{'\''}t have an account?  
        <b>
        	<Link className='textDecoration linkDescription' to={{pathname: '/ui/signup', search: this.props.location.search}}> Sign Up</Link>
        </b>
      </div>
    );
  }
}

export default SignUpMessage;
