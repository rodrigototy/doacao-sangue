import { fields } from "./fieldsModule.js";

export function formatarDataNascimento(data, nextField) {
  // Verifica o formato da data
  const regexDataNascimento =
    /^(19|20)\d\d[-](0[1-9]|1[012])[-](0[1-9]|[12][0-9]|3[01])$/;
  if (regexDataNascimento.test(data)) {
    nextField.focus();
  }
  return data;
}

export function formatarCPF(cpf, nextField) {
  if (cpf.length == 11) {
    cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    nextField.focus();
  }
  return cpf;
}

export function formatarCep(cep, nextField) {
  // Formata o CEP no formato 99.999-999
  if (cep.length == 8) {
    cep = cep.replace(/(\d{2})(\d{3})(\d{3})/, "$1.$2-$3");
    nextField.focus();
  }
  return cep;
}

export function formatarTelefone(telefone, nextField) {
  // Formata o Telefone no formato (81) 9999-9999 ou (81) 9.9999-9999
  if (telefone.length == 10) {
    telefone = telefone.replace(/(\d{2})(\d{4})(\d{4})/, "($1) $2-$3");
  } else if (telefone.length > 10) {
    telefone = telefone.replace(/[^\d]+/g, "");
    telefone = telefone.replace(/(\d{2})(\d)(\d{4})(\d{4})/, "($1) $2.$3-$4");
    nextField.focus();
  }
  return telefone;
}

export function carregaLogradouro (addressData){
    fields.forEach(field => {
      const { fieldName, input } = field;
      const value = addressData[fieldName] || null;
  
      if (input) {
        input.value = value;
        input.disable = true;
      }
    });
}
