var randomNumber1;
randomNumber1 = Math.random();
randomNumber1 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber1);

var randomDiceImage = "dice" + randomNumber1 + ".png";
document.querySelector('.img1').setAttribute('src', randomDiceImage );


var randomNumber2;
randomNumber2 = Math.random();
randomNumber2 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber2);

var randomDiceImage2 = "dice" + randomNumber2 + ".png";
document.querySelector('.img2').setAttribute('src', randomDiceImage2 );

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} else {
    document.querySelector("h1").innerHTML = "Draw!";
};
