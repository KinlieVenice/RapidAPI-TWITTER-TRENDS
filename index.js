// current date for title
const dateElement = document.getElementById('date');

console.log(dateElement);

let currentDate = new Date();

console.log(currentDate);

// dateOptions - change format of current
let dateOptions = {year: 'numeric', month: 'long', day: "numeric"};

// change format to us time
dateElement.innerHTML = currentDate.toLocaleDateString('en-US', dateOptions);


// rapidAPI code to retrieve trending twt topics

const url = 'https://twitter-trends5.p.rapidapi.com/twitter/request.php';
const data = new FormData();
data.append('woeid', '23424934');

const options = {
	method: 'POST',
	headers: {
		'x-rapidapi-key': 'e0958725aamsh885e9aca439d982p13cd44jsn4abfd40e038f',
		'x-rapidapi-host': 'twitter-trends5.p.rapidapi.com'
	},
	body: data
};

// Dummy Data to comment out
// let myPost = {
// 	name:"#AlwaysToYouHannie",
// 	query:"%23AlwaysToYouHannie",
// 	url:"search?q=%23AlwaysToYouHannie",
// 	volume:98800,
// 	volumeShort:"97.9K",
// 	domainContext:"Korean music",
// 	groupedTrends:[]
// }

// // dot notation - to access a property or method of an object

// // array of objects
// let graphData = [
// 	{
// 		name:"2ne1",
// 		query:"2ne1",
// 		url:"search?q=2ne1",
// 		volume:394000,
// 		volumeShort:"394K",
// 		domainContext:"K-pop",
// 		groupedTrends:[]
// 	},
// 	{
// 		name:"#FudgeeBarrxBINI",
// 		query:"%23FudgeeBarrxBINI",
// 		url:"search?q=%23FudgeeBarrxBINI",
// 		volume:23200,
// 		volumeShort:"22.6K",
// 		domainContext:"",
// 		groupedTrends:[]

// 	}
// ];
// // push add element at the end of an array
// graphData.push(myPost);
// console.log(graphData);
// // array uses "index" to select the position of an element

// End of dummy data

// for(let i = 0; i < 2; i++){
// 	console.log(graphData[i]);
// 	console.log(graphData[i].name);
// 	console.log(graphData[i].volume);
// }

// let topics = graphData.map(object => {
// 	console.log(object);
// 	console.log(object.name);
// 	return object.name;
// });

// console.log(topics);


// let volumes = graphData.map(object => {
// 	return object.volume;
// });

// console.log(volumes);

// const myChart = document.getElementById('myChart');

// let barChart = new Chart(myChart, {
// type: 'bar',
// data: {
//   labels: topics,
//   datasets: [{
//     label: '# of Votes',
//     data: volumes,
//     borderWidth: 2,
//     backgroundColor: [
// 		'rgba(255, 99, 132, 0.2)',
// 		'rgba(255, 159, 64, 0.2)',
// 		'rgba(255, 205, 86, 0.2)',
// 		'rgba(75, 192, 192, 0.2)',
// 		'rgba(54, 162, 235, 0.2)',
// 		'rgba(153, 102, 255, 0.2)',
// 		'rgba(201, 203, 207, 0.2)'
// 	    ],
// 	borderColor: [
// 			'rgb(255, 99, 132)',
// 			'rgb(255, 159, 64)',
// 			'rgb(255, 205, 86)',
// 			'rgb(75, 192, 192)',
// 			'rgb(54, 162, 235)',
// 			'rgb(153, 102, 255)',
// 			'rgb(201, 203, 207)'
// 	    ],
// 	hoverBackgroundColor: [
// 	    	'rgb(255, 99, 132)',
// 	    	'rgb(255, 159, 64)',
// 	    	'rgb(255, 205, 86)',
// 	    	'rgb(75, 192, 192)',
// 	    	'rgb(54, 162, 235)',
// 	    	'rgb(153, 102, 255)',
// 	    	'rgb(201, 203, 207)'
// 	    ]
// 	  }]
// },
// options: {
// 	indexAxis: 'y',
//   scales: {
//     y: {
//       beginAtZero: true
//     }
//   }
// }
// });


let graphData = [];


fetch(url, options)
.then(res => res.json())
.then(data =>{
	console.log(data);
	for(let i = 0; i < 25; i++){
		graphData.push(
		{
			name: data.trends[i].name,
			volume: data.trends[i].volume

		})
	}

	let topics = graphData.map(object => {
		console.log(object);
		console.log(object.name);
		return object.name;
	});

	console.log(topics);


	let volumes = graphData.map(object => {
		return object.volume;
	});

	console.log(volumes);

	const myChart = document.getElementById('myChart');

	let barChart = new Chart(myChart, {
	type: 'bar',
	data: {
	  labels: topics,
	  datasets: [{
	    label: '# of Votes',
	    data: volumes,
	    borderWidth: 2,
	    backgroundColor: [
			'rgba(255, 99, 132, 0.2)',
			'rgba(255, 159, 64, 0.2)',
			'rgba(255, 205, 86, 0.2)',
			'rgba(75, 192, 192, 0.2)',
			'rgba(54, 162, 235, 0.2)',
			'rgba(153, 102, 255, 0.2)',
			'rgba(201, 203, 207, 0.2)'
		    ],
		borderColor: [
				'rgb(255, 99, 132)',
				'rgb(255, 159, 64)',
				'rgb(255, 205, 86)',
				'rgb(75, 192, 192)',
				'rgb(54, 162, 235)',
				'rgb(153, 102, 255)',
				'rgb(201, 203, 207)'
		    ],
		hoverBackgroundColor: [
		    	'rgb(255, 99, 132)',
		    	'rgb(255, 159, 64)',
		    	'rgb(255, 205, 86)',
		    	'rgb(75, 192, 192)',
		    	'rgb(54, 162, 235)',
		    	'rgb(153, 102, 255)',
		    	'rgb(201, 203, 207)'
		    ]
		  }]
	},
	options: {
		indexAxis: 'y',
	  scales: {
	    y: {
	      beginAtZero: true
	    }
	  }
	}
	});
})
