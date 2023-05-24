import React from "react";
import { MDBFooter, MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";

export default function Footer() {
  return (
    <MDBFooter className='text-center' color='white' bgColor='dark'>
      <MDBContainer className='p-4'>
        <section className='mb-4 d-flex justify-content-between align-items-start'>
          <p>Two Car Studios</p>

          <MDBRow>
            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    Instagram
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    Terms and Conditions
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    Terms and Conditions
                  </a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      <div
        className='text-center p-3'
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        <p className='mb-0'>© 2023 Two Car Studio</p>
      </div>
    </MDBFooter>
  );
}
