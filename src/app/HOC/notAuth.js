import React from 'react';
import { withRouter } from 'react-router';

export default function NotAuth(Component, token) {

  class NotAuthenticatedComponent extends React.Component {

    componentWillMount() {
      this.checkAuth();
    }

    checkAuth() {
      // if user authorized return on main page
      if (token) {
        this.props.history.push(`/`);
      }
    }
    render() {
      return !token
        ? <Component { ...this.props } />
        : null;
    }

  }

  return withRouter(NotAuthenticatedComponent);
}