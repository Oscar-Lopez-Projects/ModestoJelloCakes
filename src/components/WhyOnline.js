import React from 'react';
import '../styling/WhyOnline.css';
import fiveimage from '../final5back14.png';
import Benefits from './Benefits';
import Slider from 'react-slick';
import SlideShow from './SlideShow';

const WhyOnline = ()=>{
    return(
        <>
        <div className="whywhy">
            <div className='loyalty-program'>
                <div className='program-div'>
                <div className='rewards-title'>Modesto Jello Cakes just got even better!</div>
                    <p className='para-rewards'>New! Members get 5% back in ExtraBucks Rewards® even faster.* Enjoy a new birthday treat, too.</p>
                    <p className='para-rewards-bold'>To join ExtraCare, start by creating an account.</p>
                    <div className='rewards-buttons'>
        
                        <button className='reward-button'>Create an account</button>
                    
                        <button className='reward-button'>Sign in</button>
                    
                </div>
                </div>
                
            </div>
            <div className='five-percent-image'>
                <img src={fiveimage} className='five-img' alt="5-percent-image"/>
            </div>
        </div>
        <SlideShow />
        <Benefits />
        </>
    )
}
export default WhyOnline;