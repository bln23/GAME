'use strict';

var number = 3;

var saveNumberButton = document.querySelector('#save-number');
saveNumberButton.addEventListener('click', function() {
  var inputNumber = document.querySelector('.user-number');
  var track = document.querySelector('.track');
  if (number === parseInt(inputNumber.value)) {
    track.textContent = 'ACERTADO';
    document.querySelector('.insert-name').classList.remove('hidden');
  } else if (number < parseInt(inputNumber.value)) {
    track.textContent = ('DEMASIADO ALTO');
  } else {
    track.textContent = ('DEMASIADO BAJO');
  }
});




var saveNameButton = document.querySelector('#save-name');
saveNameButton.addEventListener('click', function() {
    document.querySelector('.insert-name').classList.add('hidden');
  var inputName = document.querySelector('.user-name');
  registerPlayer(inputName.value, 2);
});

function registerPlayer(name, attempts) {
  var history = document.querySelector('.history ul');
  var item = document.createElement('li');
  if (attempts === 1) {
    item.textContent = name + ' - ' + attempts + ' intento';
  } else {
    item.textContent = name + ' - ' + attempts + ' intentos';
  }

  history.appendChild(item);
}
