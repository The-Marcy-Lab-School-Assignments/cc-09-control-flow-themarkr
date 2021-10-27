/*
take in a number
use an if statement to check if num is inside given range[5,10] (five to ten inclusive)
if inside this range return true
else return false
*/

function betweenFiveAndTen(num){
  if (num >= 5 && num <=10){
      return true;
  }else{
      return false;
  }
}

//2
/*
take in a number
use an if statement to check if num is inside given range[10,30] (ten to thirty inclusive)
if inside this range return true
else return false
*/
function betweenTenAndThirty(num){
  if (num >= 10 && num <=30){
      return true;
  }else{
      return false;
  }
}

//3
/*
take in a number
use an if statement to check if num is inside given range[30,50] (thirty to fivty inclusive)
if inside this range return true
else return false
*/
function betweenThirtyAndFifty(num){
  if (num >= 30 && num <=50){
      return true;
  }else{
      return false;
  }
}


//4
/*
take in a number
use an if statement to check if num is inside given range[0,30] OR [50,70]
if inside these ranges return true
else return false
*/
function betweenThirtyFiftySeventy(num){
  if ((num >= 0 && num <=30) || (num >= 50 && num <=70)){
      return true;
  }else{
      return false;
  }
}


//5
/*
take in a number
use an if statement to check if num is inside given range[0,20] OR [50,60]
if inside these ranges return true
else return false
*/
function betweenTwentyFiftySixty(num){
  if ((num >= 0 && num <=20) || (num >= 50 && num <=60)){
      return true;
  }else{
      return false;
  }
}

//6
/*
take in a number
use an if statement to check if num is inside given range[0,10] OR [20,30]
if inside these ranges return true
else return false
*/
function betweenTenTwentyThirty(num){
  if ((num >= 0 && num <=10) || (num >= 20 && num <=30)){
      return true;
  }else{
      return false;
  }
}

console.log(betweenTenTwentyThirty(15));