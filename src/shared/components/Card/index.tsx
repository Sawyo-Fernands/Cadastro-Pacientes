import React from "react";
import { Link } from "react-router-dom";

import './card.css'

interface ICard{
    id: number;
    nome:string;
    nascimento:string;
    cpf:string;
    sexo:string;
    endereco:string;
    status:string;
    buttons?:string;
    card_background?:string;
    color_text?:string;
    visibility?:string;

    inactivate_patient:()=>void;
    delete_patient?: () => void;

}


export const Card:React.FC<ICard>=({id,nome,sexo,cpf,endereco,status,nascimento,buttons,card_background,inactivate_patient,color_text,visibility,delete_patient})=>{

    

    return(
        <div id="card" className={`${card_background}`}>
            <div className="card-header">
                <h3>Paciente #{id}</h3>
            </div>
            <div className="card-content" >
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
                    <p className={`text ${color_text}`}>Status: {status}</p>
                </div>
                <div id="buttons">
                    <Link to={{pathname:`/edit/${id}`}}>
                    <button id="button-edit" className={`${buttons}`}>Editar</button>
                    </Link>
                    <button id="button-inactive" 
                    className={`${buttons}`} onClick={()=>inactivate_patient()}
                    >Inativo</button>
                    <button className={`delete-item ${visibility}`} onClick={delete_patient}>Deletar</button>
                </div>
            </div>
        </div>
    )

} 