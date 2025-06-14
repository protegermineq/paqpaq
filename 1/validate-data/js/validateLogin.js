const phoneNumber = document.getElementById("phoneNumber");
const loginButton = document.getElementById("loginButton");

phoneNumber.addEventListener("input", () => {
  handlePhoneNumberInput(phoneNumber);
});

function handlePhoneNumberInput(input) {
  let numero = input.value.replace(/\D/g, "");

  if (numero.length > 10) {
    numero = numero.substr(0, 10);
  }

  if (numero.length > 6) {
    numero = numero.replace(/(\d{3})(\d{3})(\d{0,4})/, "$1 $2 $3");
  } else if (numero.length > 3) {
    numero = numero.replace(/(\d{3})(\d{0,3})/, "$1 $2");
  }

  input.value = numero;
}

function handlePasswordInput(input) {
  let password = input.value.replace(/\D/g, "");
  if (password.length > 4) {
    password = password.substr(0, 4);
  }
  input.value = password;
}

export function LoginValidation(form) {
  let isValid = true;
  const phoneInput = form.querySelector("#phoneNumber");
  if (!phoneInput) return false;

  const phoneNumber = phoneInput.value.replace(/\D/g, "");
  if (phoneNumber.length !== 10) isValid = false;

  return isValid;
}

loginButton.addEventListener("click", (event) => {
  event.preventDefault();

  const form = document.getElementById("homeForm");

  if (!LoginValidation(form)) return;

  const phoneNumber = document.querySelector("#phoneNumber").value;
  const formData = JSON.parse(localStorage.getItem("formData")) || {};
  formData.phoneNumber = phoneNumber;
  localStorage.setItem("formData", JSON.stringify(formData));
});