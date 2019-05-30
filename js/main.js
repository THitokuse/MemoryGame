(function() {
  'use strict';

  const pairs = 4;

  function init() {
    let i;
    for (i = 1; i <= pairs; i++) {
      document.getElementById('stage').appendChild(createCard(i));
      document.getElementById('stage').appendChild(createCard(i));
    }
  }

  function createCard(num) {
    let container;
    let card;
    let inner;

    inner = '<div class="card-front">' + num + '</div><div class="card-back">?</div>';
    card = document.createElement('div');
    card.innerHTML = inner;
    card.className = 'card';
    container = document.createElement('div');
    container.className = 'card-container';
    container.appendChild(card);
    return container;
  }

  init();
})();
