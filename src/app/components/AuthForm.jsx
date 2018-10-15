import React from 'react'
import Input from './Input'
const AuthForm = props => (
  <div className='form-page container'>
    <div className='row form-page__content align-items-center justify-content-center'>
      <div className='col-auto'>
      <form action='' onSubmit={props.submit}>
        {props.error && (
        <div className='form-group__error'>
         {props.error}
        </div>)}
          <Input {...props.login} handler={props.handleLogin}/>
          <Input {...props.password} handler={props.handlePassword}/>
          <div className='form-group__action'>
            <input type='submit' className='button-primary' value={props.submitText}/>
          </div>
        </form>
      </div>
    </div>
  </div>
)

export default AuthForm;