var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d');
// var a = [];
// var p = a.length
//  function graph() {
//  	var x = 400
// 	if(Math.random()>.5 && x <550){
// 	// a[0]=x++;
// 	a.push({y: x});
// 	x+=50
// console.log(a);
// }

// var chart = new CanvasJS.Chart("chartContainer", {
// 	animationEnabled: false,
// 	theme: "light2",
// 	title:{
// 		text: "Simple Line Chart"
// 	},
// 	axisY:{
// 		includeZero: true
// 	},
// 	data: [{        
// 		type: "line",
// 		dataPoints: a
// 		// dataPoints: [
// 		// 	{ y: 0 },
// 		// 	{ y: a[0] }
// 		// ]
// 	}]
// });
// chart.render();

// }

// function hasNE(a){
// 	if(a.length>p){
// 		return true
// 	}
// 	else
// 		return false

// }


// function animate() {
// 	requestAnimationFrame(animate);

// graph()

// }

// animate()
 	function graph() {
var chart = new CanvasJS.Chart("chartContainer", {

  type: 'line',

  data: {

    datasets: [{

      data: []

    }, {

      data: []

    }]

  },

  options: {

    scales: {

      xAxes: [{

        type: 'realtime'

      }]

    }

  }

});
}
graph()