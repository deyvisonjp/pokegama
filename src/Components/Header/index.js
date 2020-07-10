import React from "react";

import "./style.css";
import pokebola from "../../assets/pokebola.png";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";


export default function Header() {
   return (
      <header>
         <h1> PokéGama </h1>
         <div className="pesquisa">
            <input type="text" className="txtBusca" placeholder="Pesquisar..." />
            <button className="btnBusca" > <img src={pokebola} alt="pokebola buscar"/> </button>
         </div>
         <nav className="nav_links">
            <a target='_blank' href="https://github.com/deyvisonjp" className="cta"> <img width="45px" src={github}/></a>
            <a target='_blank' href="https://www.linkedin.com/in/deyvisonjpaula/" className="cta"> <img width="45px" src={linkedin}/></a>
         </nav>
      </header>
   )
}