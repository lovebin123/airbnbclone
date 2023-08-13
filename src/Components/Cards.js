import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardImage
} from 'mdb-react-ui-kit';
import house1 from '../Images/house1.webp'
export default function App() {
  return (
    <MDBCard>
      <MDBCardImage src={house1} alt='...' position='top' />
      <MDBCardBody>
        <MDBCardText>
          <b>Herabhag,India</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;★5.0<br></br>
          <div className='card1'>392 kilometers away<br></br>
          5 Nights 10-15 Jun</div><br></br>
          <ul><b>₹11,495</b> total before taxes</ul>

        </MDBCardText>
      </MDBCardBody>
    </MDBCard>
  );
}