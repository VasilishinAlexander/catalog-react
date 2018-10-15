import React, { Component } from 'react';
import {Route, withRouter} from 'react-router-dom';
import HeaderDefault from '../components/HeaderDefault'
import MainPage from '../components/MainPage'
import ProductInfoContainer from '../containers/ProductInfoContainer'
import LoginPage from '../components/LoginPage'
import SignUpPage from '../components/SignUpPage'
import Logout from '../components/Logout'
import {initializeUser} from '../actions/UserActions'
import { connect } from 'react-redux';
import NotAuth from '../HOC/NotAuth'
class App extends Component {
  componentWillMount () {
    this.props.initializeUser();
  }
  render() {
    return (
      <div className='App'>
        <HeaderDefault auth={!!this.props.token} />
        <Route exact path='/' component={MainPage} />
        <Route path='/product/:id' component={ProductInfoContainer} />
        <Route path='/signup' component={NotAuth(SignUpPage, this.props.token)} />
        <Route path='/login' component={NotAuth(LoginPage, this.props.token)} />
        <Route path='/logout' component={Logout} />
      </div>
    );
  }
}
function mapStateToProps (state) {
  return {
    token: state.user.token
  }
}
export default withRouter(connect(mapStateToProps, {initializeUser})(App));
