import React, { useEffect, useState } from 'react'
import { MDBInput } from 'mdb-react-ui-kit';
import { MDBBtn } from 'mdb-react-ui-kit';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import dit from '../Assets/edit.gif'

function Edit() {
  const location=useNavigate()
  
  const base_url='http://localhost:3003'

  
  const[conid,setId]=useState("")
  const[conname,setName]=useState("")
  const[conaddress,setAddress]=useState("")
  const[conphone,setPhone]=useState("")
  const[conemail,setEmail]=useState("")

 


const {id}=useParams()
  console.log(id);

  const fetchContact=async(id)=>{
    const result = await axios.get(`${base_url}/get-a-contact/${id}`)
    console.log(result.data.users);

    setId(result.data.users.id)
    setName(result.data.users.name)
    setAddress(result.data.users.address)
    setPhone(result.data.users.phone)
    setEmail(result.data.users.email)

  }

  useEffect(()=>{
    fetchContact(id)
  },[])

 



  const updtContact=async(e)=>{
    e.preventDefault()
    const body={
       id:conid,
       name:conname,
       address:conaddress,
       phone:conphone,
       email:conemail
    }
    const result = await axios.post(`${base_url}/update-a-contact/${id}`,body)
    console.log(result);
    alert(result.data.message)
    location('/contact')
  }
 

  return (
    <div>
         <div className="row mt-4">
          <h1 className='text-center text- mt-'> <span><i class="fa-solid fa-pen text-warning me-3 mt-"></i></span><b>Edit Contact</b>
          </h1>
          <div className="col"><div style={{width:'500px'}} className="container mt-5 mb-5 shadow rounded p-5">
            <h4 className='text-center' ><b><Link to={'/contact'}>
            <i class="fa-regular fa-user fs-3 me-2 text-warning"></i></Link></b></h4>

              <form action="">
              <MDBInput onChange={(e)=>setId(e.target.value)} value={conid} className='mt-3' label='Id' id='form1' type='text' />
              <MDBInput onChange={(e)=>setName(e.target.value)} value={conname}  className='mt-4' label='Name' id='form1' type='text' />
              <MDBInput onChange={(e)=>setAddress(e.target.value)} value={conaddress}  className='mt-4' label='Address' id='form1' type='text' />
              <MDBInput onChange={(e)=>setPhone(e.target.value)} value={conphone}  className='mt-4' label='Phone' id='form1' type='text' />
              <MDBInput onChange={(e)=>setEmail(e.target.value)} value={conemail}  className='mt-4' label='E-mail' id='form1' type='text' />

                     <div className='text-center'>
                     <MDBBtn onClick={(e)=>updtContact(e)} className='mx-2 mt-5 bg-warning'><b>UPDATE</b></MDBBtn>

                     </div>
              </form>

          </div></div>
          <div className="col">
            <img className='' style={{width:'50%', marginTop:'150px', marginLeft:'100px'}} src={dit} alt="" />
          </div>
         </div>
    </div>
  )
}

export default Edit