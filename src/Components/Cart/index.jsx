import React from 'react';

import './style.css'

const Cart = ( pokemons, handleBuy ) => {
   return (
      <div className="carrinho">
         <h1> <img width="35px" src={pokemon.image} /> Carrinho  </h1>
         <div className="productSale"> {pokemon.name} </div>
         <div className="total"> {pokemon.price} </div>
         <button>FINALIZAR</button>
      </div>
   )
}

export default Cart;