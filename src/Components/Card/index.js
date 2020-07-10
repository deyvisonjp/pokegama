import React from "react";

import './style.css'

function Card({ pokemon, buyPokemonFunction }) {
   let img = `https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`;
   let price = (pokemon.base_experience * 0.2);
   var priceReal = price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

   return (
      <div className="card">
         <div className="cardImg">
            <img width="140px" src={img} alt={pokemon.name} />
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
            <h4>{priceReal}</h4>
         </div>
         <button type='submit' className="cardButton" onClick={() => {
            buyPokemonFunction({
               imgUrl: img,
               name: pokemon.name,
               price: price
            })
         }}> Comprar</button>
      </div>
   )
}

export default Card;