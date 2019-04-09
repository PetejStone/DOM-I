
const tens = document.querySelector('#secondTens');
const ones = document.querySelector('#secondOnes');
const msTens = document.querySelector('#msTens');
const msHundreds = document.querySelector('#msHundreds');
const start = document.querySelector('#start');
const reset = document.querySelector('#reset');
const colon = document.querySelector('#colon');
// let stopwatch = setInterval(function(){
//   number += .01; console.log(number) }, 10);
reset.disabled = 'true';
let timerOff = true;


start.addEventListener('click',   ()=> {
  let counter = 0;
  let tenVariable = 0;
  let oneVariable = 0;
  let msTenVariable = 0;
  let msHundredVariable = 0;

  timerOff = false;

  start.disabled = true;
  tens.innerHTML = 0;
  ones.innerHTML = 0;
  msTens.innerHTML = 0;
  msHundreds.innerHTML = 0;

/////Tens content
if (reset.disabled === true && timerOff === false) {
  let tenCounter = setInterval(function(){
     if(tens.innerHTML <= 8 && counter === 0) {
       tens.innerHTML = tenVariable += 1;
       counter += 1;
       tens.style.color = 'red';
       ones.style.color = 'red';
       msTens.style.color = 'red';
       msHundreds.style.color = 'red';
       colon.style.color = 'red';
       reset.disabled = false;
       timerOff = true;

     } else if (tens.innerHTML >= 1){


  }}, 10000);
//////



      ///ones content
      let oneCounter = setInterval(function(){
         if(ones.innerHTML <= 8 && tens.innerHTML < 1 && timerOff === false) {
           ones.innerHTML = oneVariable += 1;
         } else if (ones.innerHTML = 8){
           oneVariable = 0;
           ones.innerHTML = 0;

      }}, 1000);
    //////////

    ///decimal tens content

      let msTensCounter = setInterval(function(){
         if(msTens.innerHTML <= 8 && tens.innerHTML < 1 && timerOff === false) {
           msTens.innerHTML = msTenVariable += 1;
         } else if (msTens.innerHTML = 8){
           msTenVariable = 0;
           msTens.innerHTML = 0;
      }}, 100);
    /////////

    ///decimal hundreds content
      let msHundredsCounter = setInterval(function(){
         if(msHundreds.innerHTML <= 8 && tens.innerHTML < 1 && timerOff === false) {
           msHundreds.innerHTML = msHundredVariable += 1;
         } else if (msHundreds.innerHTML = 8 ) {
           msHundredVariable = 0;
           msHundreds.innerHTML = 0;
         }}, 10 );

////////

}
});

reset.addEventListener('click', ()=>{
  tens.style.color = 'black';
  ones.style.color = 'black';
  msTens.style.color = 'black';
  msHundreds.style.color = 'black';
  colon.style.color = 'black';
  tens.innerHTML = 0;
  reset.disabled = true;
  start.disabled = false;

});
