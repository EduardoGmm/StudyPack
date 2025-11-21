const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");
const telefone = document.getElementById("telefone");
const date = document.getElementById("date");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  checkInputUsername();
  checkInputEmail();
  checkInputPassword();
  checkInputPasswordConfirmation();
  checkInputTelefone();
  checkInputDate();
  if (formIsValid()) {
    document.getElementById("form").submit();
  }
});

function checkInputUsername() {
  const usernameValue = username.value;

  if (usernameValue === "") {
    errorInput(username, "O nome de usuário é obrigatório.");
  } else {
    const formItem = username.parentElement;
    formItem.className = "form-content";
  }
}

function checkInputEmail() {
  const emailValue = email.value;

  if (emailValue === "") {
    errorInput(email, "O email é obrigatório.");
  } else {
    const formItem = email.parentElement;
    formItem.className = "form-content";
  }
}

function checkInputPassword() {
  const passwordValue = password.value;

  if (passwordValue === "") {
    errorInput(password, "A senha é obrigatória.");
  } else if (passwordValue.length < 8) {
    errorInput(password, "A senha deve ter no mínimo 8 caracteres.");
  } else {
    const formItem = password.parentElement;
    formItem.className = "form-content";
  }
}

function checkInputPasswordConfirmation() {
  const passwordConfirmationValue = passwordConfirmation.value;
  const passwordValue = password.value;

  if (passwordConfirmationValue === "") {
    errorInput(passwordConfirmation, "A confirmação de senha é obrigatória.");
  } else if (passwordConfirmationValue !== passwordValue) {
    errorInput(passwordConfirmation, "As senhas precisam ser iguais.");
  } else {
    const formItem = passwordConfirmation.parentElement;
    formItem.className = "form-content";
  }
}

function checkInputTelefone() {
  const telefoneValue = telefone.value;

  if (telefoneValue === "") {
    errorInput(telefone, "O telefone é obrigatório.");
  } else {
    const formItem = telefone.parentElement;
    formItem.className = "form-content";
  }
}

function checkInputDate() {
  const dateValue = date.value;

  if (dateValue === "") {
    errorInput(date, "A data de nascimento é obrigatória.");
  } else {
    const formItem = date.parentElement;
    formItem.className = "form-content";
  }
}

function errorInput(input, message) {
  const formItem = input.parentElement;
  const textMessage = formItem.querySelector("a");

  textMessage.innerText = message;

  formItem.className = "form-content error";
}
