import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Example from "./navbar.js";
import Footer from "./footer.js";
import photo1 from "./dancingFromBehind.jpg";
import photo2 from "./dancingFront.jpg";
import photo3 from "./pictureOfDanceStudio.jpg";

const photos = [photo1, photo2, photo3];

// const dancingFromFront = require("./dancingFront.jpg");
// const dancingBehind = require("./dancingFromBehind.jpg");
// const danceStudio = require("./pictureOfDanceStudio.jpg");

function App() {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const handleNextPhoto = () => {
    setCurrentPhotoIndex((prevIndex) =>
      prevIndex === photos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePreviousPhoto = () => {
    setCurrentPhotoIndex((prevIndex) =>
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className='App'>
      <Example className='navbar' />
      <div className='Top-half'>
        <header className='App-header'>
          <p>Two Car Studio</p>
          <p id='paragraph' className='multi-line'>
            At our dance studio, we prioritize the safety and creativity of our
            dancers. You can now reserve your preferred studio time and enjoy a
            secure and inspiring space to practice and create.
          </p>
          {/* <img src={dancingFromFront} alt='Dance from Front'></img>
          <img src={dancingBehind} alt='Dance from Behind'></img>
          <img src={danceStudio} alt='Dance Studio'></img> */}
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            <button type='button' className='btn btn-dark'>
              View Available Times
            </button>
          </a>
        </header>
      </div>
      <div className='shortBlurb'>
        <img src={photos[currentPhotoIndex]} className='App-logo' alt='logo' />
        <button onClick={handlePreviousPhoto} className='btn btn-dark'>
          Previous
        </button>
        <button onClick={handleNextPhoto} className='btn btn-dark'>
          Next
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default App;
