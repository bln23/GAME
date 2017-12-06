'use strict';

function registerPlayer(name, attempts) {
  var history = document.querySelector('.history ul');
  var item = document.createElement('li');
  item.textContent = name + ' - ' + attempts + ' intentos';
  history.appendChild(item);
}
