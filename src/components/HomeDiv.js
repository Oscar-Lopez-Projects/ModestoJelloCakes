import React from 'react';
import '../styling/HomeDiv.css';
import '../styling/HomeDivTwo.css';
import stepone from '../stepone.png';
import steptwo from '../steptwo.png';
import stepthree from '../stepthree.png';
import stepfour from '../stepfour.png';
import rightarrow from '../right-arrow.png';
import stepfive from '../stepfive.png';
import stepsix from '../stepsix.png';

const HomeDiv = ()=>{
    return(
      <>
      
      <div class="separatorr">
                <div class="linee"></div>
                    <h3 className='separator-title' style={{color:"#3c72a3",fontWeight:"bold"}}>HOW TO PLACE AN ORDER</h3>
            <div class="linee"></div>
            </div>
      
        <div className='process-home-div'>
        
          <div className='steps-to-order'>
            <img className='steps-design-adjustment' src={stepone} />
            <p className='process-para-bold'> GO TO THE GALLERY</p>
          </div>
          <div className='arrow-steps1'>
            <img className='pink-arrow' src={rightarrow} />
          </div>
          <div className='steps-to-order'>
            <img className='steps-design-adjustment' src={steptwo} />
            <p className='process-para-bold'>CHOOSE DESIRED CAKE SHAPE & PRESS DETAILS</p>
          </div>
          <div className='arrow-steps2'>
            <img className='pink-arrow' src={rightarrow} />
          </div>
          <div className='steps-to-order'>
            <img className='steps-design-adjustment' src={stepthree} />
            <p className='process-para-bold'>WRITE DOWN OR COPY SHAPE NUMBER</p>
          </div>
          <div className='arrow-steps3'>
            <img className='pink-arrow' src={rightarrow} />
          </div>
          <div className='steps-to-order'>
            <img className='steps-design-adjustment' src={stepfour} />
            <p className='process-para-bold'>GO TO PLACE AN ORDER</p>
          </div>
          <div className='arrow-steps4'>
            <img className='pink-arrow' src={rightarrow} />
          </div>
          <div className='steps-to-order'>
            <img className='steps-design-adjustment' src={stepfive} />
            <p className='process-para-bold'>FILL OUT INFORMATION</p>
          </div>
          <div className='arrow-steps5'>
            <img className='pink-arrow' src={rightarrow} />
          </div>
          <div className='steps-to-order'>
            <img className='steps-design-adjustment' src={stepsix} />
            <p className='process-para-bold'> SUBMIT AND WE WILL REACH OUT</p>
          </div>
        
        </div>
        </>
    )
}
export default HomeDiv;