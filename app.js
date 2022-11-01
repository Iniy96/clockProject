
setInterval(settime, 1000)

const hourhand =document.querySelector('.hourhand')
const minutehand =document.querySelector('.minutehand')
const sechand =document.querySelector('.sechand')

function settime() {
    const dt =new Date();
   
    let hr = dt.getHours();
    let  min=dt.getMinutes();
    let sec=dt.getSeconds();
    
    let srotation=sec/60;
    let mrotation= (srotation+min)/60;
    let hrotation= (mrotation+hr)/12;


  setRotation(sechand, srotation)
  setRotation(minutehand, mrotation)
  setRotation(hourhand, hrotation)
}

function setRotation(element, rotationRatio) {
  element.style.setProperty('--rotate', rotationRatio * 360)
}

/* ////////////////////// */
setInterval(setdigitaltime, 1000)
const digitalhour =document.querySelector('.dig-hours')
const digitalmin =document.querySelector('.dig-minutes')
const ditigialsec =document.querySelector('.dig-seconds')
const day=document.querySelector('.day')
const month=document.querySelector('.month')
const year=document.querySelector('.year')
function setdigitaltime(){
    const dt= new Date();
    digitalhour.textContent = dt.getHours();
    digitalmin.textContent = dt.getMinutes();
    ditigialsec.textContent = dt.getSeconds();
    day.textContent= dt.getDate();
    month.textContent=dt.getMonth();
    year.textContent=dt.getFullYear();
}






settime()