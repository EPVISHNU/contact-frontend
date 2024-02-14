import React from 'react'
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

function Footer() {
  return (
    <div>
      
      <MDBFooter className='bg-black text-center text-warning'>
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4'>
          <MDBBtn outline color="warning" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn outline color="warning" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn outline color="warning" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='google' />
          </MDBBtn>
          <MDBBtn outline color="warning" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn outline color="warning" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn outline color="warning" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </section>
      </MDBContainer>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <p className='text-uppercase fw-bold mb-4'>
                <MDBIcon color='secondary' icon='<i class="fa-sharp fa-solid fa-phone  fs-5 text-warning "></i>' className='me-2' />
                REACH OUT
              </p>
              <p>
              Keeping in touch with your professional contacts reminds them that you're still interested, still eager and still available.
              </p>
            </MDBCol>

            

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <p className='text-uppercase fw-bold mb-4'>Useful links</p>
              <p>
                <a href='/' className='text-reset'>
                  Get to know us
                </a>
              </p>
              <p>
                <a href='/add' className='text-reset'>
                  Add Contact
                </a>
              </p>
              <p>
                <a href='/contact' className='text-reset'>
                  Check My Contacts
                </a>
              </p>
              
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <p className='text-uppercase fw-bold mb-4'>Contact</p>
              <p>
                <MDBIcon color='secondary' icon='home' className='me-2' />
                Ernakulam, Kerala Satate, Bharath
              </p>
              <p>
                <MDBIcon color='secondary' icon='envelope' className='me-3' />
                reachout@gmail.com
              </p>
              <p>
                <MDBIcon color='secondary' icon='phone' className='me-3' /> +91 7356944451
              </p>
              <p>
                <MDBIcon color='secondary' icon='print' className='me-3' /> +91 8330805677
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2020 Copyright:
        <a className='text-warning' href='/home'>
          reachout@gmail.com.com
        </a>
      </div>
    </MDBFooter>

    </div>
  )
}

export default Footer