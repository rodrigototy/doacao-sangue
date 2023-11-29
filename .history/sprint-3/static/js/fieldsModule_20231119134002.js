// Definição das informações dos campos
import { validarString, validarDataNascimento, validarEmail, validarCPF, validarCep, validarTelefone } from './validateModule.js';
import { formatarDataNascimento, formatarCPF, formatarCep, formatarTelefone } from './formatModule.js';

export const fields = [
  {
    fieldName: "nome",
    requerido: true,
    input_type: "input",
    input: document.getElementById("nome"),
    label: document.querySelector('label[for="nome"]'),
    helper: document.getElementById("nome-helper"),
    helperErrorMessage: "Nome muito curto",
    popupErrorMessage: "O nome deve ter pelo menos 10 caracteres;\n",
    validateFunction: validarString,
    validateParameter: 10,
    formatInput: null,
    nextField: null,
  },
  {
    fieldName: "data_nascimento",
    requerido: true,
    input_type: "input",
    input: document.getElementById("data_nascimento"),
    label: document.querySelector('label[for="data_nascimento"]'),
    helper: document.getElementById("data_nascimento-helper"),
    helperErrorMessage: "Idade incompatível",
    popupErrorMessage: "Você deve ser maior de 16 anos e menor que 60 anos;\n",
    validateFunction: validarDataNascimento,
    validateParameter: null,
    formatInput: formatarDataNascimento,
    nextField: document.querySelector("#email"),
  },
  {
    fieldName: "email",
    requerido: false,
    input_type: "input",
    input: document.getElementById("email"),
    label: document.querySelector('label[for="email"]'),
    helper: document.getElementById("email-helper"),
    helperErrorMessage: "Email incorreto",
    popupErrorMessage: "O e-mail informado está inválido;\n",
    validateFunction: validarEmail,
    validateParameter: null,
    formatInput: null,
    nextField: document.querySelector("#cpf"),
  },
  {
    fieldName: "cpf",
    requerido: true,
    input_type: "input",
    input: document.getElementById("cpf"),
    label: document.querySelector('label[for="cpf"]'),
    helper: document.getElementById("cpf-helper"),
    helperErrorMessage: "CPF inválido",
    popupErrorMessage: "O CPF informado está inválido;\n",
    validateFunction: validarCPF,
    validateParameter: null,
    formatInput: formatarCPF,
    nextField: document.querySelector("#logradouro"),
  },
  {
    fieldName: "logradouro",
    requerido: true,
    input_type: "input",
    input: document.getElementById("logradouro"),
    label: document.querySelector('label[for="logradouro"]'),
    helper: document.getElementById("logradouro-helper"),
    helperErrorMessage: "Logradouro muito pequeno",
    popupErrorMessage: "O logradouro deve conter mais de 10 caracteres;\n",
    validateFunction: validarString,
    validateParameter: 10,
    formatInput: null,
    nextField: null,
  },
  {
    fieldName: "numero",
    requerido: true,
    input_type: "input",
    input: document.getElementById("numero"),
    label: document.querySelector('label[for="numero"]'),
    helper: document.getElementById("numero-helper"),
    helperErrorMessage: "Informe número",
    popupErrorMessage: "Informe o número do logradouro ou S/N;\n",
    validateFunction: validarString,
    validateParameter: 1,
    formatInput: null,
    nextField: null,
  },
  {
    fieldName: "bairro",
    requerido: true,
    input_type: "input",
    input: document.getElementById("bairro"),
    label: document.querySelector('label[for="bairro"]'),
    helper: document.getElementById("bairro-helper"),
    helperErrorMessage: "Informe bairro",
    popupErrorMessage: "O bairro deve conter mais de 4 caracteres;\n",
    validateFunction: validarString,
    validateParameter: 4,
    formatInput: null,
    nextField: null,
  },
  {
    fieldName: "cidade",
    requerido: true,
    input_type: "select",
    input: document.getElementById("cidade"),
    label: document.querySelector('label[for="cidade"]'),
    helper: document.getElementById("cidade-helper"),
    helperErrorMessage: "Informe cidade",
    popupErrorMessage: "A cidade deve conter mais de 4 caracteres!\n",
    validateFunction: validarString,
    validateParameter: 4,
    formatInput: null,
    nextField: null,
  },
  {
    fieldName: "estado",
    requerido: true,
    input_type: "select",
    input: document.getElementById("estado"),
    label: document.querySelector('label[for="estado"]'),
    helper: document.getElementById("estado-helper"),
    helperErrorMessage: "Informe estado",
    popupErrorMessage: "Informe o estado do logradouro;\n",
    validateFunction: validarString,
    validateParameter: 2,
    formatInput: null,
    nextField: null,
  },
  {
    fieldName: "cep",
    requerido: true,
    input_type: "input",
    input: document.getElementById("cep"),
    label: document.querySelector('label[for="cep"]'),
    helper: document.getElementById("cep-helper"),
    helperErrorMessage: "CEP inválido",
    popupErrorMessage: "O CEP informado está inválido;\n",
    validateFunction: validarCep,
    validateParameter: null,
    formatInput: formatarCep,
    nextField: document.querySelector("#telefone"),
  },
  {
    fieldName: "telefone",
    requerido: true,
    input_type: "input",
    input: document.getElementById("telefone"),
    label: document.querySelector('label[for="telefone"]'),
    helper: document.getElementById("telefone-helper"),
    helperErrorMessage: "Telefone inválido",
    popupErrorMessage: "O telefone informado está inválido;\n",
    validateFunction: validarTelefone,
    validateParameter: null,
    formatInput: formatarTelefone,
    nextField: document.querySelector("#tipo_sanguineo"),
  },
  {
    fieldName: "complemento",
    requerido: false,
    input_type: "input",
    input: document.getElementById("complemento"),
    label: document.querySelector('label[for="complemento"]'),
    helper: document.getElementById("complemento-helper"),
    helperErrorMessage: "Complemento curto",
    popupErrorMessage: "O complemento deve conter mais de 1 caracter;\n",
    validateFunction: validarString,
    validateParameter: 2,
    formatInput: null,
  },
  {
    fieldName: "tipo_sanguineo",
    requerido: false,
    input_type: "select",
    input: document.getElementById("tipo_sanguineo"),
    validateFunction: null,
    formatInput: null,
  },
  {
    fieldName: "fator_rh",
    requerido: false,
    input_type: "select",
    input: document.getElementById("fator_rh"),
    validateFunction: null,
    formatInput: null,
  },
  {
    fieldName: "checkHipertensao",
    requerido: false,
    input_type: "checkbox",
    input: document.getElementById("checkHipertensao"),
    validateFunction: null,
    formatInput: null,
  },
  {
    fieldName: "checkDiabetes",
    requerido: false,
    input_type: "checkbox",
    input: document.getElementById("checkDiabetes"),
    validateFunction: null,
    formatInput: null,
  },
  {
    fieldName: "checkCardiaco",
    requerido: false,
    input_type: "checkbox",
    input: document.getElementById("checkCardiaco"),
    validateFunction: null,
    formatInput: null,
  },
  {
    fieldName: "checkGravidez",
    requerido: false,
    input_type: "checkbox",
    input: document.getElementById("checkGravidez"),
    validateFunction: null,
    formatInput: null,
  },
  {
    fieldName: "checkImuno",
    requerido: false,
    input_type: "checkbox",
    input: document.getElementById("checkImuno"),
    validateFunction: null,
    formatInput: null,
  },
  {
    fieldName: "checkTatuagens",
    requerido: false,
    input_type: "checkbox",
    input: document.getElementById("checkTatuagens"),
    validateFunction: null,
    formatInput: null,
  },
];
