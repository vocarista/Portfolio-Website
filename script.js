const body= document.querySelector('body');
const intro= document.getElementById('intro');
const about= document.getElementById('about');
const edu= document.getElementById('education');
const skills= document.getElementById('skills');
const buttons= document.querySelectorAll('button')
const container= document.querySelector('#container');
let state=1;

//background code-------------------------------------------------------------------------
let ang= 0;
function getAng(){
    if (ang === 360){
        ang=0;
    }
    else{
        ang++;
    }
    return ang;
}

setInterval(()=> {
    body.style.backgroundImage = `linear-gradient(${getAng()}deg, #1aa3a3, #752ed9)`;
},20);
//-------------------------------------styles for button-----------------------------------

//-----------------------------------------------------------------------------------------
function setDisplay(){
    if (state ===0){
        intro.style.display= `none`;
        edu.style.display= `none`;
        skills.style.display =`none`;
        about.style.display= `none`;
        return;
    }
    if (state === 1){
        intro.style.display= `flex`;
        about.style.display= `none`;
        edu.style.display= `none`;
        skills.style.display =`none`;
        return;
    }
    if (state ===2){
         intro.style.display= `none`;
         about.style.display= `flex`;
         edu.style.display= `none`;
         skills.style.display =`none`;
         return;
    }
    if (state === 3){
        intro.style.display= `none`;
        about.style.display= `none`;
        edu.style.display= `flex`;
        skills.style.display =`none`;
        return;
    }
    if (state === 4){
        intro.style.display= `none`;
        about.style.display= `none`;
        edu.style.display= `none`;
        skills.style.display =`flex`;
        return;
    }
}

[...buttons].map(button =>{
    button.addEventListener('click', clickHandler);
})

function clickHandler(){
    let btnText= this.innerText;
    if (btnText.slice(0,4)=== `Next`){
        state++;
        if (state ===5){
            state=1;
        }
        setDisplay()
    }
    if (btnText.slice(0,4)=== `Back`){
        state--;
        if (state ===5){
            state=1;
        }
        setDisplay();
    }
}

setDisplay()