import React, { ChangeEvent, useState } from "react"
import { useGetPatients } from "../../hooks/useGetPatients"
import { Card } from "../../shared/components/Card"
import { Header } from "../../shared/components/Header"
import { IData } from "../../shared/interfaces"
import { deletePatient, inactivePatient } from "../../shared/services/localstore"

import './home.css'


export const HomePage:React.FC=()=>{

    const {patients,setPatients,noPatients}=useGetPatients()

    const [filter,setFilter]=useState('')
    let dataFilter :IData[]=patients.filter(item =>item.nome.toLocaleLowerCase().includes(filter))

    function handleCardID(id:number,nome:string,nascimento:string,cpf:string,endereco:string,sexo:string){
        let patient={
            id:id,nome:nome,
            nascimento:nascimento,
            cpf:cpf,
            sexo:sexo,
            endereco:endereco,
            status:"inativo"
        }
             inactivePatient(patients,id,patient,setPatients)   
    }  

    async function handleCardDelete(id:number){
           const result=await deletePatient(patients,id)   
           setPatients(result)
    }

    return(
        <>
        <Header content_link="Cadastrar paciente" link="/register"/>
        <main className="main">

        <section id="filter">
            <input type="text" id="filter-input" placeholder="Pesquise um paciente" value={filter} 
            onChange={(e:ChangeEvent<HTMLInputElement>)=>{
                setFilter(e.target.value)
            }}/>
        </section>

        <section className="section-cards">

            {noPatients && (
                <div>
                    <h1>Não há pacientes registrados</h1>
                </div>
            )}

        {dataFilter?.map((patient)=>{  
            
                if(patient.status ==="inativo"){
                    return(
                        <Card  key={ patient.id} nome={patient.nome} 
                        cpf={patient.cpf} endereco={patient.endereco} 
                        sexo={patient.sexo} id={patient.id} 
                        nascimento={patient.nascimento} status={patient.status}
                        buttons="close-buttons" card_background="background-inative"
                        color_text="text_red" visibility="block"
                        delete_patient={()=>handleCardDelete(patient.id)}
                        inactivate_patient={()=>{handleCardID(patient.id,patient.nome,patient.nascimento,patient.cpf,patient.endereco,patient.sexo)}}
                    />
                    )
                }
                     return(
                        <Card  key={ patient.id} nome={patient.nome} 
                        cpf={patient.cpf} endereco={patient.endereco} 
                        sexo={patient.sexo} id={patient.id} 
                        nascimento={patient.nascimento} status={patient.status}
                        inactivate_patient={()=>{handleCardID(patient.id,patient.nome,patient.nascimento,patient.cpf,patient.endereco,patient.sexo)}}/>
            )
        })}   
        </section>
        </main>
        </>
    )

}