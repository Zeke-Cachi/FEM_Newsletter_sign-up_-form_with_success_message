const fadedTomato = "hsla(4, 100%, 67%, 0.1)";
const tomato = "hsl(4, 100%, 67%)";

//FUNCTIONALITY FOR ERORR STATES
const input: HTMLInputElement | null = document.querySelector("input");
const errorMsg: HTMLElement | null = document.getElementById("errorMsg");
const submitButton: HTMLButtonElement | null = document.querySelector("button");

submitButton?.addEventListener("click", (e) => {
  e.preventDefault();
  if (input!.value === "" || input!.validity.typeMismatch) {
    errorMsg!.classList.remove("hidden");
    input!.style.background = fadedTomato;
    input!.style.border = `1px solid ${tomato}`;
    input!.style.color = tomato;
  } else {
    input!.removeAttribute("style");
  }
});

input?.addEventListener("focus", () => {
  errorMsg!.classList.add("hidden");
});
