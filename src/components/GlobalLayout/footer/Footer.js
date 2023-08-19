
import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import './Footer.css'
import logo from '../../../assets/logo.png';

export const Footer = () => {
  return (

    <div className='footer'>
      <Row className='d-flex align-center pt-3 m-5'>
        <Col md={6}>
          <img src={logo} alt="Logo" width="150" height="60" className='m-2' />
        </Col>

        <Col md={6}>
          <div><i class="fa-solid fa-phone-flip my-2" style={{ color: ' #3f85fd' }}> </i>   02 8005 7003
            <Button className='bold-text m-2' variant='outline-primary' href='/'> Sign in </Button>
            <Button className='bold-text' href="/request-information"> Get Started  </Button>
          </div>
        </Col>
      </Row>

      <Row className='m-5'>
        <Col className='nav-link' md="3">
          <div className='col2'>
            <a href='/' className='nav-link'>BizVision</a>
          </div>
          <div className='footertext'>
            <a href='/careers' className='nav-link'>Careers</a>
          </div>
          <div className='footertext'>
            <a href='/disclaimer' className='nav-link'>Disclaimer</a>
          </div>
          <div className='footertext'>
            <a href='/terms' className='nav-link'>Terms of Condition</a>
          </div>
          <div className='footertext'>
            <a href='/privacy-policy' className='nav-link'>Privacy Policy</a>
          </div>
        </Col>

        <Col className='py-3' md="2">
          <div className='col2'>Contact</div>
          <div className='footertext'>L2, 608 Harris Street, Ultimo NSW 2007</div>
          <div className='d-flex '>
            <>
              <a href="https://www.facebook.com/your_facebook_page" target="_blank" rel="noopener noreferrer" className="iconStyle">
                <i className="fab fa-facebook-f" style={{ color: '#2e64c2', margin: '10px' }}></i>
              </a>
              <a href="https://www.linkedin.com/your_linkedin_page" target="_blank" rel="noopener noreferrer" className="iconStyle">
                <i className="fab fa-linkedin-in" style={{ color: '#0077b5', margin: '10px' }}></i>
              </a>
              <a href="mailto:your_email@example.com" className="iconStyle">
                <i className="far fa-envelope" style={{ color: '#333', margin: '10px' }}></i>
              </a>
              <a href="https://www.instagram.com/your_instagram_page" target="_blank" rel="noopener noreferrer" className="iconStyle">
                <i className="fab fa-instagram" style={{ color: '#e4405f', margin: '10px' }}></i>
              </a>
              <a href="https://www.twitter.com/your_twitter_page" target="_blank" rel="noopener noreferrer" className="iconStyle">
                <i className="fab fa-twitter" style={{ color: '#1da1f2', margin: '10px' }}></i>
              </a>
            </>
          </div>
        </Col>
      </Row>

      <hr />
      <div className='mt-4 '>© 2010-2023 BizVision. All Rights Reserved </div>
    </div>


  )
}
