import React, { useEffect, useState } from 'react'
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
// import axios from 'axios';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import axios from 'axios';
import View from './View';
import Edit from './Edit';
function Contact() {
  
   const[conData,setConData]=useState([])

   const base_url='http://localhost:3003'
   const fetchData= async()=>{

    const result=await axios.get(`${base_url}/get-all-users`)
    console.log(result.data.users);
    setConData(result.data.users)
   }

   const dltEmployee=async(id)=>{
    const result=await axios.delete(`${base_url}/delete-contact/${id}`)
    alert(result.data.message)
    fetchData()
   }

  

   useEffect(()=>{
    fetchData()
   },[])


  return (

    <div>
              
       <h2 className='text-center mt-5'><span className='me-2 text-warning'><i class="fa-solid fa-address-book"></i></span>My Contacts</h2> 
       
           <Link to={'/add'}>
           <MDBBtn rounded className='mx-2 float-end bg-warning me-5'><b>ADD</b></MDBBtn>
           </Link>
                      

       <p className='text-center mt-4'> Keeping in touch with your professional contacts reminds them that you're still interested, still eager and still available.</p>

       <div className="container mt-5">
          
       <MDBTable>
      <MDBTableHead className='text-center'>
        <tr>
          <th scope='col'>Id</th>
          <th scope='col'>Name</th>
          <th scope='col'>Address</th>
          <th scope='col'>Phone</th>
          <th scope='col'>E-mail</th>
          <th scope='col'>Actions</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody className='text-center '>
        {conData.map(item=>(
            <tr>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.address}</td>
            <td>{item.phone}</td>
            <td>{item.email}</td>
            <td>
              <Link to={`/view/${item.id}`}>
              <i class="fa-solid fa-eye text-primary "></i>
              </Link>
              <Link to={`/edit/${item.id}`}>
              <i class="fa-solid fa-pen text-warning ms-4"></i>
              </Link>
              <i onClick={()=>dltEmployee(item.id)} class="fa-solid fa-trash text-danger ms-4"></i>
            </td>
          </tr>
        ))}
        
        
      </MDBTableBody>
    </MDBTable>

       </div>
           
    </div>
  )
}

export default Contact