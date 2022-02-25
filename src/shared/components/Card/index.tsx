import React from "react";
import { IData } from "../../interfaces";

import './card.css'


export const Card:React.FC<IData>=({id,nome,sexo,cpf,endereco,status,nascimento})=>{

    return(
        <div id="card">
            <div className="card-header">
                <h3>Paciente #{id}</h3>
            </div>
            <div className="card-content">
                <div>
                    <p className="text">Nome: {nome}</p>
                    <p className="text">Nascimento: {nascimento}</p>
                </div>
                <div>
                    <p className="text">CPF:{cpf}</p>
                    <p className="text">Sexo: {sexo}</p>
                </div>
                <div>
                    <p className="text">Endereço: {endereco}</p>
                    <p className="text">Status: {status}</p>
                </div>
                <div id="buttons">
                    <button id="button-edit">Editar</button>
                    <button id="button-inactive">Inativo</button>
                </div>
            </div>
        </div>
    )

} 