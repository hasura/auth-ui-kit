import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import './style.css';
class NotFound extends Component {
  render() {
    return (
      <div className="viewcontainer">
        <Helmet title="404 - Page Not Found" />
        <div className={'container centerContent'}>
          <div className={'row message'}>
            <div className="col-md-8 col-sm-12 col-xs-12">
              <h1>Oops! Are you lost?</h1>
              <div className="col-sm-12 col-xs-12 hidden-md hidden-lg">
                <br />
              </div>
              <p>
                <i className="fa fa-quote-left" aria-hidden="true" />&nbsp; Go
                to &nbsp;
                <Link to="/ui">Login</Link>.&nbsp;<i
                  className="fa fa-quote-right"
                  aria-hidden="true"
                />
              </p>
            </div>
            <div className="col-md-4 col-sm-12 col-xs-12 hidden-sm hidden-xs" />
          </div>
        </div>
      </div>
    );
  }
}

export default NotFound;
