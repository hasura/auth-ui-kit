import React, { Component } from "react";
import './style.css';
class ErrorMsg extends Component {
  render() {
  	const {response} = this.props;
  	// parse error to show customised message
	const errorHtml = response ? (<div className='errorText'>{response.message}</div>) : null;
    return errorHtml;
  }
}

export default ErrorMsg;
