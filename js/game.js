var color=[];
var noSquare=6;
var pickedcolor;
var squares=document.querySelectorAll(".square");
var displaycolor=document.getElementById("displaycolor");
var message=document.getElementById("message");
var resetbtn=document.querySelector("#reset");
  var h1=document.querySelector("h1");
  var mode= document.querySelectorAll(".mode");
reset();


resetbtn.addEventListener("click",function()  //when reset button is clicked
{
   reset();
   if(resetbtn.textContent=="Play Again?")
   {
     resetbtn.textContent="New Colors";
   }

   h1.style.background="steelblue";
   message.textContent="";


});

for(var i=0;i<mode.length;++i)          //loop to add event listener to easy and hard button
{
  mode[i].addEventListener("click",function(){
   message.textContent="";
   h1.style.background="steelblue";
   resetbtn.textContent="New Colors";
   mode[0].classList.remove("selected");
   mode[1].classList.remove("selected");
   this.classList.add("selected");
    this.textContent==="Easy"?noSquare=3:noSquare=6;
    reset();
  });


}

function reset()   //function to reset colors of squares and guessing color
{

color=generateRandomColor();
pickedcolor=pickColor(color);

setSquareColor();
squareListener();

displaycolor.textContent=pickedcolor;


}

function squareListener(){    //function to add event listener to all squares

for(var i=0;i<noSquare;++i)
{
      squares[i].addEventListener("click",function(){

      if(this.style.background===pickedcolor)   //win
      {


          message.textContent="Correct!"

          h1.style.background=pickedcolor;
          changeAllSquares(pickedcolor);
          resetbtn.textContent="Play Again?";

      }
      else{

           this.style.background="#232323";
        message.textContent="Try Again!"
      }
      });
}

}

function generateRandomColor()  //generate a array of random colors
{

  var arr=[];

  for(var i=0;i<noSquare;++i)
  {
    arr[i]=RandomColor();
  }
  return arr;
}


function RandomColor()   //function to return a single random color
{

  var r,g,b;
  r=Math.floor(Math.random()*256);
  g=Math.floor(Math.random()*256);
  b=Math.floor(Math.random()*256);

  return "rgb("+r+", "+g+", "+b+")";

}

function pickColor(color) // return a color of random square
{
  return color[Math.floor(Math.random()*noSquare)];

}

function setSquareColor() // function to set squares boxes random color
{

for(var i=0;i<squares.length;++i)
{
  if(color[i])             //return undefined (false) when noSquare>=3
  {
      squares[i].style.display="block";    //changing back to block when hard is clicked after easy
    squares[i].style.background=color[i];
  }
  else {
    squares[i].style.display="none";              //Hide square when easy is clicked
  }
}

}
function changeAllSquares(pickedcolor)  //funciton to change color of all squares when player hit correct
{

  for(var i=0;i<noSquare;++i)
  {

    squares[i].style.background=pickedcolor;
  }
}
