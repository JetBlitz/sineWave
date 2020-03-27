//sineWave

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
console.log(ctx)
let start = 0;
let xCoordinate = 1000;
let yCoordinate = (Math.trunc(Math.sin(xCoordinate) * 100)) + 500;
// ctx.lineTo(1) //accepts x,y coordinates
// ctx.moveTo // starting point
// ctx.stroke()
ctx.beginPath();
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.fillStyle = 'white'
ctx.moveTo(1000, yCoordinate);
ctx.lineWidth = '10';



const timer = setInterval(tick, 100, 20);

function tick(end) {
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.beginPath();
    ctx.lineTo(xCoordinate, yCoordinate)
    ctx.lineTo(xCoordinate + 50, yCoordinate)
    ctx.stroke();
    start++
    xCoordinate -= 50;
    yCoordinate = (Math.trunc(Math.sin(xCoordinate) * 100)) + 500;
    console.log(xCoordinate, yCoordinate)
   // console.log(start);
  // console.log(end);
}

