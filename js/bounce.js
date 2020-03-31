function AutoRefresh( t ) {
	setTimeout("location.reload(true);", t);
}

var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d');

var mouse = {
	x: undefined,
	y: undefined,
}
	var maxRad = 30;
	// var minRad = 3;


window.addEventListener('mousemove',function(event){
	mouse.x = event.x;
	mouse.y = event.y;

}) 
window.addEventListener('resize',function(){
	canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
init();

});


function Circle(x,y,dx,dy,radius,hue){
	this.x = x;
	this.y = y;
	this.dx=dx;
	this.dy=dy;
	this.radius=radius;
	this.hue = hue;
	this.minRad = radius;
	// this.maxRad = radius;

	this.draw = function(){
		c.beginPath();
	c.arc(this.x,this.y,this.radius,0,Math.PI * 2, false);
	c.strokeStyle = this.hue;
	c.stroke();
	c.fillStyle= this.hue;
	c.fill();

	}
	this.update = function(){
		if(this.x + this.radius > innerWidth || this.x - this.radius < 0){
	this.dx=-this.dx;
}
if(this.y + this.radius > innerHeight || this.y - this.radius < 0){
	this.dy=-this.dy;
}
	this.y+=this.dy;
	this.x+=this.dx;

//inneract
if(mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50){
	if(this.radius<maxRad)
	this.radius += 1 ;
}
else if( this.radius > this.minRad){
	this.radius-=1;
}


	this.draw();
	}


}
var circleArray = [];
// for(var i = 0 ; i < 800 ; i++){
// 	var x = Math.random() * (innerWidth - radius * 2)+radius;
// 	var y = Math.random() * (innerHeight - radius * 2)+radius;
// 	var dx = (Math.random() - 0.5)*1;
// 	var dy = (Math.random() - 0.5)*2;
// 	var radius = 3 * Math.random() + 2;
// 	var hue = 'rgba(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',.3)';
	
// 	circleArray.push(new Circle(x,y,dx,dy,radius,hue));
// }

function init()
{
	circleArray = [];
	for(var i = 0 ; i < 800 ; i++){
	var x = Math.random() * (innerWidth - radius * 2)+radius;
	var y = Math.random() * (innerHeight - radius * 2)+radius;
	var dx = (Math.random() - 0.5)*1;
	var dy = (Math.random() - 0.5)*2;
	var radius = 3 * Math.random() + 2;
	var hue = 'rgba(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',.3)';
	
	circleArray.push(new Circle(x,y,dx,dy,radius,hue));
}
}
function animate(){
	requestAnimationFrame(animate);
	c.clearRect(0, 0, innerWidth, innerHeight);

	for(var i = 0 ; i < circleArray.length;i++){
		circleArray[i].update();
	}

 }
 init();
animate();
console.log(canvas);
