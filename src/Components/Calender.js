import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
function Calender() {
    const [selectedRange, setSelectedRange] = useState([new Date(), new Date()]);

    const handleRangeChange = range => {
      setSelectedRange(range);
    };
  
    return (
      <div>
       <Calendar
        selectRange
        onChange={handleRangeChange}
        value={selectedRange}
      />
      </div>
    );
  }
  
  export default Calender;