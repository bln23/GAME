'use strict';

var saveNameButton = document.querySelector('#save-name');
saveNameButton.addEventListener('click', function() {
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
