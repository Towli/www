var w = window.innerWidth;
var h = window.innerHeight;
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var rate = 50;
var numParticles = 200;
var particles = [];
var time,
    count,
    size = 2,
    speed = 10,
    lights = new Array,
    colors = ['#000'];

canvas.setAttribute('width',w);
canvas.setAttribute('height',h);

for (var i = 0; i < numParticles; i++) {
  particles.push(new createParticle());
}

// Randomise creation and placement of particle
function createParticle() {
  this.x = Math.random()*w;
  this.y = Math.random()*h;
  this.velocityX = (Math.random()*2)-1;
  this.velocityY = (Math.random()*2)-1;
  this.radius = Math.random()*1.5;
  this.color = "black";
}

function draw() {
  context.clearRect(0,0,w,h);

  for(var i = 0; i < particles.length; i++) {
    context.beginPath();
    context.arc(particles[i].x, particles[i].y, particles[i].radius, 0, 2*Math.PI);
    context.fillStyle = 'rgba(255, 255, 255, 0.8)';
    context.fill();

    particles[i].x += particles[i].velocityX;
    particles[i].y += particles[i].velocityY;

    if (particles[i].x >= w || particles[i].x <= 0)
      particles[i].velocityX = -particles[i].velocityX;
    if (particles[i].y >= h || particles[i].y <= 0)
      particles[i].velocityY = -particles[i].velocityY;
  }
}
setInterval(draw, 33);