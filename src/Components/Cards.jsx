import React from 'react'
import edit from '../Assets/edit.gif'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn,
    MDBRipple
  } from 'mdb-react-ui-kit';
  import din from '../Assets/bin.gif'
  import gif from '../Assets/eye.gif'

function Cards() {
  return (
    <div>

         <div className="row">
            <div className="col"> <MDBCard>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src={gif} fluid alt='...' />
            <h5 className='text-center text-primary'>View</h5>        
      </MDBRipple>
      
    </MDBCard></div>
            <div className="col"> <MDBCard>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src={edit} fluid alt='...' />
        <h5 className='text-center text-warning'>Edit</h5>
        
      </MDBRipple>
      
    </MDBCard></div>
            <div className="col"> <MDBCard>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src={din} fluid alt='...' />
        <h5 className='text-center text-danger'>Delete</h5>

        
      </MDBRipple>
      
    </MDBCard></div>
         </div>
    </div>
  )
}

export default Cards