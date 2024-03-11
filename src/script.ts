const height:number = 10
const width:number = 30

window.onload = () => {
    let img:CanvasImageSource = new Image()
    img.src = "../img/sheet.png"
    let canvas:HTMLCanvasElement = document.createElement("canvas");
    canvas.width = 27;
    canvas.height = 27;
    let ctx:CanvasRenderingContext2D = canvas.getContext("2d")!;
    ctx.drawImage(img, 48, 48, 27, 27, 0, 0, 48, 48);
    let url = canvas.toDataURL();
    let dest = document.getElementById("test")!;
    dest.style.backgroundImage = "url('" + url + "')";
}