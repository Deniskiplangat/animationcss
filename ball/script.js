const canvas = document.querySelector('canvas')
const ctx = canvas.getContext("2d")

const centerY = canvas.width/2
const centerX = canvas.height/2


ctx.beginPath();
ctx.arc(centerX,centerY,250,0*Math.PI,2*Math.PI);
ctx.fillStyle = 'green'
ctx.fill()

ctx.stroke(); 



         