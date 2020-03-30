const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
console.log(ctx)
let start = 0;
let xCoordinate = 1000;
let yCoordinate = (Math.trunc(Math.sin(xCoordinate) * 100)) + 500;
let offSet = 50;

ctx.beginPath();
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.fillStyle = 'white'
ctx.moveTo(0, yCoordinate);
ctx.lineWidth = '10';



const timer = setInterval(tick, 50);

function tick() {
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.beginPath();
    for (var i = 0; i < 100;  i++) {
      ctx.lineTo(0 + offSet*i, (Math.trunc(Math.sin(xCoordinate + offSet*i) * 50)) + 500)
    }

    ctx.stroke();
    start++
    xCoordinate -= 50;
    yCoordinate = (Math.trunc(Math.sin(xCoordinate) * 100)) + 500;
    console.log(xCoordinate, yCoordinate)

}
