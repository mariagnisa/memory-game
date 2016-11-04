  'use strict';

  let images = [];
  images[0]="avatar/avatar_0.jpg";
  images[1]="avatar/avatar_1.jpg";
  images[2]="avatar/avatar_2.jpg";
  images[3]="avatar/avatar_3.jpg";
  images[4]="avatar/avatar_4.jpg";
  images[5]="avatar/avatar_5.jpg";
  images[6]="avatar/avatar_6.jpg";
  images[7]="avatar/avatar_7.jpg";


  for (let i = 0; i < images.length; i++) {
    let rand = Math.floor((Math.random() * images.length) + 1);
    let img = 'avatar/avatar_' + rand + '.jpg';
  }

  let output = "<ol>";
  for (let j = 0; j < 16; j++) {
    output += "<li>";
    output += "<img src = '" + images[i] + "'/>";
    output += "</li>";
  }
  output += "</ol>";
  document.getElementById("cardHolder").innerHTML = output;
  $("img").hide();
