import React from 'react';
import '../styling/HomeDiv.css';
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
      <h1 style={{textAlign:"center", marginTop:"50px", marginBottom:"50px", margin:"0 auto", width:"70vw", color:"#3c72a3",fontWeight:"bold"}}>HOW TO PLACE AN ORDER ONLINE</h1>
        <div className='process-home-div'>
          <div className='steps-to-order'>
            <img className='steps-design-adjustment' src={stepone} />
            <p className='process-para-bold'> GO TO THE GALLERY</p>
          </div>
          <div className='arrow-steps'>
            <img className='pink-arrow' src={rightarrow} />
          </div>
          <div className='steps-to-order'>
            <img className='steps-design-adjustment' src={steptwo} />
            <p className='process-para-bold'>BROWSE YOUR DESIRE CAKE SHAPE & PRESS DETAILS</p>
          </div>
          <div className='arrow-steps'>
            <img className='pink-arrow' src={rightarrow} />
          </div>
          <div className='steps-to-order'>
            <img className='steps-design-adjustment' src={stepthree} />
            <p className='process-para-bold'>WRITE DOWN OR COPY SHAPE NUMBER</p>
          </div>
          <div className='arrow-steps'>
            <img className='pink-arrow' src={rightarrow} />
          </div>
          <div className='steps-to-order'>
            <img className='steps-design-adjustment' src={stepfour} />
            <p className='process-para-bold'>GO TO PLACE AN ORDER</p>
          </div>
          <div className='arrow-steps'>
            <img className='pink-arrow' src={rightarrow} />
          </div>
          <div className='steps-to-order'>
            <img className='steps-design-adjustment' src={stepfive} />
            <p className='process-para-bold'>FILL OUT INFORMATION</p>
          </div>
          <div className='arrow-steps'>
            <img className='pink-arrow' src={rightarrow} />
          </div>
          <div className='steps-to-order'>
            <img className='steps-design-adjustment' src={stepsix} />
            <p className='process-para-bold'> SUBMIT AND WE WILL REACH OUT</p>
          </div>
        
        </div>
        </>

        /*STEP 1: GO TO THE GALLERY.
STEP 2: BROWSE YOUR DESIRE CAKE SHAPE & PRESS DETAILS
STEP 3: WRITE DOWN OR COPY SHAPE NUMBER
STEP 4: GO TO PLACE AN ORDER
STEP 5: FILL OUT INFORMATION
STEP 6: SUBMIT AND WE WILL REACH OUT. */
    )
}
export default HomeDiv;