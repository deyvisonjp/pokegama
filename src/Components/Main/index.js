import React, { useState, useEffect } from "react";
import { getAllPokemon, getPokemon } from '../../services/pokemon';

import Card from "../Card/index"
import Cart from '../Cart/index.jsx';

import "./style.css";

export default function Main() {

   const [pokemonData, setPokemonData] = useState([]);
   const [nextUrl, setNextUrl] = useState('');
   const [prevUrl, setPrevUrl] = useState('');
   const [loading, setLoading] = useState(true);
   const pokeUrl = 'https://pokeapi.co/api/v2/pokemon';

   useEffect(() => {
      async function fetchData() {
         let response = await getAllPokemon(pokeUrl);
         setNextUrl(response.next);
         setPrevUrl(response.previous);
         let pokemon = await loadingPokemon(response.results)
         setLoading(false);
      }
      fetchData();
   }, []);

   const next = async () => {
      setLoading(true);
      let data = await getAllPokemon(nextUrl);
      await loadingPokemon(data.results);
      await loadingPokemon(data.results);
      setNextUrl(data.next);
      setPrevUrl(data.previous);
      setLoading(false);
   }

   const prev = async () => {
      if (!prevUrl) return;
      setLoading(true);
      let data = await getAllPokemon(prevUrl);
      await loadingPokemon(data.results);
      await loadingPokemon(data.results);
      setNextUrl(data.next);
      setPrevUrl(data.previous);
      setLoading(false);
   }

   const loadingPokemon = async data => {
      let _pokemonData = await Promise.all(
         data.map(async pokemon => {
            let pokemonRecord = await getPokemon(pokemon.url);
            return pokemonRecord;
         })
      );

      setPokemonData(_pokemonData)
   }

   return (
      <main>
         {
            loading ? <h1 className="loading">Carregando . . .</h1> : (
               <>
                  <div>
                     <div className="btn">
                        <button onClick={prev}>Anterior</button> <button onClick={next}>Próximo</button>
                     </div>
                     <div className="grid-container">
                        {pokemonData.map((pokemon, i) => {
                           return <Card key={i} pokemon={pokemon} />
                        })}
                     </div>
                     <div className="btn">
                        <button onClick={prev}>Anterior</button> <button onClick={next}>Próximo</button>
                     </div>
                  </div>
                  <Cart />
               </>
            )
         }
      </main>
   );
}