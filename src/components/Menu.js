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
    )
}
export default Menu;
