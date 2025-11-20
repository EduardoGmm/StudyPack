const form = document.getElementById("contato-form");
  const nome = document.getElementById("nome");
  const email = document.getElementById("email");
  const assunto = document.getElementById("assunto");
  const mensagem = document.getElementById("mensagem");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    checkInputNome();
    checkInputEmail();
    checkInputAssunto();
    checkInputMensagem();

    const temErro = form.querySelector(".form-content.error");
    if (!temErro) {
      alert('Mensagem sobre "' + assunto.value + '" enviada com sucesso!');
      form.reset();

      const formItems = form.querySelectorAll(".form-content");
      formItems.forEach(function (item) {
        item.className = "form-content";
        const textMessage = item.querySelector("small");
        if (textMessage) textMessage.innerText = "";
      });
    }
  });

  function checkInputNome() {
    const nomeValue = nome.value.trim();

    if (nomeValue === "") {
      errorInput(nome, "O nome é obrigatório.");
    } else {
      const formItem = nome.parentElement;
      formItem.className = "form-content";
    }
  }

  function checkInputEmail() {
    const emailValue = email.value.trim();

    if (emailValue === "") {
      errorInput(email, "O email é obrigatório.");
    } else if (!emailValue.includes("@") || !emailValue.includes(".")) {
      errorInput(email, "Informe um email válido.");
    } else {
      const formItem = email.parentElement;
      formItem.className = "form-content";
    }
  }

  function checkInputAssunto() {
    const assuntoValue = assunto.value.trim();

    if (assuntoValue === "") {
      errorInput(assunto, "O assunto é obrigatório.");
    } else {
      const formItem = assunto.parentElement;
      formItem.className = "form-content";
    }
  }

  function checkInputMensagem() {
    const mensagemValue = mensagem.value.trim();

    if (mensagemValue === "") {
      errorInput(mensagem, "A mensagem é obrigatória.");
    } else if (mensagemValue.length < 10) {
      errorInput(mensagem, "Escreva pelo menos 10 caracteres.");
    } else {
      const formItem = mensagem.parentElement;
      formItem.className = "form-content";
    }
  }

  function errorInput(input, message) {
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("small");

    textMessage.innerText = message;
    formItem.className = "form-content error";
  }