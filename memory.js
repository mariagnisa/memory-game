'use strict';

let images = [
  "avatar/avatar_0.jpg",
  "avatar/avatar_1.jpg",
  "avatar/avatar_2.jpg",
  "avatar/avatar_3.jpg",
  "avatar/avatar_4.jpg",
  "avatar/avatar_5.jpg",
  "avatar/avatar_6.jpg",
  "avatar/avatar_7.jpg",
  "avatar/avatar_0.jpg",
  "avatar/avatar_1.jpg",
  "avatar/avatar_2.jpg",
  "avatar/avatar_3.jpg",
  "avatar/avatar_4.jpg",
  "avatar/avatar_5.jpg",
  "avatar/avatar_6.jpg",
  "avatar/avatar_7.jpg"
];

let card_values = [];
let card_id = [];
let cards_flip = 0;

// Shuffle the cards
Array.prototype.memory_card_shuffle = function () {
  let i = this.length, rand, temp;
  while (--i > 0) {
    rand = Math.floor(Math.random() * (i + 1));
    temp = this[rand];
    this[rand] = this[i];
    this[i] = temp;
  }
};

// Create a new memory board
function newBoard() {
  cards_flip = 0;
  let output = '';
  images.memory_card_shuffle();
  for (let i = 0; i < images.length; i++) {
    output += '<div id="card_' + i +'" onclick="memoryFlipCard(this,\''+images[i] + '\')"></div>';
  }

  document.getElementById('memoryBoard').innerHTML = output;
}

// Flip the cards
function memoryFlipCard(card, value){
  if (card.innerHTML == "" && card_values.length < 2) {

    card.style.background = "url(" + value + ") no-repeat";
    card.style.backgroundSize = "80px 80px";

    if (card_values.length == 0) {
      card_values.push(value);
      card_id.push(card.id);
    } else if (card_values.length == 1) {
      card_values.push(value);
      card_id.push(card.id);
    }
  }
}
