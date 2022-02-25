import React, { ChangeEvent, useEffect, useState } from "react"
import { useGetPatients } from "../../hooks/useGetPatients"
import { Card } from "../../shared/components/Card"
import { Header } from "../../shared/components/Header"

import './home.css'


export const HomePage:React.FC=()=>{

    const {patients}=useGetPatients()


    const [filter,setFilter]=useState('')

    let dataFilter=patients.filter(item =>item.nome.toLocaleLowerCase().includes(filter))

    function handleCardID(id:number){
        console.log(id)

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

        {dataFilter?.map((patient)=>{
                
                if(patient.status ==="inativo"){
                    return(
                        <Card  key={ patient.id} nome={patient.nome} 
                    cpf={patient.cpf} endereco={patient.endereco} 
                    sexo={patient.sexo} id={patient.id} 
                    nascimento={patient.nascimento} status={patient.status}
                    buttons="close-buttons" card_background="background-inative"
                    inactivate_patient={()=>{handleCardID(patient.id)}}
                    />
                    )
                }
            return(
                
                <Card  key={ patient.id} nome={patient.nome} 
                cpf={patient.cpf} endereco={patient.endereco} 
                sexo={patient.sexo} id={patient.id} 
                nascimento={patient.nascimento} status={patient.status} inactivate_patient={()=>{handleCardID(patient.id)}}/>
            )
        })}
                 
        </section>
        </main>
        </>
    )

}