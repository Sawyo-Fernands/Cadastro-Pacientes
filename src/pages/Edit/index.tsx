import React from "react"
import { Header } from "../../components/Header"

export const EditPage:React.FC=()=>{

    return(
        <>
        <Header content_link="Voltar" link="/"/>
        <main>
        <section className="section">
                <form  className="form">
                    <div className="content">
                        <label >Titulo</label>
                        <input type="text" name="title"/>
                        </div>
                        <div className="content">
                        <label >Descrição</label>
                        <input type="text" name="description"/>

                        </div>
                        <div className="content">
                        <label >Conteudo</label>
                        <input type="text" name="content" />
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