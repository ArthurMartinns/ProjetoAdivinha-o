

let randomNumber = Math.round(Math.random() * 10);

let tentativas = 1;

function handleClick(event) {
  event.preventDefault();

  const inputNumber = document.querySelector("#inputNumber");

  if (Number(inputNumber.value) == randomNumber) {
    document.querySelector(".screen1").classList.add("hide");
    document.querySelector(".screen2").classList.remove("hide");
    document.querySelector(".screen2 h2").innerHTML = "Você acertou!!! ";
    randomNumber = Math.round(Math.round() * 10);
  }
  inputNumber.value = "";
  tentativas++;
}

function backtoPage(event) {
  event.preventDefault();
  const button = document.querySelector("#button");

  button.addEventListener("click", function () {
    document.querySelector(".screen2").classList.add("hide");
    document.querySelector(".screen1").classList.remove("hide");
    inputNumber.value = "";
    randomNumber = Math.round(Math.random() * 10);
    tentativas = 1;
  });
}
