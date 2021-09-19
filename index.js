
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceNumber1 = "dice" + randomNumber1 + ".png";

var randomDice1 = "images/" + randomDiceNumber1;

var img1 = document.querySelectorAll("img")[0];

img1.setAttribute("src" , randomDice1);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceNumber2 = "dice" + randomNumber2 + ".png";

var randomDice2 = "images/" + randomDiceNumber2 ;

var img1 = document.querySelectorAll("img")[1];

img1.setAttribute("src" , randomDice2);

if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "🚩 Player 1 win";
}else if(randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML = "Player 2 win 🚩";
}else{
  document.querySelector("h1").innerHTML = "Draw";
}





// my code wrong ans



//
// function randomNumberGenerate1(){
//     var randomNumber1 = Math.floor(Math.random() * 6 ) + 1;
//     if(randomNumber1 === 1){
//        return "images/dice1.png" ;
//     }
//     else if(randomNumber1 === 2){
//     return "images/dice2.png" ;
//     }
//     else if(randomNumber1 === 3){
// return "images/dice3.png" ;
//     }
//     else if(randomNumber1=== 4){
// return "images/dice4.png" ;
//     }
//     else if(randomNumber1 === 5){
// return "images/dice5.png" ;
//     }
//     else{
// return "images/dice6.png" ;
//     }
// }
// function randomNumberGenerate2(){
//     var randomNumber2 = Math.floor(Math.random() * 6 ) + 1;
//     if(randomNumber2 === 1){
//        return "images/dice1.png" ;
//     }
//     else if(randomNumber2 === 2){
//
//       return "images/dice2.png" ;
//
//     }
//     else if(randomNumber2 === 3){
// return "images/dice3.png" ;
//     }
//     else if(randomNumber2 === 4){
// return "images/dice4.png" ;
//     }
//     else if(randomNumber2 === 5){
// return "images/dice5.png";
//     }
//     else{
// return "images/dice6.png" ;
//     }
// }
//
//
// var player1 = randomNumberGenerate1();
// document.querySelector("img")[0].setAttribute("src" , player1);
//
// var player2 = randomNumberGenerate2();
// document.querySelector("img")[1].setAttribute("src" , player2);
//
//
//
// if (player1 > player2){
//   document.querySelector("h1").textContent = "PLayer 1 win";
//
// }else if(player1 < player2){
//      document.querySelector("h1").textContent = "PLayer 2 win";
// }else{
//     document.querySelector("h1").textContent = "Draw";
// }
