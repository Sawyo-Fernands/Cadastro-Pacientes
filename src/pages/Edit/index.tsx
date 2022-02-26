import React, { useEffect } from "react"
import { Header } from "../../shared/components/Header"
import {useForm} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import { Schema } from "../../shared/Schemas";
import { IData } from "../../shared/interfaces";
import {  useParams } from "react-router-dom";
import { useGetPatients } from "../../hooks/useGetPatients";
import { editPatient } from "../../shared/services/localstore";


export const EditPage:React.FC=()=>{

    const { id } =useParams()
    const idNumber=Number(id)

    const { patients }=useGetPatients()

    const { register, handleSubmit, formState:{ errors },reset } = useForm<IData>({
        resolver: yupResolver(Schema)
      });

      useEffect(()=>{

        if(patients !== undefined){
            patients.map((value)=>{
                if(value.id===idNumber){
                    reset(value)     
                }
            })
        }
    },[patients])

    const onSubmit=handleSubmit(data =>{

        let patient={
            id:idNumber,
            nome:data.nome,
            nascimento:data.nascimento,
            cpf:data.cpf,
            sexo:data.sexo ,
            endereco:data.endereco ,
            status:data.status
        }   
        editPatient(patients,patient,idNumber)
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
                            <input type="date" {...register('nascimento')}  />
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
                            <button type="submit" id="button">Editar</button>
                        </div>
                </form>
                
        </section>
     </main>
        </>
    )

}