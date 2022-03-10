import React from 'react'
import Business_header from '../Business/Business_header'
import Business__footer from '../Business/Business__footer'
import Business__detail__home from './Business__detail__home'
import Form from '../Business/Form'
function Business__detail() {
  return (
    <div className='w-full h-max'>
        <Business_header/>
        <Business__detail__home/>
        <Form/>
        <Business__footer/>
        
    </div>
  )
}

export default Business__detail