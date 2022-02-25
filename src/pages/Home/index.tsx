import React, { useEffect, useState } from "react"
import { Card } from "../../shared/components/Card"
import { Header } from "../../shared/components/Header"
import { IData } from "../../shared/interfaces"
import { getPatients } from "../../shared/services/localstore"
import './home.css'


export const HomePage:React.FC=()=>{

    const[data,setData]=useState<IData[]>([])

    useEffect(()=>{
        async function getAllParients(){
            const result=await getPatients('@patient')

            setData(result)
        }

        getAllParients()

    },[] )

    return(
        <>
        <Header content_link="Cadastrar paciente" link="/register"/>
        <main className="main">
        <section className="section-cards">

        {data?.map((patient)=>{
            return(
                <Card  key={ patient.id} nome={patient.nome} 
                cpf={patient.cpf} endereco={patient.endereco} 
                sexo={patient.sexo} id={patient.id} 
                nascimento={patient.nascimento} status={patient.status}/>
            )
        })}
                 
        </section>
           


        </main>
        </>
    )

}