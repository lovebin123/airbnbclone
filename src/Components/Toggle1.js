import React from 'react'
import '../Components/Toggle.css'
function Toggle1() {
  return (
    <div className='toggle-container'>
        <div className='toggle-wrapper'>
          <div className='toggler'>
            <p className='p15'>Display total price</p><div className='vr'></div><p className='p17'>Include all fees before taxes &nbsp;&nbsp;&nbsp;&nbsp;   <input type="checkbox" id="switch" /><label for="switch">Toggle</label></p>

        </div></div>
        <br></br>
    </div>
  )
}

export default Toggle1