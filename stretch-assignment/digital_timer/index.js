
const tens = document.querySelector('#secondTens');
const ones = document.querySelector('#secondOnes');
const msTens = document.querySelector('#msTens');
const msHundreds = document.querySelector('#msHundreds');
const start = document.querySelector('#start');

// let stopwatch = setInterval(function(){
//   number += .01; console.log(number) }, 10);

start.addEventListener('click', ()=> {
  let counter = 0;

  let tenVariable = 0;
  let oneVariable = 0;
  let msTenVariable = 0;
  let msHundredVariable = 0;

  start.disabled = true;
  tens.innerHTML = 0;
  ones.innerHTML = 0;
  msTens.innerHTML = 0;
  msHundreds.innerHTML = 0;

/////Tens content

  let tenCounter = setInterval(function(){
     if(tens.innerHTML <= 8) {
       tens.innerHTML = tenVariable += 1;
     } else if (tens.innerHTML = 8){
       tenVariable = 0;
       tens.innerHTML = 0;
  }}, 10000);
//////

//// Ones Content
  let oneCounter = setInterval(function(){
     if(ones.innerHTML <= 8) {
       ones.innerHTML = oneVariable += 1;
     } else if (ones.innerHTML = 8){
       oneVariable = 0;
       ones.innerHTML = 0;

  }}, 1000);
//////////

///decimal tens content

  let msTensCounter = setInterval(function(){
     if(msTens.innerHTML <= 8) {
       msTens.innerHTML = msTenVariable += 1;
     } else if (msTens.innerHTML = 8){
       msTenVariable = 0;
       msTens.innerHTML = 0;
  }}, 100);
/////////

///decimal hundreds content
  let msHundredsCounter = setInterval(function(){
     if(msHundreds.innerHTML <= 8) {
       msHundreds.innerHTML = msHundredVariable += 1;
     } else if (msHundreds.innerHTML = 8) {
       msHundredVariable = 0;
       msHundreds.innerHTML = 0;
     }}, 10 );

////////





});
