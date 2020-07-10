import React, { useState, useEffect } from 'react';

import './style.css'

const Cart = ({ resetarCarrinho, pokemons }) => {
   const [pokemonsList, setPokemonsList] = useState([])
   const [totalCompras, setTotalCompras] = useState(0)
   const [modalIsOpen, setIsOpen] = useState(false);

   useEffect(() => {
      setPokemonsList(pokemons)
   }, [pokemons])

   useEffect(() => {
      const total = pokemonsList.reduce((acumulador, valorAtual) => (
         acumulador += valorAtual.price
      ), 0)

      setTotalCompras(total)
   }, [pokemonsList])

   return (
      <div className="carrinho">
         <h1>Carrinho PokéGama</h1>
         {
            pokemonsList.map(pokemon => (
               <div className="itemCarrinho">
                  <div className="">
                     <img
                        src={pokemon.imgUrl}
                        alt="Pokemon imagem"
                        width='40px'
                        height='40px'
                     />
                  </div>
                  <div>  <h3>{pokemon.name}</h3> </div>
                  <div className="">
                     <p>R$ {pokemon.price}</p>
                  </div>
               </div>
            ))
         }

         <div className="">
            <div className="total">
               <p>Total</p>
            </div>
            <div className="">
               <p>{totalCompras.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
            </div>
         </div>
         <div className="">
            <div className="">
               <button
                  // onClick={openModal}
                  type='submit'
               >FINALIZAR</button>
            </div>
         </div>

      </div>
   )
}


export default Cart;