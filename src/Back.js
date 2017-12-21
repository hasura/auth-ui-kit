import React, { Component } from "react";
import './style.css';
import { Link } from "react-router-dom";
class Back extends Component {
  render() {
  	const {backUrl} = this.props;
  	const backHtml = backUrl ? 
  		(<div className={'backBtn'}>
		    <i className="fa fa-chevron-left" aria-hidden="true"></i>
		    <Link to={this.props.backUrl}>Back</Link>
		</div>) : (<div></div>);

    return backHtml;
  }
}

export default Back;
