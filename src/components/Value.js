import React from 'react'
import Photo2 from '../../src/MyPost2.png';
import photo3 from '../../src/MyPost1.png'; 

const Value = ()=>{
    return(
        <div id="value" className="value">
            <div className="description-div">
                <div className="headers-div">
                    <h1>UNRIVALED VALUE</h1>
                    <h4>meet your aspirations </h4>
                    <p className="div-para">What sets us apart is simple—we truly believe in providing the easiest, most effortless event planning to each of our clients while remaining budget-conscious and providing delicious catering. Whether you are hosting a wedding, corporate function or social event, our coordinators will make sure that you are confident in and proud of every second of the celebration.</p>
                </div>
            </div>
            <div className="image-div-animations">
                        <img className="pic-adjustment1" src={Photo2} alt="not working"/>
            </div>
        </div>
    )
}
export default Value;