import React from 'react'
import Toggle from './Toggle'
import '../Components/Toggle.css'
function Toggle1() {
  return (
    <div className='container  my-9   w-25 rounded-4 h-20 border border-black '>
        
          <div className='toggler'>
            <p className='p15'>Display total price</p><div className='vr'></div><p className='p17'>Include all fees before taxes</p> <p className='toggler1'><Toggle/></p>
        </div>
        <br></br>
    </div>
  )
}

export default Toggle1