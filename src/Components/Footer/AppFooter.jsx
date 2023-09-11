import React from 'react'
import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBIcon,
    MDBBtn
  } from 'mdb-react-ui-kit';

const AppFooter = () => {
  return (
    <div> <MDBFooter className='bg-light text-center text-white'>
    <MDBContainer className='p-4 pb-0'>
      <section className='mb-4'>
        <MDBBtn
          floating
          className='m-1'
          style={{ backgroundColor: '#3b5998' }}
          href="https://www.facebook.com/md.shahnawaz.940"
          role='button'
        >
          <MDBIcon fab icon='facebook-f' />
        </MDBBtn>


        <MDBBtn
          floating
          className='m-1'
          style={{ backgroundColor: '#dd4b39' }}
          href="https://mail.google.com/mail/u/0/#inbox"
          role='button'
        >
          <MDBIcon fab icon='google' />
        </MDBBtn>
        <MDBBtn
          floating
          className='m-1'
          style={{ backgroundColor: '#ac2bac' }}
          href="https://instagram.com/md_shahnawaz786"
          role='button'
        >
          <MDBIcon fab icon='instagram' />
        </MDBBtn>

        <MDBBtn
          floating
          className='m-1'
          style={{ backgroundColor: '#0082ca' }}
          href="https://linkedin.com/in/shahnawaz0786"
          role='button'
        >
          <MDBIcon fab icon='linkedin-in' />
        </MDBBtn>

        <MDBBtn
          floating
          className='m-1'
          style={{ backgroundColor: '#333333' }}
          href="https://github.com/mdshahnawaz786"
          role='button'
        >
          <MDBIcon fab icon='github' />
        </MDBBtn>
      </section>
    </MDBContainer>

    <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
    © E-Commerce website 2023 | Copyright:
      <a className='text-white' href='https://fakestoreapi.com/'>
      {" "}fakestoreapi.com
      </a>
      &nbsp;&nbsp;| Developed by Md Shahnawaz...
    </div>
  </MDBFooter></div>
  )
}

export default AppFooter