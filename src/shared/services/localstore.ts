import {IData} from '../interfaces'

export async function getPatients(key:string){
    const myPatients:any=localStorage.getItem(key)

    let patientSave=JSON.parse(myPatients) || []

    return patientSave

}

export async function savePatient(key:string,newPatient:IData){

    let patientStore :IData[]=await getPatients(key)

    const hasPatient=patientStore.some((patient: IData)=>patient.cpf===newPatient.cpf)

    if(hasPatient){
        alert('O cpf já está cadastrado !')

        return 
    }

    patientStore.push(newPatient)
    localStorage.setItem(key, JSON.stringify(patientStore))

}

export function deletePatient(patients:IData[],id:number){

    let myPatients=patients.filter( item => {
        return(item.id !== id)
    })

    localStorage.setItem('@patient',JSON.stringify(myPatients))
    return myPatients

}

export async function editPatient(patients:IData[],patient:IData,id:number){

    
    patients.forEach((item)=>{
        if(item.id == id){
            let newData=patients.filter((item)=>{
                return (item.id !== id )
            })
            newData.unshift(patient)
            localStorage.setItem('@patient',JSON.stringify(newData))
                
        }
    })

}