import React from "react"
import { Header } from "../../components/Header"
import {useForm} from 'react-hook-form'


export const EditPage:React.FC=()=>{

    const { register, handleSubmit, formState:{ errors } } = useForm({
        // resolver: yupResolver(schema)
      });

      const Form=(data: any)=>console.log(data)

    return(
        <>
        <Header content_link="Voltar" link="/"/>
        <main>
        <section className="section">
                <form  className="form" onSubmit={handleSubmit(Form)}>
                        <div className="content">
                            <label >Nome</label>
                            <input type="text"  {...register('nome')}/>
                        </div>
                        <div className="content">
                            <label >Data de Nascimento</label>
                            <input type="text" {...register('nascimento')}/>
                        </div>
                        <div className="content">
                            <label >CPF</label>
                            <input type="text"{...register('cpf')} />
                        </div>
                        <div className="content">
                            <label >Sexo</label>
                            <input type="text" {...register('sexo')}/>
                        </div>
                        <div className="content">
                            <label >Endereço</label>
                            <input type="text"  {...register('endereco')}/>
                        </div>
                        <div className="content">
                            <label >Status</label>
                                <select id="values" {...register('status')}>
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