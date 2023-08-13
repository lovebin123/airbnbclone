import React from 'react'
import Toggle from './Toggle'
import '../Components/Toggle.css'
function Toggle1() {
  return (
    <div className='toggle'>
        <div className='toggle-wrapper'>
          <div className='toggler'>
            <b>Display total price</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div className='vr'></div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Include all fees before taxes <div className='toggler1'><Toggle/></div>
        </div></div>
        <br></br>
    </div>
  )
}

export default Toggle1