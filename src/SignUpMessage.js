import React, { Component } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
class SignUpMessage extends Component {
  render() {
    return (
      <div className="descriptionText addPaddTop">
        Don{"'"}t have an account?{' '}
        <Link
          className="textDecoration linkDescription"
          to={{ pathname: '/ui/signup', search: this.props.location.search }}
        >
          Sign Up
        </Link>
      </div>
    );
  }
}

export default SignUpMessage;
