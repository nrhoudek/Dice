var randomNumber1 = Math.floor((Math.random() * 6)) + 1; // generates random number between 1 and 6 for die 1.
var randomNumber2 = Math.floor((Math.random() * 6)) + 1; // generates random number between 1 and 6 for die 2

document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png"); //sets image on first die depending on what the randomNumber1 is.
document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png"); //sets image on first die depending on what the randomNumber1 is.

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").textContent = "Player 1 Wins!";
}
else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").textContent = "Player 2 Wins!";
}
else {
  document.querySelector("h1").textContent = "Draw!";
}//end if
