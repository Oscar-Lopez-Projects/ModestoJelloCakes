import React from "react";
import Photo1 from '../../src/MyPost.png';
import Photo2 from '../../src/MyPost2.png';
import photo3 from '../../src/MyPost1.png';

const MovingPics = ()=>{
    return(
        <div className="next-div-2">
            <div className="moving-top">
                <div className="coming-from-left">
                    <img className="piz" src={photo3} alt="not working" />
                    <img className="piz" src={Photo1} alt="not working"/>
                    <img className="piz" src={Photo2} alt="not working"/>
                </div>
                <div className="coming-from-right">
                    <img className="piz" src={photo3} alt="not working"/>
                    <img className="piz" src={Photo2} alt="not working"/>
                    <img className="piz" src={photo3} alt="not working"/>
                </div>
                
            </div>
            <div className="moving-bottom">
                <div className="coming-from-left">
                        <img className="piz" src={photo3} alt="not working" />
                        <img className="piz" src={Photo1} alt="not working"/>
                        <img className="piz" src={Photo2} alt="not working"/>
                    </div>
                    <div className="coming-from-right">
                        <img className="piz" src={photo3} alt="not working"/>
                        <img className="piz" src={Photo2} alt="not working"/>
                        <img className="piz" src={photo3} alt="not working"/>
                    </div>
            </div>
        </div>
    )
}
export default MovingPics;