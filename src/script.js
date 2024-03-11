"use strict";
const height = 10;
const width = 30;
window.onload = () => {
    let img = new Image();
    img.src = "../img/sheet.png";
    let canvas = document.createElement("canvas");
    canvas.width = 27;
    canvas.height = 27;
    let ctx = canvas.getContext("2d");
    ctx.drawImage(img, 48, 48, 27, 27, 0, 0, 48, 48);
    let url = canvas.toDataURL();
    let dest = document.getElementById("test");
    dest.style.backgroundImage = "url('" + url + "')";
};
