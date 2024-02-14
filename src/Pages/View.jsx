import React, { useEffect, useState } from 'react'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardHeader,
  MDBCardFooter,
  MDBBtn
} from 'mdb-react-ui-kit';
import title from '../Assets/mail.gif'
import { useParams } from 'react-router-dom';
import axios from 'axios';

function View() {


  const base_url='http://localhost:3003'
   
  const {id}=useParams()
  console.log(id);

  const [contData,setContData]=useState({})

  const fetchContact=async(id)=>{
    const result = await axios.get(`${base_url}/get-a-contact/${id}`)
    console.log(result.data.users);
    setContData(result.data.users)
  }
  console.log(contData);

  useEffect(()=>{
    fetchContact(id)
  },[])

  return (
    <div className=''>
           <div className="row">
            <div className="col">
            <MDBCard style={{width:'500px', marginLeft:'200px', marginTop:'220px'}} className=' shadow  border border-warning' alignment=''>
      <MDBCardHeader><h2 className='text-center text-warning'><b>{contData.id}.{contData.name}</b></h2></MDBCardHeader>
      <MDBCardBody>
        
        <MDBCardText>
          <h5 className='text-dark'><b>Address: {contData.address}</b></h5>
          <h5 className='mt-3 text-dark'><b>Phone: {contData.phone}</b></h5>
          <h5 className='mt-3 text-dark'><b>e-mail: {contData.email}</b></h5>
        </MDBCardText>
        <div className='text-center'>
        <MDBBtn className='bg-warning mt-3' href='/contact'>EXIT</MDBBtn>
        </div>
      </MDBCardBody>
      
    </MDBCard>
        
            </div>
            <div className="col">
                <div>
                  <img src={title} style={{width:'700px',marginTop:'20px', marginBottom:'50px'}} alt="" />
                </div>
            </div>
           </div>
    </div>
  )
}

export default View