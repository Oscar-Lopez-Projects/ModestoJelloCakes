import React from 'react'
import Yolanda from "../yolanda.jpg";
import Oscar from '../oscar.JPG';
const Team = () =>{
    return(
        <div id="team">
            <h1 className="team-meeting">MEET OUR TEAM </h1>
            <div className="team-players-card">
                <div className="texs">
                    <img className="cover-img" src={Yolanda} alt="not working pic"/>
                </div>
                
                <div className="team-des">
                <h1>Yolanda Torres</h1>
                <p className="team-title">Artist Baker & Event Planner</p>
                <p className="para-team">
                I've provided an answer, but FWIW, as a programmer myself, I don't know if I would call that code inert or a dummy series. It sounds useful to me. Dummy code, in my mind, is code that will never be executed. It has no purpose. This at least serves some function, even if the user doesn't see it.
                </p>

                </div>
            
            </div>
            <div className="team-players-card">
                <div className="texs">
                    <img className="cover-img" src={Oscar} alt="not working pic"/>
                </div>
                
                <div className="team-des">
                <h1>Oscar Ivan Mateos</h1>
                <p className="team-title">Software Engineer & Share Holder</p>
                <p className="para-team">
                I've provided a answer, but FWIW, as a programmer myself, I don't know if I would call that code inert or a dummy series. It sounds useful to me. Dummy code, in my mind, is code that will never be executed. It has no purpose. This at least serves some function, even if the user doesn't see it.
                </p>
                </div> 
            </div>

        </div>
    )
}
export default Team;