import React from "react";

import './style.css'

function Card({ pokemon }) {
   let price = (pokemon.base_experience * 0.2).toFixed(2)

   return (
      <div className="card">
         <div className="cardImg">
            <img width="140px" src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`} alt={pokemon.name} />
         </div>
         <div className="cardName">
            <h3>{pokemon.name}</h3>
         </div>
         <div className="cardTypes">
            {pokemon.types.map(type => {
               return (
                  <div className="cardType">
                     {type.type.name}
                  </div>
               )
            })}
         </div>
         <div className="cardInfo">
            <p> Experiência - {pokemon.base_experience} </p>
         </div>
         <div className="cardPrice">
            <h4> R$ {price}</h4>
         </div>
         <button className="cardButton">Comprar</button>
      </div>
   )
}

export default Card;