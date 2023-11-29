// Definir informações dos campos
const fields = [
  {
    fieldName: "nome",
    requerido: true,
    input_type: "input",
    input: document.getElementById("nome"),
    label: document.querySelector('label[for="nome"]'),
    helper: document.getElementById("nome-helper"),
    helperErrorMessage: "Nome muito curto",
    popupErrorMessage: "O nome deve ter pelo menos 10 caracteres;\n",
    validateFunction: validarString10,
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
    validateFunction: validarString10,
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
    validateFunction: validarString01,
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
    validateFunction: validarString04,
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
    validateFunction: validarString04,
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
    validateFunction: validarString02,
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
    validateFunction: validarString02,
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

const fieldsClean = [];

const buttonEnviar = document.querySelector('input[type="submit"]');
const buttonCancelar = document.getElementById("cancelar");
const messagePopup = document.getElementById("messagePopup");
const windowPopup = document.getElementById("windowPopup");

fields.forEach((field) => {
  // Adicionar tratamento de eventos 'focus' para campos obrigatórios
  field.input.addEventListener("focus", () => {
    if (field.requerido) {
      field.label.classList.add("required-popup");
    }
  });
  // Adicionar tratamento de eventos 'blur' para validação
  field.input.addEventListener("blur", (e) => {
    if (field.validateFunction) {
      validarCampoGenerico(
        field.input.value,
        field.fieldName,
        field.validateFunction
      );
    } else {
      field.label.classList.remove("required-popup");
    }
  });
  // Adicionar formatação dos dados no Input
  field.input.addEventListener("input", () => {
    if (field.formatInput) {
      field.input.value = field.formatInput(field.input.value, field.nextField);
    }
  });
});

function encontrarIndiceDoCampo(fieldName) {
  return fields.findIndex((field) => field.fieldName === fieldName);
}

function validarCampoGenerico(value, fieldName, validateFunction) {
  const fieldIndex = encontrarIndiceDoCampo(fieldName);
  const isValid = validateFunction(value);

  formatarCampo(fieldIndex, isValid);
  return isValid;
}

function formatarCampo(indexField, status) {
  const field = fields[indexField];
  const { requerido, label, input, helper, helperErrorMessage } = field;

  if (status === true) {
    label.classList.remove("required-popup");
    input.classList.remove("error");
    input.classList.add("correct");
    helper.classList.remove("visible");
  } else if (status === null && !requerido) {
    input.classList.remove("error");
    helper.classList.remove("visible");
  } else {
    input.classList.remove("correct");
    input.classList.add("error");
    helper.classList.add("visible");
    helper.innerHTML = helperErrorMessage;
  }
}

function validarString(string, length) {
  if (string.length > length) {
    return string.length >= length;
  } else {
    return null;
  }
}

function validarString01(string) {
  if (string.length > 0) {
    return string.length >= 1;
  } else {
    return null;
  }
}

function validarString02(string) {
  if (string.length > 0) {
    return string.length >= 2;
  } else {
    return null;
  }
}

function validarString04(string) {
  if (string.length > 0) {
    return string.length >= 4;
  } else {
    return null;
  }
}

function validarString08(string) {
  if (string.length > 0) {
    return string.length == 8;
  } else {
    return null;
  }
}

function validarString10(string) {
  return string.length >= 10;
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

buttonEnviar.addEventListener("click", (event) => {
  let msgErro = "";
  let fieldFocus = "";
  event.preventDefault();

  fields.forEach((field) => {
    if (!field.validate(field.input.value)) {
      if (
        field.requerido ||
        (!field.requerido && field.input.value.length > 0)
      ) {
        msgErro += field.popupErrorMessage;
        if (!fieldFocus) {
          fieldFocus = field.input.id;
        }
      }
    }
  });

  if (msgErro === "") {
    enviarDadosDoadores();
    showPopup("Dados enviados com sucesso!", "success-popup");
    limparFormulario();
  } else {
    showPopup(msgErro, "error-popup");
    const focusField = fields.find((field) => field.input.id === fieldFocus);
    if (focusField) {
      focusField.input.focus();
    }
  }
});

buttonCancelar.addEventListener("click", (event) => {
  window.location.href = "index.html";
});

function showPopup(message, classe) {
  messagePopup.innerText = message;
  windowPopup.classList.add(classe);
  windowPopup.style.display = "flex";
  setTimeout(function () {
    windowPopup.classList.remove(classe);
    windowPopup.style.display = "none";
  }, 5000); // Oculta o popup após 5 segundos
}

function limparFormulario() {
  fields.forEach((field) => {
    if (field.input_type == "input" || field.input_type == "select") {
      field.input.value = "";
      field.input.classList.remove("correct");
    } else if (field.input_type == "checkbox") {
      field.input.checked = false;
    }
  });
}

async function enviarDadosDoadores() {
  //  const db_url = "https://hemocentro.ddns.net/cadastrar_doador";
  const db_url = "http://127.0.0.1";
  const db_port = "5000";
  const db_route = "cadastrar_doador";

  // Captura os dados do formulário

  fields.forEach((field) => {
    let campo = field.fieldName;
    let value = field.input.value;
    formData.append( {campo, value}])
  });
  const formData = 
  {
    nome: document.getElementById("nome").value,
    data_nascimento: document.getElementById("data_nascimento").value,
    email: document.getElementById("email").value,
    cpf: document.getElementById("cpf").value,
    logradouro: document.getElementById("logradouro").value,
    numero: document.getElementById("numero").value,
    complemento: document.getElementById("complemento").value,
    bairro: document.getElementById("bairro").value,
    cidade: document.getElementById("cidade").value,
    estado: document.getElementById("estado").value,
    cep: document.getElementById("cep").value,
    telefone: document.getElementById("telefone").value,
  };

  console.log(formData);

  try {
    // Envia os dados para o servidor Flask
    const response = await fetch(`${db_url}:${db_port}/${db_route}`, {
      method: "POST",
      headers: {
        "Content-Type": "Add-Doador-Hemocentro",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      // Tratar a resposta do servidor, se necessário
      const responseData = response.json();
      console.log("Resposta do servidor:", responseData);
    } else {
      // Tratar erros de resposta do servidor
      console.error("Erro na requisição:", response.statusText);
    }
  } catch (error) {
    // Tratar erros de rede ou outros erros
    console.error("Erro na requisição:", error.message);
  }
}
