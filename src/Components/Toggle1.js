import React from 'react'
import Toggle from './Toggle'
import '../Components/Toggle.css'
function Toggle1() {
  return (
    <div className='toggle'>
        <div className='toggle-wrapper'>
          <div className='toggler'>
            <p className='p15'>Display total price</p><div className='vr'></div><p className='p17'>Include all fees before taxes</p> <div className='toggler1'><Toggle/></div>
        </div></div>
        <br></br>
    </div>
  )
}

export default Toggle1