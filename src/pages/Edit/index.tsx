import React, { useEffect, useState } from "react"
import { Header } from "../../shared/components/Header"
import {useForm} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import { Schema } from "../../shared/Schemas";
import { IData } from "../../shared/interfaces";
import { useNavigate, useParams } from "react-router-dom";
import { useGetPatients } from "../../hooks/useGetPatients";
import { toast,ToastContainer } from "react-toastify";


export const EditPage:React.FC=()=>{

    const { id } =useParams()
    const idNumber=Number(id)

    const navigate=useNavigate()

    const { patients }=useGetPatients()

    useEffect(()=>{

        if(patients !== undefined){
            patients.map((value)=>{
                if(value.id===idNumber){
                    reset(value)     
                }
            })
        }
    },[patients])


    const { register, handleSubmit, formState:{ errors },reset } = useForm<IData>({
        resolver: yupResolver(Schema)
      });

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

        patients.forEach((item)=>{
            if(item.id == idNumber){
                let newData=patients.filter((item)=>{
                    return (item.id !== idNumber)
                })
                
                newData.unshift(patient)
                localStorage.setItem('@patient',JSON.stringify(newData))
            }
        })
        toast.success('Cliente editado com sucesso', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            draggable: true,
            progress: undefined,
            });

            setTimeout(() => {
                navigate('/')
            }, 3000);
        
    })

    return(
        <>
        <Header content_link="Voltar" link="/"/>
        <main>
            <ToastContainer/>
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