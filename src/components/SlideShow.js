import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../styling/SlideShow.css';
import Photo1 from '../../src/MyPost.png';
import Photo2 from '../../src/MyPost2.png';
import photo3 from '../../src/MyPost1.png';
const SlideShow = ()=>{
    const settings = {
        dots: false,
        arrows:true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        swipeToSlide: true,
        
        responsive:[
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
    return(
        <div>
          <Slider className='slide-div' {...settings}>
          <div className='slide-boxes'>
            <img className='box-images' src={photo3} />
          </div>
          <div className='slide-boxes'>
          <img className='box-images' src={Photo2} />
          </div>
          <div className='slide-boxes'>
          <img className='box-images' src={Photo1} />
          </div>
          <div className='slide-boxes'>
          <img className='box-images' src={photo3} />
          </div>
          <div className='slide-boxes'>
          <img className='box-images' src={Photo2} />
          </div>
          <div className='slide-boxes'>
          <img className='box-images' src={Photo1} />
          </div>
          <div className='slide-boxes'>
          <img className='box-images' src={photo3} />
          </div>
          <div className='slide-boxes'>
          <img className='box-images' src={Photo2} />
          </div>
          <div className='slide-boxes'>
          <img className='box-images' src={Photo1} />
          </div>


          </Slider>

        
        </div>
    )
}
export default SlideShow;