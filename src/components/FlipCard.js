import React,{useState} from 'react'
import ReactCardFlip from 'react-card-flip'

const FlipCard = ({card}) => {
    const [isFlipped, setIsFlipped] = useState(false);
   
    return(
        <ReactCardFlip isFlipped={isFlipped}>
             <div className="front" >
                <img className="gallery-image" src={card.strDrinkThumb} alt="not working"/>
                <h1 className="title-gallery"> {card.strDrink} </h1>
                <button className="flip-button" onClick={() => setIsFlipped((prev) => !prev)}>Details</button>
            </div>
        <div className="back">
                <p> I've provided an answer, but FWIW, as a programmer myself,
                               I don't know if I would call that code inert or a dummy series.
                                It sounds useful to me. Dummy code, in my mind, is code that
                                will never be executed. It has no purpose. This at least</p>
                <button className="flip-button" onClick={() => setIsFlipped((prev) => !prev)}>Picture</button>
        </div>
        </ReactCardFlip>
    )}

export default FlipCard