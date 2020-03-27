//sineWave

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let start = 0;
let xCoordinate = 1000
// ctx.lineTo(1) //accepts x,y coordinates
// ctx.moveTo // starting point
// ctx.stroke()
ctx.beginPath();
ctx.moveTo(1000, 500);

const timer = setInterval(tick, 1000, 10);

function tick(end) {
  if(start === end){
    window.clearTimeout(timer)
    return
  } else {
    ctx.lineTo(xCoordinate, 500)
    ctx.stroke();
    start++
    xCoordinate -= 100;
  }
  console.log(start);
  // console.log(end);
}

