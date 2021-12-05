import React,{useState, useEffect} from 'react';
import axios from 'axios';
// import MenuCard from './MenuCard.js';
import '../styling/Menu.css';
import FlipCard from './FlipCard';
import NavBar from './NavBar';
import Footer from './Footer';



const Menu = () =>{
    const [items, setItems]= useState([]);
    useEffect(()=>{
        axios
        .get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka")
          .then(res=>{
            console.log('itemlistttttttt: ', res.data)
            setItems(res.data.drinks)
          })
      },[])
    return( 
      <>
      <div className="flipcard">
        {items.map((card, key)=>{
          return(
            <FlipCard card={card}/>
          )
        })}

      </div>
      </>
      //   <div className="main-gallery-box">
      //     {items.map((n, key)=>{
      //             return(
      //                   <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      //                       <div className="card-container" onMouseEnter={() => setIsFlipped((prev) => !prev)} key={n.idDrink}>
      //                         <img className="gallery-image" src={n.strDrinkThumb} alt="this mean its not working"/>
      //                           <h1 className="name-title">{n.strDrink}</h1>
      //                       </div>
      //                       <div onMouseLeave={() => setIsFlipped((prev) => !prev)}>
      //                         <p>I've provided an answer, but FWIW, as a programmer myself,
      //                         I don't know if I would call that code inert or a dummy series.
      //                           It sounds useful to me. Dummy code, in my mind, is code that
      //                           will never be executed. It has no purpose. This at least
      //                             serves some function, even if the user doesn't see it.</p>
      //                       </div>
      //                   </ReactCardFlip>
                
      //             )
      //         }    
      //         )}
      // </div>      
    )
}
export default Menu;
