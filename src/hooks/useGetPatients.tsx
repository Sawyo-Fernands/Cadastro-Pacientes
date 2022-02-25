import React, { useEffect, useState } from "react"
import { IData } from "../shared/interfaces"
import { getPatients } from "../shared/services/localstore"


export const useGetPatients =()=>{

    const [patients,setPatients]=useState<IData[]>([])

    useEffect(()=>{

        async function getAllParients(){
            const result=await getPatients('@patient')

            setPatients(result)
            
        }

        getAllParients()

    },[] )


    return{ patients }

}