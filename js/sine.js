var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d');

const gui = new dat.gui.GUI();
 const wave = {
 	y : canvas.height / 2,
 	length : 0.01,
 	amp : 100,
 	freq: 0.01

 }
 gui.add(wave, 'y' , 0 , canvas.height)
 gui.add(wave, 'length' , -0.01, 0.01)
  gui.add(wave, 'amp' , -300 , 300)
  gui.add(wave, 'freq' , -0.01 , 1)

let inc = wave.freq
function draw(){
c.beginPath();

c.moveTo(0, canvas.height/2);
for(let i = 0; i < canvas.width ; i++){
c.lineTo(i,wave.y / 2 + Math.sin(i * wave.length + inc) * wave.amp);
}
c.strokeStyle = 'hsl( 0, 50%,50%)'
c.stroke();
}

function animate() {
	requestAnimationFrame(animate);
	c.fillStyle = 'rgba(0,0,0,0.01)'
	c.fillRect(0, 0, canvas.width, canvas.height)
	draw();
	inc+=wave.freq
}
animate()