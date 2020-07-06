import React from "react";

import "./style.css";
import pokebola from "../../assets/pokebola.png"

export default function Header() {
   return (
      <header>
         {/* https://www.youtube.com/watch?v=LQHcpGj1pjc */}
         <h1> PokéGama </h1>
         <div className="pesquisa">
            <input type="text" className="txtBusca" placeholder="Pesquisar..." />
            <button className="btnBusca" > <img src={pokebola} alt="pokebola buscar"/> </button>
         </div>
         <nav className="nav_links">
            <a href="" className="cta"><button>Login</button></a>
            <a href="" className="cta"><button>Carrinho</button></a>
         </nav>
      </header>
   )
}