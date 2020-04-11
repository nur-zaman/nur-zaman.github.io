// import formula from './formula'
function AutoRefresh( t ) {
	setTimeout("location.reload(true);", t);
}

var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d');


var g = .5;
var friction = 0.95;
var maxRad = 30;
// var minRad = 3;
function randomRange(min,max){
	return Math.floor(Math.random()*(max - min +1)+min);
}
addEventListener('click',function(){
	init();
})
function dist(x1,y1,x2,y2){
	return Math.sqrt((Math.pow((x2-x1), 2)+Math.pow((y2-y1), 2)));
}
var mouse = {
	x: undefined,
	y: undefined,
}
window.addEventListener('mousemove',function(event){
	mouse.x = event.x;
	mouse.y = event.y;

}) 

window.addEventListener('resize',function(){
	canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
init();

});


function Circle(x,y,dx,dy,radius,mass,hue){
	this.x = x;
	this.y = y;
	this.velocity = {
	x :dx,
	y :dy
}
	this.radius=radius;
	this.hue = hue;
	this.minRad = radius;
	this.mass = .1;
	// this.maxRad = radius;

	this.draw = function(){
		c.beginPath();
	c.arc(this.x,this.y,this.radius,0,Math.PI * 2, false);
	c.strokeStyle = 'black';
	c.stroke();
	c.fillStyle= this.hue;
	c.fill();

	}
	this.update = function(ca){
		if(this.x + this.radius > innerWidth || this.x - this.radius < 0){
	this.velocity.x=-this.velocity.x;
}
if(this.y + this.radius + this.velocity.y > innerHeight || this.y - this.radius < 0){
	// this.velocity.y=-this.velocity.y*friction;
	this.velocity.y=-this.velocity.y;
}
// else{
// 	this.velocity.y+=g;
// }


	// this.ax--;
	this.y+=this.velocity.y;
	 this.x+=this.velocity.x;

//inneract
// if(mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50){
// 	if(this.radius<maxRad)
// 	this.radius += 1 ;
// }
// else if( this.radius > this.minRad){
// 	this.radius-=1;
// }
	for( var i = 0 ; i < ca.length ; i++){
		if(this === ca[i]) continue;
		if(dist(this.x,this.y,ca[i].x,ca[i].y)- radius*2 <0){
			resolveCollision(this,ca[i]);
			updateState(this,ca[i])
			console.log('x');
		}
	}

	this.draw();
	}


}
function updateState(p1,p2){
	var x = randomRange(0, 100);
	var y = randomRange(0, 100);
	if((p1.hue === 'red' || p2.hue === 'red') && p1.hue !== p2.hue && (x<=100)){
		p2.hue = 'red';
		p1.hue = 'red';
	}

		if(p1.hue === 'red'){
		if(y <=60){
		p1.hue = 'white';
			}
		
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
		circleArray.push(new Circle((innerWidth/2),(innerHeight/2),1,1,10,1,'red'));
	for(var i = 1 ; i < 200 ; i++){
	var x = Math.random() * (innerWidth - radius * 2)+radius;
	var y = Math.random() * (innerHeight - radius * 2)+radius;;
	var dx = (Math.random() - 0.5)*3;
	var dy = (Math.random() - 0.5)*3;

	var radius = 10;
		var mass = radius/10;
		var hue = 'white'
	// var hue = 'rgba(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',1)';
	
	if( i !== 1){
			for(let j = 1 ; j < circleArray.length;j++){
		if(dist(x,y,circleArray[j].x,circleArray[j].y)- radius*2 <0) {
			x = Math.random() * (innerWidth - radius * 2)+radius;
			y = Math.random() * (innerHeight - radius * 2)+radius;
		j = 0;
		}
	}
	}



	circleArray.push(new Circle(x,y,dx,dy,radius,mass,hue));
}
}
// function overlapDetect(){
// 	for(var j = 0 ; j < circleArray.length;j++){
// 		if(dist(x,y,circleArray[j].x,circleArray[j].y)- radius*2 <0){
// 			x = Math.random() * (innerWidth - radius * 2)+radius;
// 			y = Math.random() * (innerHeight - radius * 2)+radius;
// 		j = -1;
// 		}
// 	}

// }
function randomColor(){
	return 'rgba(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',1)';
}
function animate(){
	requestAnimationFrame(animate);
	c.clearRect(0, 0, innerWidth, innerHeight);

	for(var i = 0 ; i < circleArray.length;i++){
		circleArray[i].update(circleArray);
	}

 }
 init();
animate();
console.log(canvas);
