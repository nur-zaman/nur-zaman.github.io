var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d');

var c = canvas.getContext('2d');
var circleArray = [];

var size  = (innerWidth/8)
var box = {
 boxWid: (innerWidth/2) + size,
 boxHig: (innerHeight/3) + size,
 iniBoxWid: (innerWidth/2) - size,
 iniBoxHig: (innerHeight/3) -size,
}
 var xRec = (box.boxWid-box.iniBoxWid) 
 var yRec = (box.boxHig-box.iniBoxHig) 
c.strokeStyle = 'red'
c.strokeRect(box.iniBoxWid, box.iniBoxHig, xRec , yRec)	



var cx = (box.iniBoxWid + box.boxWid)/2
var cy = ((box.iniBoxHig+ box.boxHig)/2)
// c.beginPath();
// c.arc(x,y,5,0,Math.PI * 2, false);
// c.strokeStyle = 'black';
// c.stroke();
// c.fillStyle= 'red';
// c.fill();
function randomRange(min,max){
	return Math.floor(Math.random()*(max - min +1)+min);
}
function dist(x1,y1,x2,y2){
	return Math.sqrt((Math.pow((x2-x1), 2)+Math.pow((y2-y1), 2)));
}

function init(){
	circleArray = [];
	circleArray.push(new Circle(cx,cy,1,1,2,1,'red'));
	for(var i = 1 ; i < 50 ; i++){
	var x = randomRange((box.iniBoxWid+radius), (box.boxWid-radius));
	var y = randomRange((box.iniBoxHig+radius), (box.boxHig-radius) );
	var dx = (Math.random() - 0.5)*3;
	var dy = (Math.random() - 0.5)*3;
	var radius = 5;
	var mass = radius/10;
	var hue ='black';
		if( i !== 1){
			for(let j = 1 ; j < circleArray.length;j++){
		if(dist(x,y,circleArray[j].x,circleArray[j].y)- radius*2 <0) {
	var x = randomRange((box.iniBoxWid+radius), (box.boxWid-radius));
	var y = randomRange((box.iniBoxHig+radius), (box.boxHig-radius) );
		j = 0;
		}
	}
	}
	circleArray.push(new Circle(x,y,dx,dy,radius,mass,hue));
	
}
}

function Circle(x,y,dx,dy,radius,mass,hue){
	//assigning values
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

	//drawing a circle
	this.draw = function(){	
	c.beginPath();
	c.arc(this.x,this.y,this.radius,0,Math.PI * 2, false);
	c.strokeStyle = 'black';
	c.stroke();
	c.fillStyle= this.hue;
	c.fill();

	}
	this.box = function(){
		 var size  = (innerWidth/8)
		 var box = {
		 boxWid: (innerWidth/2) + size,
		 boxHig: (innerHeight/3) + size,
		 iniBoxWid: (innerWidth/2) - size,
		 iniBoxHig: (innerHeight/3) -size,
}
 var xRec = (box.boxWid-box.iniBoxWid) 
 var yRec = (box.boxHig-box.iniBoxHig) 
c.strokeStyle = 'red'
c.strokeRect(box.iniBoxWid, box.iniBoxHig, xRec , yRec)	
}
	//updating a circle
	this.update = function(ca){
		if(this.x + this.radius > box.boxWid || this.x - this.radius < box.iniBoxWid){
	this.velocity.x=-this.velocity.x;
}
if(this.y + this.radius  > box.boxHig || this.y - this.radius < box.iniBoxHig){
	this.velocity.y=-this.velocity.y;
}
this.y+=this.velocity.y;
this.x+=this.velocity.x;

	this.draw();
	this.box();
	}


}

function animate(){
	requestAnimationFrame(animate);


	 c.clearRect(0, 0, canvas.width, canvas.height);

	for(var i = 0 ; i < circleArray.length;i++){
		circleArray[i].update(circleArray);

	}
}
init();
animate();