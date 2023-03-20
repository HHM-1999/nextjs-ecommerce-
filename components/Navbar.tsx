import React from 'react'
import { Container, Nav, Navbar, NavDropdown, Toast, ToastContainer } from 'react-bootstrap'
import Link from 'next/link'
import { useAuth } from '../context/AuthContext'
import { useRouter } from 'next/router'
import { BsFillCartCheckFill } from 'react-icons/bs'
import { CgProfile } from 'react-icons/cg';
import { toast } from 'react-toastify'

const NavbarComp = () => {

    const { user, logout } = useAuth()
    const handelLogout = () => {
       
        toast("Logout Done");

    }
    const router = useRouter()
    
     
    

  return (
    <Navbar bg="success" expand="lg" className=" container navbar navbar-expand-lg bg-warning shadow-lg ">
      <Container>
      
              <Link href="/" className="navbar-brand mx-2 "><b>Welcome To MiniMap</b></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='navbar-end px-5 mx-5' >
          <Nav className="me-auto gap-10 ">
            {user  ?(
                          <div className='d-flex gap-10'>
                              <Nav.Link href={(user?.email)}  >
                                  <CgProfile size={30}></CgProfile>

                                
                              </Nav.Link> 
                            
                <Nav.Link
                  onClick={(handelLogout) => {
                    logout()
                    router.push('/login')
                  }}
                >
                  Logout
                              </Nav.Link>
                     <Nav.Link href='/cart'>Cart</Nav.Link>    
              </div>
            ) : (
              <>
                
                  <Nav.Link href="/signup" >SignUp</Nav.Link>
               
                
                  <Nav.Link href="/login">Login</Nav.Link>
                
              </>
            )}
          </Nav>
        </Navbar.Collapse>
          </Container>
          <ToastContainer></ToastContainer>
      </Navbar>
      
  )
}

export default NavbarComp