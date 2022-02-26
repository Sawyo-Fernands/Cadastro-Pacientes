import { useEffect, useState } from "react"
import { IData } from "../shared/interfaces"
import { getPatients } from "../shared/services/localstore"


export const useGetPatients=()=>{

    const [patients,setPatients]=useState<IData[]>([])

    const [noPatients,setNoPatients]=useState(false)


    useEffect(()=>{

        async function getAllParients(){
            const result=await getPatients('@patient')

            if(result.length === 0){
                setNoPatients(true)
            }

            setPatients(result)
            
        }

        getAllParients()

    },[] )


    return{ patients,setPatients,noPatients }

}   