import React, { ChangeEvent, useCallback, useState } from "react"
import { useGetPatients } from "../../hooks/useGetPatients"
import { Card } from "../../shared/components/Card"
import { Header } from "../../shared/components/Header"
import { IData } from "../../shared/interfaces"
import { deletePatient, inactivePatient } from "../../shared/services/localstore"

import './home.css'


export const HomePage=()=>{

    const {patients,setPatients,noPatients}=useGetPatients()

    const [filter,setFilter]=useState('')
    let dataFilter :IData[]=patients.filter(item =>item.nome.toLocaleLowerCase().includes(filter))

    const handleCardID=useCallback((data:IData)=>{
        let patient={
            id:data.id,
            nome:data.nome,
            nascimento:data.nascimento,
            cpf:data.cpf,
            sexo:data.sexo,
            endereco:data.endereco,
            status:"inativo"
        }
             inactivePatient(patients,patient.id,patient,setPatients)   
    } ,[patients]) 

     const handleCardDelete=useCallback( async (id:number)=>{
            const result=await deletePatient(patients,id)   
            setPatients(result)
        },[patients])

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
                        inactivate_patient={()=>handleCardID(patient)}
                    />
                    )
                }
                     return(
                        <Card  key={ patient.id} nome={patient.nome} 
                        cpf={patient.cpf} endereco={patient.endereco} 
                        sexo={patient.sexo} id={patient.id} 
                        nascimento={patient.nascimento} status={patient.status}
                        inactivate_patient={()=>{handleCardID(patient)}}/>
            )
        })}   
        </section>
        </main>
        </>
    )

}