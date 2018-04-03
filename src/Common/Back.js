import React, { Component } from 'react';
import '../style.css';
import { Link } from 'react-router-dom';
import globals from '../Common/globals';
class Back extends Component {
  render() {
    const { backUrl } = this.props;
    const backHtml = backUrl ? (
      <div className={'backBtn'}>
        <Link to={this.props.backUrl}>
          <i className="fa fa-chevron-left" aria-hidden="true" />
          Back
        </Link>
      </div>
    ) : (
      <div />
    );
    const finalBackHtml =
      (globals.username ? 1 : 0) +
        (globals.email ? 1 : 0) +
        (globals.mobilePass ? 1 : 0) +
        (globals.mobileOtp ? 1 : 0) ===
      1 ? (
        <div />
      ) : (
        backHtml
      );

    return finalBackHtml;
  }
}

export default Back;
