import React, { useState } from 'react'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

function Header() {
  const [openBasic, setOpenBasic] = useState(false);
  return (
    <div>
      
      <MDBNavbar className='nav' expand='lg' bgColor='black'>
      <MDBContainer fluid>
      <MDBNavbarBrand href='/'>
          <i class="fa-sharp fa-solid fa-phone  fs-1 text-warning ms-5"></i>
            <h1 className='mt-2 ms-3 text-secondary'><b>reachOut</b></h1>
          </MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setOpenBasic(!openBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse  navbar open={openBasic}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
            <MDBNavbarItem >
              <MDBNavbarLink className='text-light' active aria-current='page' href='/'>
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            

            <MDBNavbarItem>
              <MDBDropdown >
                <MDBDropdownToggle tag='a' className='nav-link text-light' role='button'>
                  Actions
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <Link to={'/add'}>
                  <MDBDropdownItem link>Add you Contact</MDBDropdownItem></Link>
                  <Link to={'/contact'}>
                  <MDBDropdownItem link>View Contacts</MDBDropdownItem></Link>
                  
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>

            
          </MDBNavbarNav>

          <form className='d-flex input-group w-auto'>
            <input type='search' className='form-control' placeholder='' aria-label='Search' />
            <MDBBtn className='me-5' color='warning'>Search</MDBBtn>
          </form>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>

    </div>
  )
}

export default Header