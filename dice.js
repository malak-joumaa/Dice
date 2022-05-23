// Variables
var h1 = document.getElementsByTagName("h1");
var img1 = document.getElementsByClassName("img1");
var img2 = document.getElementsByClassName("img2");
//Random
var dice1 = Math.floor(Math.random() * 5);
var dice2 = Math.floor(Math.random() * 5);

const img_src = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];
//Adding random source to images
img1[0].src = img_src[dice1];
img2[0].src = img_src[dice2];

if(dice1>dice2){
    h1[0].innerHTML="&#128681 Player 1 Wins!"
}
else if(dice2>dice1){
    h1[0].innerHTML="&#128681 Player 2 Wins!"
}
else{
    h1[0].innerText="Draw!"
}