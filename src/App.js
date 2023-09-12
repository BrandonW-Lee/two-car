import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Example from "./navbar.js";
import Footer from "./footer.js";
import photo1 from "./dancingFromBehind.jpg";
import photo2 from "./dancingFront.jpg";
import photo3 from "./pictureOfDanceStudio.jpg";
import { Carousel } from "./carousel";

const photos = [photo1, photo2, photo3];

const dancingFromFront = require("./dancingFront.jpg");
const dancingBehind = require("./dancingFromBehind.jpg");
const danceStudio = require("./pictureOfDanceStudio.jpg");

function App() {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const handleNextPhoto = () => {
    setCurrentPhotoIndex((prevIndex) =>
      prevIndex === photos.length - 1 ? 0 : prevIndex + 1
    );
  };
  // useEffect(() => {
  //   initializeGoogleSignIn(); // Call the initialization function when the component mounts
  // }, []);

  const handlePreviousPhoto = () => {
    setCurrentPhotoIndex((prevIndex) =>
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1
    );
  };

  // const { google } = require("googleapis");

  // const oauth2Client = new google.auth.OAuth2(
  //   "1089560604265-bkub8a3bfn687c4j5oiaaeacqnb0f2kf.apps.googleusercontent.com",
  //   "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",
  //   "http://localhost:3000"
  // );

  // // generate a url that asks permissions for Blogger and Google Calendar scopes
  // const scopes = [
  //   "https://www.googleapis.com/auth/blogger",
  //   "https://www.googleapis.com/auth/calendar",
  // ];

  // const url = oauth2Client.generateAuthUrl({
  //   // 'online' (default) or 'offline' (gets refresh_token)
  //   access_type: "offline",

  //   // If you only need one scope you can pass it as a string
  //   scope: Node,
  // });

  return (
    <div className='App'>
      <Example className='navbar' />
      <div className='Top-half'>
        <header className='App-header'>
          <script
            src='https://accounts.google.com/gsi/client'
            async
          ></script>

          <p>
            Find your
            <br></br>
            dance home
          </p>

          {/* <img
            src={dancingFromFront}
            alt='Dance from Front'
          ></img>
          <img
            src={dancingBehind}
            alt='Dance from Behind'
          ></img>
          <img
            src={danceStudio}
            alt='Dance Studio'
          ></img> */}
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            <button
              type='button'
              className='btn btn-dark'
            >
              Book Now
            </button>

            <div
              id='g_id_onload'
              data-client_id='1089560604265-bkub8a3bfn687c4j5oiaaeacqnb0f2kf.apps.googleusercontent.com'
              data-context='signin'
              data-ux_mode='popup'
              data-login_uri='http://localhost:3000'
              data-auto_prompt='false'
            ></div>

            <div
              class='g_id_signin'
              data-type='standard'
              data-shape='rectangular'
              data-theme='outline'
              data-text='signin_with'
              data-size='large'
              data-logo_alignment='left'
            ></div>
          </a>
          <p>Returning? Click here to log in.</p>
        </header>
      </div>
      <div className='shortBlurb'>
        <img
          src={photos[currentPhotoIndex]}
          className='App-logo'
          alt='logo'
        />
        <button
          onClick={handlePreviousPhoto}
          className='btn btn-dark'
        >
          Previous
        </button>
        <button
          onClick={handleNextPhoto}
          className='btn btn-dark'
        >
          Next
        </button>
      </div>

      <div
        id='carouselExampleIndicators'
        class='carousel slide'
        data-ride='carousel'
      >
        <ol class='carousel-indicators'>
          <li
            data-target='#carouselExampleIndicators'
            data-slide-to='0'
            class='active'
          ></li>
          <li
            data-target='#carouselExampleIndicators'
            data-slide-to='1'
          ></li>
          <li
            data-target='#carouselExampleIndicators'
            data-slide-to='2'
          ></li>
        </ol>
        <div class='carousel-inner'>
          <div class='carousel-item active'>
            <img
              class='d-block w-100'
              src='...'
              alt='First slide'
            />
          </div>
          <div class='carousel-item'>
            <img
              class='d-block w-100'
              src='...'
              alt='Second slide'
            />
          </div>
          <div class='carousel-item'>
            <img
              class='d-block w-100'
              src='...'
              alt='Third slide'
            />
          </div>
        </div>
        <a
          class='carousel-control-prev'
          href='#carouselExampleIndicators'
          role='button'
          data-slide='prev'
        >
          <span
            class='carousel-control-prev-icon'
            aria-hidden='true'
          ></span>
          <span class='sr-only'>Previous</span>
        </a>
        <a
          class='carousel-control-next'
          href='#carouselExampleIndicators'
          role='button'
          data-slide='next'
        >
          <span
            class='carousel-control-next-icon'
            aria-hidden='true'
          ></span>
          <span class='sr-only'>Next</span>
        </a>
      </div>

      <Footer />
    </div>
  );
}

export default App;
