import React from 'react'
import '../Components/Toggle.css'
function Toggle() {
  return (
    <div className='toggler'>
      <input type="checkbox" id="switch" /><label for="switch">Toggle</label>
    </div>
  )
}

export default Toggle