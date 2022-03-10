import React from 'react'
import Business_header from './Business_header'
import Business_home from './Business_home'
import Business__footer from './Business__footer'
function Business() {
  return (
    <div className='w-full h-max'>
        <Business_header/>
        <Business_home/>
        <Business__footer/>
    </div>
  )
}

export default Business