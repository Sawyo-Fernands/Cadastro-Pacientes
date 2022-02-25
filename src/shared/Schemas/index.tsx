import * as yup from "yup";

export const Schema = yup.object({
    nome: yup.string().required("Campo obrigatório"),
    nascimento: yup.string().required("Campo obrigatório"),
    cpf: yup.string().required("Campo obrigatório").min(11,"O CPF deve conter 11 caracteres!"),
    sexo: yup.string().required("Campo obrigatório"),
    endereco: yup.string(),

  }).required();