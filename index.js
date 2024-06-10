var RandomNumber1 = Math.floor(Math.random()*6)+1;
var RandomImage1 = "dice" + RandomNumber1 + ".png";
var ImageSource1 = "images/" + RandomImage1;

document.querySelectorAll("img")[0].setAttribute("src" , ImageSource1);

var RandomNumber2 = Math.floor(Math.random()*6)+1;
var RandomImage2 = "dice" + RandomNumber2 + ".png";
var ImageSource2 = "images/" + RandomImage2;

document.querySelectorAll("img")[1].setAttribute("src" , ImageSource2);

if(RandomNumber1>RandomNumber2){
    num.textContent="Player 1 Wins";
}
else if(RandomNumber2>RandomNumber1){
    document.querySelector("h1").innerHTML="Player 2 Wins"
}

else{
    document.querySelector("h1").innerHTML = "Draw the Match"
}