// Definição das informações dos campos
import { fields } from "./fieldsModule.js";

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
        field.validateFunction,
        field.validateParameter
      );
    } else if (field.requerido) {
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

function validarCampoGenerico(
  value,
  fieldName,
  validateFunction,
  validateParameter
) {
  const fieldIndex = encontrarIndiceDoCampo(fieldName);
  let isValid;

  if (validateParameter) {
    isValid = validateFunction(value, validateParameter);
  } else {
    isValid = validateFunction(value);
    console.log(isValid);
  }

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
    input.classList.remove("correct");
    input.classList.remove("error");
    helper.classList.remove("visible");
  } else {
    input.classList.remove("correct");
    input.classList.add("error");
    helper.classList.add("visible");
    helper.innerHTML = helperErrorMessage;
  }
}

buttonEnviar.addEventListener("click", (event) => {
  let msgErro = "";
  let fieldFocus = "";
  event.preventDefault();

  fields.forEach((field) => {
    if (field.validateFunction) {
      const isValid = validarCampoGenerico(
        field.input.value,
        field.fieldName,
        field.validateFunction,
        field.validateParameter
      );

      if (!isValid && !null) {
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
    // limparFormulario();
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
  const db_url = "https://hemocentro.ddns.net";
  // const db_url = "http://127.0.0.1";
  const db_port = "5000";
  const db_route = "cadastrar_doador";
  let formData = {};
  let value;

  // Captura os dados do formulário
  fields.forEach((field) => {
    if (field.input_type == "checkbox") {
      value = field.input.checked;
    } else {
      value = field.input.value;
      if (field.formatInput) {
        value = value.replace(/[^\d]+/g, "");
      }
    }
    console.log(`${field.fieldName}: ${value}`);
    formData[field.fieldName] = value;
  });
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
