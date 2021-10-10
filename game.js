

var time = 20;
var timerId;

function startTimer() {
    time = 20;
    timer.innerHTML = time;
    timerId = setInterval(() => {
        time--;
        if (time == 0) location.href = "./gameover.html?score=" + score;
        timer.innerHTML = time;
    }, 1000);
}

function resetTime(intervalId) {
    clearInterval(intervalId);
    startTimer();
}

startTimer();


const number1Box=document.getElementById("number1");
const number2Box=document.getElementById("number2");
const number3Box=document.getElementById("number3");


const plus=document.getElementById("plus");
const minus=document.getElementById("minus");
const divide=document.getElementById("divide");
const mul=document.getElementById("mul");
const modulus=document.getElementById("modulus");




var operator,score=0;
 var number1=Math.floor(Math.random()*100);
 var number2=Math.floor(Math.random()*100);
  var number3;

 number1Box.innerHTML=number1;
 number2Box.innerHTML=number2;



 function randomise(){
      number1=Math.floor(Math.random()*100);
       number2=Math.floor(Math.random()*100);
    
     if(number1<number2){
         var temp =number1;
         number1=number2;
         number2=temp;
     }
     number1Box.innerHTML=number1;
     number2Box.innerHTML=number2;
     operator=Math.floor(Math.random()*5);
     switch(operator){
         case 1:number3=number1+number2;
         break;
         case 2:number3=number1 - number2;
         break;
         case 3:number3=number1 * number2;
         break;
         case 4:number3=number1 % number2;
         break;
         case 5:number3=Math.floor(number1/number2);
         break;
         case 0: randomise();
         
         
     }
     number1Box.innerHTML=number1;
     number2Box.innerHTML=number2;
     number3Box.innerHTML=number3;
     console.log(number3)    

 }
 randomise();
 plus.onclick=()=>{
     if(operator==1){
       score++;
       randomise();
       resetTime(timerId);
     }
     else{
         location.href="./gameover.html?score="+score;
     }
 }

minus.onclick=()=>{
    if(operator==2){
        score++;
        randomise();
        resetTime(timerId);
      }
    else{
        location.href="./gameover.html?score="+score;
    }
}
mul.onclick=()=>{
    if(operator==3){
        score++;
        randomise();
        resetTime(timerId);
      }
     else{
         location.href="./gameover.html?score="+score;
     }
 }
 modulus.onclick=()=>{
    if(operator==4){
        score++;
        randomise();
        resetTime(timerId);
      }
    else{
        location.href="./gameover.html?score="+score;
    }
}
divide.onclick=()=>{
    if(operator==5){
        score++;
        randomise();
        resetTime(timerId);
      }
    else{
        location.href="./gameover.html?score="+score;
    }
}


 


