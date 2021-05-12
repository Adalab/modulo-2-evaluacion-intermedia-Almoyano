"use strict";

const button = document.querySelector(".js-button");
const inputUser = document.querySelector(".js-usernumber");
const inputClue = document.querySelector(".js-clue");
const inputAttempt = document.querySelector(".js-attempt");

/*Función para número random*/
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

function handlerShowNumber() {
  const inputUserValue = parseInt(inputUser.value);
  console.log(inputUserValue);
  console.log(randomNumber);
  let userNumber = inputUserValue;
  //let randomNumber = getRandomNumber;
  if (userNumber > randomNumber) {
    inputClue.innerHTML = " Demasiado alto ";
  } else if (userNumber < randomNumber) {
    inputClue.innerHTML = " Demasiado bajo ";
  } else if (userNumber === randomNumber) {
    inputClue.innerHTML = " Has ganado campeona ";
  } else if (userNumber < 1 || userNumber > 100) {
    inputClue.innerHTML = "El número debe estar entre 1 y 100";
  }
}

button.addEventListener("click", handlerShowNumber);

const randomNumber = getRandomNumber(100);
console.log("Mi número aleatorio es ", randomNumber);
