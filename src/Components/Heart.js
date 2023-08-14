import { Button } from '@mui/material';
import React, { useState } from 'react';
import './Heart.css'
function Heart() {
  const [heartColor, setHeartColor] = useState('black');

  const handleHeartClick = () => {
    setHeartColor(heartColor === 'red' ? 'black' : 'red');
  };

  return (
    <div className='hrt'>
      <Button onClick={handleHeartClick} id='btnh2' className='btn'>
        <i className='fas fa-heart fa-lg' style={{ color: heartColor }}></i>
      </Button>
    </div>
  );
}

export default Heart;