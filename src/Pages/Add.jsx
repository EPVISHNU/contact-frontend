import React, { useState } from 'react'
import { MDBInput } from 'mdb-react-ui-kit';
import { MDBBtn } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import add from '../Assets/add.gif'

function Add() {

  const [id,setId]=useState("")
  const [name,setName]=useState("")
  const [address,setAddress]=useState("")
  const [phone,setPhone]=useState("")
  const [email,setEmail]=useState("")

  const base_url='http://localhost:3003/add-contact'

  const location= useNavigate()

  const AddContact=(e)=>{
    e.preventDefault()
    console.log(id,name,address,phone,email);

       const body={
        id,name,address,phone,email
       }

    const result = axios.post(base_url,body).then((response)=>{
      console.log(result);
      alert(response.data.message)
      location('/contact')
    })

    
  }

  return (
    <div>

         <div className="row">
          <div className="col"> <div style={{width:'500px'}} className="container mt-5 mb-5 shadow p-5">
            <h4 className='text-center' ><b><span><Link to={'/contact'}>
            <i class="fa-regular fa-user fs-3 me-2 text-warning"></i></Link></span>ADD CONTACT</b></h4>

              <form action="">
              <MDBInput onChange={(e)=>setId(e.target.value)} className='mt-3' label='Id' id='form1' type='text' />
              <MDBInput onChange={(e)=>setName(e.target.value)} className='mt-4' label='Name' id='form1' type='text' />
              <MDBInput onChange={(e)=>setAddress(e.target.value)} className='mt-4' label='Address' id='form1' type='text' />
              <MDBInput onChange={(e)=>setPhone(e.target.value)} className='mt-4' label='Phone' id='form1' type='text' />
              <MDBInput onChange={(e)=>setEmail(e.target.value)} className='mt-4' label='E-mail' id='form1' type='text' />

                     <div className='text-center'>
                     <MDBBtn onClick={(e)=>AddContact(e)} className='mx-2 mt-5 bg-warning'><b>ADD</b></MDBBtn>

                     </div>
              </form>

          </div></div>
          <div className="col">
            <img style={{width:'100%', marginLeft:'-100px'}} src={add} alt="" />
          </div>
         </div>


    </div>
  )
}

export default Add