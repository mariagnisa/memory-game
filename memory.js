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
