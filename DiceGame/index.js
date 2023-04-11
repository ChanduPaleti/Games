var randomnumber1=Math.random();
randomnumber1=randomnumber1*6;
randomnumber1=Math.floor(randomnumber1)+1;
var m="dice"+randomnumber1+".png";
document.querySelector(".img1").setAttribute("src","images/"+m);
var randomnumber2=Math.random();
randomnumber2=randomnumber2*6;
randomnumber2=Math.floor(randomnumber2)+1;
var m1="dice"+randomnumber2+".png";
document.querySelector(".img2").setAttribute("src","images/"+m1);
if(randomnumber1>randomnumber2)
document.querySelector("h1").innerHTML="🚩Player1 wins!";
else if(randomnumber1<randomnumber2)
document.querySelector("h1").innerHTML="Player2 wins!🚩";
else
document.querySelector("h1").innerHTML="Draw!";
