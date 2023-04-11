var i=0;
while(i<document.querySelectorAll(".drum").length)
{
document.querySelectorAll(".drum")[i].addEventListener("click",handleclick);
i++;
}
function handleclick()
{
var w=this.innerHTML;
makesound(w);
makeanime(w);
}
function makesound(w){
  switch (w) {
    case "w":
      var audio=new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      var audio=new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      var audio=new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      var audio=new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      var audio=new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "k":
      var audio=new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    case "l":
      var audio=new Audio("sounds/snare.mp3");
      audio.play();
      break;

    default:
  }
}
document.addEventListener("keypress",function(e){
  makesound(e.key);
  makeanime(e.key);
});
function makeanime(w)
{
  var activebutton=document.querySelector("."+w);
  activebutton.classList.add("pressed");
  setTimeout(function(){
    activebutton.classList.remove("pressed");
  },100);
}
