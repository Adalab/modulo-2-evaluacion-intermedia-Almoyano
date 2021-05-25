"use strict";

const button = document.querySelector(".js-button");
const inputUser = document.querySelector(".js-usernumber");
const inputClue = document.querySelector(".js-clue");
const inputAttempt = document.querySelector(".js-attempt");

/*Función para número random*/
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

const randomNumber = getRandomNumber(100);

function handlerShowNumber() {
  const inputUserValue = parseInt(inputUser.value);
  console.log(inputUserValue);
  console.log(randomNumber);
  let userNumber = inputUserValue;
  //let randomNumber = getRandomNumber;
  if (userNumber < 1 || userNumber > 100) {
    inputClue.innerHTML = "El número debe estar entre 1 y 100";
  } else if (userNumber < randomNumber) {
    inputClue.innerHTML = " Demasiado bajo ";
  } else if (userNumber > randomNumber) {
    inputClue.innerHTML = " Demasiado alto ";
  } else {
    inputClue.innerHTML = " Has ganado campeona ";
  }
}

let cont = 0;
function counter() {
  cont++;
  inputAttempt.innerHTML = `El numero de intentos ${cont}`;
}

function handleClick(event) {
  event.preventDefault();
  handlerShowNumber();
  counter();
}

button.addEventListener("click", handleClick);

console.log("Mi número aleatorio es ", randomNumber);
