import React, { Component } from "react";
import './style.css';
import { Link } from "react-router-dom";
class Back extends Component {
  render() {
    return (
      <div className={'backBtn'}>
        <i className="fa fa-chevron-left" aria-hidden="true"></i>
        Back
      </div>
    );
  }
}

export default Back;
