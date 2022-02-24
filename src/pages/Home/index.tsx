import React from "react"
import { Header } from "../../shared/components/Header"
import './home.css'


export const HomePage:React.FC=()=>{

    return(
        <>
        <Header content_link="Cadastrar paciente" link="/register"/>
        <main className="main">

        </main>
        </>
    )

}