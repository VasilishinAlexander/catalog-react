import React from 'react';
import ProductRate from '../components/ProductRate'
const NewReview = props => {
  return (
    <div className='new-review'>
      <div className='row'>
        <div className='col-md-4 offset-md-4'>
          {props.success && (<div className='new-review__success'>{props.success}</div>)}
          {props.error && (<div className='new-review__error'>{props.error}</div>)}
          <ProductRate rate={props.rate} out={props.out} select={props.select} hover={props.hover} dynamic={true} />
          <div className='form-group'>
            <div className='form-group__label'>Enter review text</div>
            <div className='form-group__input'>
              <textarea onChange={(e) => props.handleText(e.target.value)} value={props.text}></textarea>
            </div>
            <div className='form-group__action'>
              <input type='submit' className='button-primary' onClick={props.submit} disabled={props.loading}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewReview