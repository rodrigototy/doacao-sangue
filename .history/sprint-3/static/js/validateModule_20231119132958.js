
function validarString(string, length) {
    if (string.length > 0) {
      return string.length >= length;
    } else {
      return null;
    }
  }
  
  function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, "");
    if (cpf === "") return false;
    // Elimina CPFs inválidos conhecidos
    if (
      cpf.length !== 11 ||
      cpf === "00000000000" ||
      cpf === "11111111111" ||
      cpf === "22222222222" ||
      cpf === "33333333333" ||
      cpf === "44444444444" ||
      cpf === "55555555555" ||
      cpf === "66666666666" ||
      cpf === "77777777777" ||
      //  cpf === "88888888888" ||
      cpf === "99999999999"
    )
      return false;
    // Valida 1o dígito
    let add = 0;
    for (let i = 0; i < 9; i++) add += cpf.charAt(i) * (10 - i);
    let rev = 11 - (add % 11);
    if (rev === 10 || rev === 11) rev = 0;
    if (rev !== parseInt(cpf.charAt(9))) return false;
    // Valida 2o dígito
    add = 0;
    for (let i = 0; i < 10; i++) add += cpf.charAt(i) * (11 - i);
    rev = 11 - (add % 11);
    if (rev === 10 || rev === 11) rev = 0;
    return rev === parseInt(cpf.charAt(10));
  }
  
  function validarDataNascimento(data) {
    // Converte a string de data para um objeto Date
    const dataNascimento = new Date(data);
    // Obtém a data atual
    const hoje = new Date();
    // Calcula a idade subtraindo o ano de nascimento do ano atual
    const idade = hoje.getFullYear() - dataNascimento.getFullYear();
    // Verifica se a data de nascimento é maior que 16 anos e menor que 60 anos
    return idade >= 16 && idade < 60;
  }
  
  function validarEmail(email) {
    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email.length > 0) {
      return regexEmail.test(email);
    } else {
      return null;
    }
  }
  
  function validarCep(cep) {
    const regexCep = /^\d{8}$/; // Expressão regular para validar o CEP
    // remove todos os caracteres não numéricos
    cep = cep.replace(/[^\d]+/g, "");
    // Verifica se o CEP corresponde à expressão regular
    return regexCep.test(cep);
  }
  
  function validarTelefone(telefone) {
    const regexFixo = /^\d{10}$/;
    const regexCelular = /^\d{11}$/;
    // remove todos os caracteres não numéricos
    telefone = telefone.replace(/[^\d]+/g, "");
    return !!(regexFixo.test(telefone) || regexCelular.test(telefone));
  }
  
  function formatarDataNascimento(data, nextField) {
    // Verifica o formato da data
    const regexDataNascimento =
      /^(19|20)\d\d[-](0[1-9]|1[012])[-](0[1-9]|[12][0-9]|3[01])$/;
    if (regexDataNascimento.test(data)) {
      nextField.focus();
    }
    return data;
  }
  
  function formatarCPF(cpf, nextField) {
    if (cpf.length == 11) {
      cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
      nextField.focus();
    }
    return cpf;
  }
  
  function formatarCep(cep, nextField) {
    // Formata o CEP no formato 99.999-999
    if (cep.length == 8) {
      cep = cep.replace(/(\d{2})(\d{3})(\d{3})/, "$1.$2-$3");
      nextField.focus();
    }
    return cep;
  }
  
  function formatarTelefone(telefone, nextField) {
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
  