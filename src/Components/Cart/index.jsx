import React from 'react';

import './style.css'
import imgCompra from "../../assets/carrinho.png";

const Cart = ( pokemon ) => {
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