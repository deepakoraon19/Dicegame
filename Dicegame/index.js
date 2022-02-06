var player1=(Math.floor(Math.random()*6))+1;
var player2=(Math.floor(Math.random()*6))+1;
var i=0;
var j=0;
var str="dice";
var img=".png";
var num=0;
var final="";
// document.querySelector("img").setAttribute("src", "dice1.jpg");
for(i=1;i<7;i++){
   
    if(player1==i)
    {
        final="images/"+str+i+img;
        document.getElementById("dice1").setAttribute("src", final);
        final="";
        document.querySelector("h1").innerHTML="Player 1 Wins";
    }
    if(player2==i)
    {
        final="images/"+str+i+img;
        document.getElementById("dice2").setAttribute("src", final);
        final="";
        document.querySelector("h1").innerHTML="Player 2 Wins";

    }
}
