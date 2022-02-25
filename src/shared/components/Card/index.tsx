import React from "react";

import './card.css'

export const Card:React.FC=()=>{

    return(
        <div id="card">
            <div className="card-header">
                <h3>Paciente #23342424</h3>
            </div>
            <div className="card-content">
                <div>
                    <p className="text">Nome:Sawyo fernands Silva Carvalho</p>
                    <p className="text">Nascimento:31/05/2003</p>
                </div>
                <div>
                    <p className="text">CPF:61336436336</p>
                    <p className="text">Sexo:masculino</p>
                </div>
                <div>
                    <p className="text">Endereço:Rua gustavo Barosso sao luis MA</p>
                    <p className="text">Status: Ativo</p>
                </div>
                <div id="buttons">
                    <button id="button-edit">Editar</button>
                    <button id="button-inactive">Inativo</button>
                </div>
            </div>
        </div>
    )

}