import React from 'react'
import {Link} from 'react-router-dom';
import Logo from './Logo'
const HeaderDefault =  (props) => {
  const userActions = 
    props.auth ? 
    (
      <div className='user-actions'>
        <Link to='/logout'>Log out</Link>
      </div>
    ) :
    (
      <div className='user-actions'>
        <Link to='/login'>Log in</Link>
        <Link to='/signup'>Sign up</Link>
      </div>
    );
  return (
    <header className='header'>
      <div className='header__fake'></div>
      <div className='header__content'>
        <div className='container'>
          <div className='row justify-content-between align-items-center'>
            <div className='col-auto'>
              <Logo />
            </div>
            <div className='col-auto'>
            { userActions }
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
export default HeaderDefault