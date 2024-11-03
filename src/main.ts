const fadedTomato = "hsla(4, 100%, 67%, 0.1)";
const tomato = "hsl(4, 100%, 67%)";

//FUNCTIONALITY FOR ERORR STATES
const input: HTMLInputElement = document.querySelector("input")!;
const errorMsg: HTMLElement = document.getElementById("errorMsg")!;
const submitButton: HTMLButtonElement = document.querySelector("button")!;

const emailSpan = document.getElementById("userEmail")!;
const mainScreen = document.getElementById("mainScreen")!;
const confirmationModal = document.getElementById("confirmationModal")!;
const dismissButton = document.getElementById("dismissButton")!;

submitButton?.addEventListener("click", (e) => {
  e.preventDefault();
  if (input.value === "" || input.validity.typeMismatch) {
    errorMsg.classList.remove("hidden");
    input.style.background = fadedTomato;
    input.style.border = `1px solid ${tomato}`;
    input.style.color = tomato;
  } else {
    input.removeAttribute("style");
    mainScreen.classList.remove("grid");
    mainScreen.classList.add("hidden");
    confirmationModal.classList.remove("hidden");
    confirmationModal.classList.add("grid");
    emailSpan.innerText = input.value;
  }
});

dismissButton?.addEventListener("click", (e) => {
  e.preventDefault();
  input.value = "";
  mainScreen.classList.remove("hidden");
  mainScreen.classList.add("grid");
  confirmationModal.classList.remove("grid");
  confirmationModal.classList.add("hidden");
});

input?.addEventListener("focus", () => {
  errorMsg.classList.add("hidden");
});
