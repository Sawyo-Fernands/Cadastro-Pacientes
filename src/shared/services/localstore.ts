import {IData} from '../interfaces'

export async function getPatients(key:string){
    const myPatients:any=await localStorage.getItem(key)

    let patientSave=JSON.parse(myPatients) || []

    return patientSave

}

export async function savePatient(key:string,newPatient:IData){

    let patientStore :IData[]=await getPatients(key)

    const hasPatient=patientStore.some((patient: IData)=>patient.cpf===newPatient.cpf)

    if(hasPatient){
        alert('Esse cpf já está cadastrado !')
        return
    }

    patientStore.push(newPatient)
    await localStorage.setItem(key,JSON.stringify(patientStore))

}


