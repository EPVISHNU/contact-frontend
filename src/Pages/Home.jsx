import React from 'react'
import img from '../Assets/ved.gif'
import Cards from '../Components/Cards'
import title from'../Assets/cont.gif'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import {Link} from 'react-router-dom';
import ttle from '../Assets/contact.gif'
 

function Home() {
  return (
    <div>

      <div className="container  mt-5">
      <h1 className='text-center text-dark '> <span className='me-1'><i class="fa-sharp fa-solid fa-phone  fs-1 text-warning "></i></span> <b>reachOut</b></h1>
        <h5 className='text-center mb-4'>  Contact App</h5>
      
         <div className="row mt-5 ">
          <div className="col mt-5">
          

        <h1 style={{marginLeft:'100px'}} className=''>Why do you need</h1>
        <h1 style={{marginLeft:'200px'}}> <span className='text-warning'><b>reachOut</b></span> in your life?</h1>

        

           <p style={{marginLeft:'100px', marginTop:'20px'}}>
           It reminds people you’re still there – Keeping in touch with your professional contacts reminds them that you’re still interested, still eager and still available. You might happen to call, text message or follow on Instagram someone you interned with. You never know, these people may now own their own business and are searching for an enthusiastic business partner.
           </p>
          </div>
          <div className="col">

            <img style={{width:"500px", margin:'',
          marginLeft:'110px',
          marginTop:''}} className='' src={ttle} alt="" />
          </div>
         </div>

           
      </div>


      <div style={{}} className="container d-flex   mt- mb-">
           
           <Link to={'/add'}>
           <MDBBtn className='bg-warning  border border-light' rounded style={{marginLeft:'450px', height:'80px', width:'200px',marginTop:'50px', marginBottom:'50px'}} size='lg'><b>Add Contact</b></MDBBtn>
           </Link>
      
          <Link to={'/contact'}>
          <MDBBtn className='bg-warning  border border-light' rounded style={{marginLeft:'20px', height:'80px', width:'200px', marginTop:'50px',marginBottom:'50px'}} size='lg'><b>My Contacts</b></MDBBtn>
          </Link>
      
      </div>

     

      <div className="container bg-  mt-2">
        <div className="row">
          <div className="col">
           <img style={{width:'600px'}} src={title} alt="" />
          </div>
          <div className="col">
            <h1 style={{marginTop:'130px'}}>All contacts in <span className='text-warning'>one place</span> !!</h1>
            <p>Bring your contacts and centralise them all together to manage them better.You never know what other people know, who other people know, or how getting in touch with a distant contact in an unrelated field can be the conversation to get you places.</p>

           
          </div>
        </div>
      </div>


      <div className="conatiner mt- ">
          <div className="row">
            <div className="col">
              <h1 className='text-center mt-5'>How it <span className='text-warning'>works</span>..?</h1>
              <p style={{marginLeft:'280px'}}>You can view, edit and delete necessary contact details....</p>
            </div>
            <div className="col mb-5">
            {/* <marquee> */}
              <Row>
                <Col>
                <Cards/>
                </Col>
              </Row>
            {/* </marquee> */}
            </div>
          </div>
      </div>


    </div>
  )
}

export default Home