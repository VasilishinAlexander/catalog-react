import React from 'react'
import AuthForm from '../components/AuthForm'
import {login, signup} from '../actions/UserActions'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
class AuthContainer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      login: {
        value: '',
        err: '',
        label: 'Enter your login'
      },
      password: {
        value: '',
        err: '',
        label: 'Enter your password',
        type: 'password'
      }
    }
    this.handleLogin = this.handleLogin.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.submit = this.submit.bind(this);
  }
  handlePassword (v) {
    this.setState({
      error: '',
      password: {
        ...this.state.password,
        value: v,
        err: ''
      }
    })
  }
  handleLogin (v) {
    this.setState({
      error: '',
      login: {
        ...this.state.login,
        value: v,
        err: ''
      }
    })
  }
  validate () {
    let passwordError, loginError;
    if (this.state.password.value.length < 6) {
      passwordError = 'Too short password'
    }
    if (this.state.login.value.length < 6) {
      loginError = 'Too short login'
    }
    if (!passwordError && !loginError) return;
    this.setState({
      login: {
        ...this.state.login,
        err: loginError
      },
      password: {
        ...this.state.password,
        err: passwordError
      }
    });
    return true;
  }
  submit (e) {
    e.preventDefault();
    const validationResult = this.validate();
    if (validationResult) return;
    const payload = {
      username: this.state.login.value,
      password: this.state.password.value
    }
    this.setState({
      loading: true,
      error: ''
    })
    const func = this.props.type === 'login' ? this.props.login : this.props.signup;
    func(payload).then(res => {
      if (res.status === 500 || res.data.success === false) throw new Error(res.data.message);
      if (this.props.type === 'signup') this.props.history.push(`/login`)
    }).catch(e => {
      this.setState({
        loading: false,
        error: e.message || 'Error :('
      })
    })
  }
  render () {
    const submitText = this.props.type === 'login' ? 'Log in' : 'Sign Up'
    return (
      <AuthForm error={this.state.error} login={this.state.login} password={this.state.password} handleLogin={this.handleLogin} handlePassword={this.handlePassword} submit={this.submit} submitText={submitText}/>
    )
  }
}
export default withRouter(connect(null, {login, signup})(AuthContainer));