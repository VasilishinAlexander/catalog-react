import React from 'react'

const Input = props => {
  return (
    <div className='form-group'>
      {props.label && 
        (<div className='form-group__label'>
          {props.label}
        </div>)
      }
      <div className='form-group__input'>
        <input type={props.type || 'text'} value={props.value} onChange={(e) => props.handler(e.target.value)}/>
      </div>
      {props.err && 
        (<div className='form-group__error'>
          {props.err}
        </div>)
      }
    </div>
  )
}
export default Input