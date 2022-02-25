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
            console.log(result)
        }

        getAllParients()

    },[] )

    return(
        <>
        <Header content_link="Cadastrar paciente" link="/register"/>
        <main className="main">
        <section className="section-cards">

        <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
                 
        </section>
           


        </main>
        </>
    )

}