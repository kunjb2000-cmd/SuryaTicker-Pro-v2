// SuryaTicker Pro V2
// Drag & Drop Engine

let active = null;
let offsetX = 0;
let offsetY = 0;

document.addEventListener("pointerdown", function(e){

    if(!e.target.classList.contains("overlay")) return;

    active = e.target;

    offsetX = e.clientX - active.offsetLeft;
    offsetY = e.clientY - active.offsetTop;

});

document.addEventListener("pointermove", function(e){

    if(active==null) return;

    active.style.left = (e.clientX-offsetX)+"px";
    active.style.top = (e.clientY-offsetY)+"px";

});

document.addEventListener("pointerup", function(){

    active = null;

});
