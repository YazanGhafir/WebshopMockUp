/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


for (i = 0; i < 20; i++) {
    $("#asideList").append(
       '<a href="#" class="list-group-item list-group-item-action list-group-item-light"> Category Item ' + (i+1) + '</a>'
    );
}

var img1 =  "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12.jpg";
var img2 =  "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13.jpg";
var img3 =  "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14.jpg";
var img4 =  "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15.jpg";
var img5 =  "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14.jpg";

var images = [img1,img2,img3,img4,img5];

for (i = 0; i < 19; i++) {
  var $clonedContent = $('#cardElement').clone();
  shuffle(images);
  $clonedContent.find("img").attr("src", images[0]);
  $("#cardList").append($clonedContent);
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

//console.log($("#cardList").children()[0]);
 

