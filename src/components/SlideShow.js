import React, {useState} from 'react';
import '../styling/SlideShow.css';
import {Carousel} from 'react-bootstrap';
import Photo1 from '../../src/MyPost.png';
import Photo2 from '../../src/MyPost2.png';
import photo3 from '../../src/MyPost1.png';
import HomeDiv from './HomeDiv';


const Slide = () =>{
  return(
    <div className="slide-box-div">
     <Carousel fade={true}  variant="dark" indicators={null} >
  <Carousel.Item interval={2100}>
    <img
     className="slideshow"
      src={Photo1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={2100}>
    <img
     className="slideshow"
      src={Photo2}
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={2100}>
    <img
      className="slideshow"
      src={photo3}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
  );
};
export default Slide;