import React, { useState, useEffect } from 'react';
import Modal from 'react-modal'

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

   Modal.setAppElement('#root')


   function openModal() {
      setIsOpen(true);
   }

   function afterOpenModal() {
   }

   function closeModal() {
      resetarCarrinho()
      setIsOpen(false);
   }

   const customStyles = {
      content: {
         top: '50%',
         left: '50%',
         right: 'auto',
         bottom: 'auto',
         marginRight: '-50%',
         transform: 'translate(-50%, -50%)',
         textAlign: 'center',
      }, overlay: {
         backgroundColor: 'rgb(18, 81, 131)'
      },
   };

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
                     <p>{pokemon.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</p>
                  </div>
               </div>
            ))
         }

         <Modal
            style={customStyles}
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Modal para conclusão da compra"
            onAfterOpen={afterOpenModal}
         >
            <div className="divModal">
               <h1>PokéGama</h1>
               <h2>Agradece sua compra</h2>
               <h2>{totalCompras.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</h2>
               <button className="cardButton" onClick={closeModal}>Concluir</button>
            </div>
         </Modal>

         <div className="">
            <div className="total">
               <p>Total</p>
            </div>
            <div className="">
               <p>{totalCompras.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</p>
            </div>
         </div>
         <div className="">
            <div className="">
               <button className="cardButton"
                  onClick={openModal}
                  type='submit'
               >FINALIZAR</button>
            </div>
         </div>

      </div>
   )
}


export default Cart;