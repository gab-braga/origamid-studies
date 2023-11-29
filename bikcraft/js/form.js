const form = document.querySelector(".form");
if (form) form.addEventListener("submit", submitForm);

function submitForm(event) {
  event.preventDefault();
  disableButtonForSend();
  const data = extractDataForm(form);
  sendData(data).then((response) => {
    form.reset();
    enableButton();
  });
}

function disableButtonForSend() {
  const button = document.querySelector(".form button");
  button.innerText = "Enviando...";
  button.disabled = true;
}

function extractDataForm(form) {
  return new FormData(form);
}

function sendData(data) {
  return fetch("./php/send.php", { method: "POST", body: data });
}

function enableButton() {
  const button = document.querySelector(".form button");
  button.innerText = "Enviar Mensagem";
  button.disabled = false;
}
