'use strict';

function generateRandomNumber() {
  return Math.ceil(Math.random() * 100);
}

var number = generateRandomNumber();

var attempts = 0;
var inputNumber = document.querySelector('.user-number');
var saveNumberButton = document.querySelector('#save-number');
var attemptsView = document.querySelector('.attempts');
var track = document.querySelector('.track');
saveNumberButton.addEventListener('click', function() {
  attempts = attempts + 1;
  attemptsView.textContent = attempts;
  if (number === parseInt(inputNumber.value)) {
    track.textContent = 'ACERTADO';
    document.querySelector('.insert-name').classList.remove('hidden');
  } else if (number < parseInt(inputNumber.value)) {
    track.textContent = 'DEMASIADO ALTO';
  } else {
    track.textContent = 'DEMASIADO BAJO';
  }
});

// var saveNameButton = document.querySelector('#save-name');
// saveNameButton.addEventListener('click', function() {
//   document.querySelector('.insert-name').classList.add('hidden');
//   track.textContent = 'PRUEBA DE NUEVO';
//   var inputName = document.querySelector('.user-name');
//   registerPlayer(inputName.value, attempts);
//   attempts = 0;
//   attemptsView.textContent = 0;
//   inputNumber.value = '';
//   inputName.value = '';
//   number = generateRandomNumber();
// });
//
// function registerPlayer(name, attempts) {
//   var history = document.querySelector('.history ul');
//   var item = document.createElement('li');
//   if (attempts === 1) {
//     item.textContent = name + ' - ' + attempts + ' intento';
//   } else {
//     item.textContent = name + ' - ' + attempts + ' intentos';
//   }
//   history.appendChild(item);
// }

var saveNameButton = document.querySelector('#save-name');
saveNameButton.addEventListener('click', function() {
    document.querySelector('.insert-name').classList.add('hidden');
  var inputName = document.querySelector('.user-name');
  registerPlayer({name: inputName.value, attempts: attempts});
});

function registerPlayer(player) {
  var history = document.querySelector('.history ul');
  var item = document.createElement('li');
  if (player.attempts === 1) {
    item.textContent = player.name + ' - ' + player.attempts + ' intento';
  } else {
    item.textContent = player.name + ' - ' + player.attempts + ' intentos';
  }
  history.appendChild(item);
}
