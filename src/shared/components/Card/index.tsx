import React from "react";
import { Link } from "react-router-dom";
import { IData } from "../../interfaces";

import './card.css'

interface ICard extends IData{
    
    buttons?:string;
    card_background?:string;
    color_text?:string;
    visibility?:string;

    inactivate_patient:()=>void;
    delete_patient?: () => void;

}


export const Card=(props:ICard)=>{

    return(
        <div id="card" className={`${props.card_background}`}>
            <div className="card-header">
                <h3>Paciente #{props.id}</h3>
            </div>
            <div className="card-content" >
                <div>
                    <p className="text">Nome: {props.nome}</p>
                    <p className="text">Nascimento: {props.nascimento}</p>
                </div>
                <div>
                    <p className="text">CPF:{props.cpf}</p>
                    <p className="text">Sexo: {props.sexo}</p>
                </div>
                <div>
                    <p className="text">Endereço: {props.endereco}</p>
                    <p className={`text ${props.color_text}`}>Status: {props.status}</p>
                </div>
                <div id="buttons">
                    <Link to={{pathname:`/edit/${props.id}`}}>
                    <button id="button-edit" className={`${props.buttons}`}>Editar</button>
                    </Link>
                    <button id="button-inactive" 
                    className={`${props.buttons}`} onClick={()=>props.inactivate_patient()}
                    >Inativo</button>
                    <button className={`delete-item ${props.visibility}`} onClick={props.delete_patient}>Deletar</button>
                </div>
            </div>
        </div>
    )

} 