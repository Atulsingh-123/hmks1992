import React from 'react';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import ngo1 from '../assets/ngo1.jpg';
import ngo2 from '../assets/ngo2.jpg';
import ngo3 from '../assets/ngo3.jpg';

// Images for the slides
const images = [
  [ngo1, ngo2], // First slide with two images
  [ngo3, ngo1], // Second slide with two images
  [ngo2, ngo3], // Third slide with two images
];

const Slideshow = () => {
  return (
    <div className="slide-container" style={{ maxHeight: '400px', overflow: 'hidden', position: 'relative' }}>

      {/* Automatic Slideshow with Zoom Effect */}
      <Zoom scale={0.4} autoplay={true} duration={3000} pauseOnHover={false}>
        {images.map((slideImages, index) => (
          <div
            key={index}
            style={{
              display: 'flex', // Display images side by side
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              height: '100%',
            }}
          >
            {slideImages.map((each, subIndex) => (
              <img
                key={subIndex}
                style={{
                  width: '50%', // Each image will take up half of the container width
                  height: '100%', // Ensures the image fills the height
                  objectFit: 'cover', // Adjusts how the image fits within the container
                }}
                src={each}
                loading="lazy"
                alt={`slide-${index}-${subIndex}`}
              />
            ))}
          </div>
        ))}
      </Zoom>
    </div>
  );
};

export default Slideshow;
