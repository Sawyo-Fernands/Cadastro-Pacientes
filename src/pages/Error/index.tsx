import React from "react";
import { Link } from "react-router-dom";
import './error.css'

import errorIMG from '../../shared/assets/notfound.png'

export const Error=()=>{
    return(
       <div className="container-error">
           <img src={errorIMG} alt="notfound" />
           <h1>Página não encontrada !</h1>
           <Link to="/" className="button-home">Voltar para Home</Link>
       </div>
    )
}