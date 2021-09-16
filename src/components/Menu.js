import React,{useState, useEffect} from 'react';
import axios from 'axios';
// import MenuCard from './MenuCard.js';
import {Card,Button,Col, Row} from 'react-bootstrap';
import '../styling/Menu.css';

const Menu = () =>{
    const [items, setItems]= useState([])
  
    useEffect(()=>{
        axios
        .get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
          .then(res=>{
            console.log('itemlistttttttt: ', res.data)
            setItems(res.data.drinks)
          })
      },[])
    return(
      <div className="main-gallery-box">
        {/* <h1 className="box-gallery-name-div"> Modesto Jello Cakes Gallery </h1> */}
        {items.map((n, key)=>{
                return(
                    <div className="card-container" key={n.idDrink}>
                      
                      <img className="gallery-image" src={n.strDrinkThumb} alt="this mean its not working"/>
                        <h1 className="name-title">{n.strDrink}</h1>
                        <p>
                          {n.strInstructions}
                        </p>
                        </div>
                )
            }    
            )}
     </div>
    )
}
export default Menu;
