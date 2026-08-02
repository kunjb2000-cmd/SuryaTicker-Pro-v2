// ======================================
// SuryaTicker Pro V2
// Main Engine - Part 1
// ======================================

const App = {

settings:{

label:"BREAKING NEWS",

text:"SuryaTicker Pro V2 Started Successfully",

live:"LIVE"

},

init(){

this.cache();

this.load();

this.bind();

this.render();

},

cache(){

this.labelInput=document.getElementById("labelInput");

this.textInput=document.getElementById("textInput");

this.applyBtn=document.getElementById("applyBtn");

this.label=document.getElementById("breakingLabel");

this.news=document.getElementById("tickerText");

this.live=document.getElementById("liveBox");

},

bind(){

this.applyBtn.addEventListener("click",()=>{

this.settings.label=this.labelInput.value||"BREAKING NEWS";

this.settings.text=this.textInput.value||"";

this.save();

this.render();

});

},

render(){

this.label.innerText=this.settings.label;

this.news.innerText=this.settings.text;

this.live.innerText=this.settings.live;

this.labelInput.value=this.settings.label;

this.textInput.value=this.settings.text;

},

save(){

localStorage.setItem(

"SuryaTickerV2",

JSON.stringify(this.settings)

);

},

load(){

let data=localStorage.getItem("SuryaTickerV2");

if(data){

this.settings=JSON.parse(data);

}

}

};

window.onload=()=>{

App.init();

};
