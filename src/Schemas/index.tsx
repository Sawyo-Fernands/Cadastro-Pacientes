import * as yup from "yup";

export const Schema = yup.object({
    nome: yup.string().required("Campo obrigatório"),
    nascimento: yup.string().required("Campo obrigatório"),
    cpf: yup.string().required("Campo obrigatório"),
    sexo: yup.string().required("Campo obrigatório"),
    endereco: yup.string().required("Campo obrigatório"),

  }).required();