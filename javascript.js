var randomnumber1 = Math.floor(Math.random()*6)+1;

switch(randomnumber1){
    case 1 : 
        var img1 = document.querySelectorAll("img")[0];
        img1.setAttribute("src","Images/dice1.png");
        break;
    case 2 :
        var img2 = document.querySelectorAll("img")[0];
        img2.setAttribute("src","Images/dice2.png");
        break;
    case 3 :
        var img3 = document.querySelectorAll("img")[0];
        img3.setAttribute("src","Images/dice3.png");
        break;
    case 4 :
        var img4 = document.querySelectorAll("img")[0];
        img4.setAttribute("src","Images/dice4.png");
        break;
    case 5 :
        var img5 = document.querySelectorAll("img")[0];
        img5.setAttribute("src","Images/dice5.png");
        break;
    case 6 :
        var img6 = document.querySelectorAll("img")[0];
        img6.setAttribute("src","Images/dice6.png");
        
}

//2nd image
var randomnumber2 = Math.floor(Math.random()*6)+1;


var randomDiceImage = "dice" + randomnumber2 + ".png";

var randomImageSource = "Images/" + randomDiceImage;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src",randomImageSource);

//changing display

if (randomnumber1 > randomnumber2){
    document.querySelector("h1").innerHTML="🚩 Player 1 Wins !";
}

else if (randomnumber1 < randomnumber2){
    document.querySelector("h1").innerHTML="Player 2 Wins ! 🚩";
}
else{
    document.querySelector("h1").innerHTML="🚩 It's a Draw ! 🚩";
}