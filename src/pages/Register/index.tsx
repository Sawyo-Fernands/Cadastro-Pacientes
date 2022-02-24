import React from "react"
import { Header } from "../../components/Header"



export const RegisterPage:React.FC=()=>{

    return(
        <>
        <Header content_link="Voltar" link="/"/>
        <main>
        <section className="section">
                <form  className="form">
                        <div className="content">
                            <label >Nome</label>
                            <input type="text" name="title"/>
                        </div>
                        <div className="content">
                            <label >Data de Nascimento</label>
                            <input type="text" name="description"/>
                        </div>
                        <div className="content">
                            <label >CPF</label>
                            <input type="text" name="content" />
                        </div>
                        <div className="content">
                            <label >Sexo</label>
                            <input type="text" name="title"/>
                        </div>
                        <div className="content">
                            <label >Endereço</label>
                            <input type="text" name="description"/>
                        </div>
                        <div className="content">
                            <label >Status</label>
                                <select id="values">
                                    <option value="ativo">Ativo</option>
                                    <option value="inativo">Inativo</option>
                                 </select>
                        </div>
                        <div className="btn">
                            <button type="submit" id="button">Enviar</button>
                        </div>
                </form>
                
        </section>
     </main>
        </>   
 )

}