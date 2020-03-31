var canvas =document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d');
var maxRad = 50;
var minRad = 2;

// var mouse{
// 	x:undefined,
// 	y:undefined,
// }
//  window.addEventListener('mousemove',function(event){
//  	mouse.x = event.x;
//  	mouse.y = event.y;
// })
window.addEventListener('resize',function(){
	canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
init();

});

function Circle(x,y,rad,dxRad,hue) {
	this.x = x;
	this.y = y;
	this.rad = rad;
	this.dxRad = dxRad;
	this.hue = hue;

	this.draw = function(){
		c.beginPath();
		c.arc(this.x,this.y,this.rad,0,Math.PI * 2 ,false);
		c.strokeStyle = this.hue;
		c.stroke();
		c.fillStyle = this.hue;
		c.fill();
	}
	this.update = function(){
		this.draw();
		if(this.rad>=maxRad){
			this.dxRad=-this.dxRad;
		}
		
		if(this.rad<=minRad){
			this.dxRad=-this.dxRad;
		}

			this.rad+=this.dxRad;
			
			
	}

}

var circleArray = [];
function init()
{
	circleArray = [];
	for(var i = 0 ; i < 500 ; i++){
	var rad = 3 * Math.random() + 3;
	var x = Math.random() * (innerWidth - rad * 2)+rad;
	var y = Math.random() * (innerHeight - rad * 2)+rad;
	var dxRad = (Math.random() - 0.5)*1;
	
	
	var hue = 'rgba(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',.1)';
	
	circleArray.push(new Circle(x,y,rad,dxRad,hue));
	
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

