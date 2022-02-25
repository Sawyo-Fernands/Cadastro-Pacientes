import React from "react"
import { Header } from "../../shared/components/Header"
import {useForm} from 'react-hook-form'
import { IData } from "../../shared/interfaces";
import { yupResolver } from '@hookform/resolvers/yup';
import { Schema } from "../../shared/Schemas";
import { savePatient } from "../../shared/services/localstore";

export const RegisterPage:React.FC=()=>{

   

    const { register, handleSubmit, formState:{ errors } } = useForm<IData>({
        resolver: yupResolver(Schema)
      });

      const onSubmit=handleSubmit(data => {

        const idRandom=(num : number)=>Math.floor( Math.random() * num );
          let patient={
              id:idRandom(999999),
              nome:data.nome,
              nascimento:data.nascimento,
              cpf:data.cpf,
              sexo:data.sexo ,
              endereco:data.endereco ,
              status:data.status
          }
          savePatient("@patient",patient)
          
      })

    return(
        <>
        <Header content_link="Voltar" link="/"/>
        <main>
        <section className="section">
                <form  className="form"onSubmit={onSubmit}>
                        <div className="content">
                            <label >Nome</label>
                            <input type="text"  {...register('nome')}/>
                            <p className="error-message">{errors.nome?.message}</p>
                        </div>
                        <div className="content">
                            <label >Data de Nascimento</label>
                            <input type="text" {...register('nascimento')}/>
                            <p className="error-message">{errors.nascimento?.message}</p>
                        </div>
                        <div className="content">
                            <label >CPF</label>
                            <input type="text"{...register('cpf')} />
                            <p className="error-message">{errors.cpf?.message}</p>
                        </div>
                        <div className="content">
                            <label >Sexo</label>
                            <input type="text" {...register('sexo')}/>
                            <p className="error-message">{errors.sexo?.message}</p>
                        </div>
                        <div className="content">
                            <label >Endereço</label>
                            <input type="text"  {...register('endereco')}/>
                            <p className="error-message">{errors.endereco?.message}</p>
                        </div>
                        <div className="content">
                            <label >Status</label>
                                <select id="values" {...register('status')}>
                                    <option value="ativo">Ativo</option>
                                    <option value="inativo">Inativo</option>
                                 </select>
                                 <p className="error-message">{errors.status?.message}</p>
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