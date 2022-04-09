import React, { useEffect } from 'react';
import '../styling/ThreeDCaro.css';
import '../components/rotateCarousel.js';



const ThreeDCaro = ()=>{
  useEffect(()=>{
    var carousel = document.querySelector('.carousel');
    var cellCount = 9;
    var selectedIndex = 0;
    
    function rotateCarousel() {
      var angle = selectedIndex / cellCount * -360;
      carousel.style.transform = 'translateZ(-288px) rotateY(' + angle + 'deg)';
    }
    
    var prevButton = document.querySelector('.previous-button');
    prevButton.addEventListener( 'click', function() {
      selectedIndex--;
      rotateCarousel();
    });
    
    var nextButton = document.querySelector('.next-button');
    nextButton.addEventListener( 'click', function() {
      selectedIndex++;
      rotateCarousel();
    });
  });
   
    return(
        <>
        <div class="scene">
            <div class="carousel">
                <div class="carousel__cell">1</div>
                <div class="carousel__cell">2</div>
                <div class="carousel__cell">3</div>
                <div class="carousel__cell">4</div>
                <div class="carousel__cell">5</div>
                <div class="carousel__cell">6</div>
                <div class="carousel__cell">7</div>
                <div class="carousel__cell">8</div>
                <div class="carousel__cell">9</div>
            </div>
        </div>
        <p>
            <button class="previous-button">Previous</button>
            <button class="next-button">Next</button>
        </p>
        </>
    )
}
export default ThreeDCaro;