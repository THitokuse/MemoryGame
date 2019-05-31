(function() {
  'use strict';

  const pairs = 2;
  const cards = [];

  let flipCount = 0;
  let firstCard = null;
  let secondCard = null;

  function init() {
    let i;
    let card;
    for (i = 1; i <= pairs; i++) {
      cards.push(createCard(i));
      cards.push(createCard(i));
    }
    while (cards.length) {
      card = cards.splice(Math.floor(Math.random() * cards.length), 1)[0];
      document.getElementById('stage').appendChild(card);
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
    card.addEventListener('click', function() {
      flipCard(this);
    });
    container = document.createElement('div');
    container.className = 'card-container';
    container.appendChild(card);
    return container;
  }

  function flipCard(card) {
    if (firstCard !== null && secondCard !== null) {
      return;
    }
    card.className = 'card open';
    flipCount++;
    if (flipCount % 2 === 1) {
      firstCard = card;
    } else {
      secondCard = card;
      secondCard.addEventListener('transitionend', check);
    }
  }

  function check() {
    if (firstCard.children[0].textContent !==
      secondCard.children[0].textContent) {
      firstCard.className = 'card';
      secondCard.className = 'card';
    }
    secondCard.removeEventListener('transitionend', check);
    firstCard = null;
    secondCard = null;
  }

  init();
})();
