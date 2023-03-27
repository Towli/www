'use strict';

const colours = ['#FBF8CC', '#FDE4CF', '#FFCFD2', '#F1C0E8', '#CFBAF0', '#A3C4F3', '#90DBF4', '#8EECF5', '#98F5E1', '#B9FBC0'];
const w = window.innerWidth;
const h = window.innerHeight;
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const rate = 50;
const numParticles = 55;
const particles = [];
let time,
  count,
  size = 30,
  speed = 10,
  lights = new Array,
  colors = ['#000'];

canvas.setAttribute('width', w);
canvas.setAttribute('height', h);

for (var i = 0; i < numParticles; i++) {
  particles.push(new createParticle());
}

function getRandomColour() {
  return colours[Math.round(Math.random() * colours.length) - 1];
}

function createParticle() {
  this.x = Math.random() * w;
  this.y = Math.random() * h;
  this.velocityX = (Math.random() * 2) - 1;
  this.velocityY = (Math.random() * 2) - 1;
  this.radius = Math.random() * size;
  this.color = getRandomColour();
  console.log(this.color);
}

function draw() {
  context.clearRect(0, 0, w, h);

  particles.forEach(particle => {
    context.beginPath();
    context.arc(particle.x, particle.y, particle.radius, 0, 2 * Math.PI);
    context.fillStyle = particle.color;
    context.globalAlpha = 0.5;
    context.fill();

    particle.x += particle.velocityX;
    particle.y += particle.velocityY;

    if (particle.x >= w || particle.x <= 0)
      particle.velocityX = -particle.velocityX;
    if (particle.y >= h || particle.y <= 0)
      particle.velocityY = -particle.velocityY;
  });
}
setInterval(draw, 33);