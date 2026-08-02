// SuryaTicker Pro V2

const canvas = document.getElementById("canvas");

function createBox(text, x, y) {

    const box = document.createElement("div");

    box.className = "overlay";

    box.innerHTML = text;

    box.style.left = x + "px";

    box.style.top = y + "px";

    canvas.appendChild(box);

}

document.getElementById("addLive").onclick = () => {

    createBox("🔴 LIVE",100,100);

};

document.getElementById("addTicker").onclick = () => {

    createBox("Scrolling Text",100,200);

};

document.getElementById("addLogo").onclick = () => {

    createBox("LOGO",100,300);

};

document.getElementById("addClock").onclick = () => {

    createBox("12:00 PM",100,400);

};
