//sineWave

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let start = 0;
// ctx.lineTo(1) //accepts x,y coordinates
// ctx.moveTo // starting point
// ctx.stroke

ctx.moveTo()

const timer = setInterval(tick, 1000, 10);

function tick(end) {
  if(start === end){
    window.clearTimeout(timer)
    return
  } else {
    start++
  }
  console.log(start);
  // console.log(end);
}

