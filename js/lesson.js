// function sum(arrNumbers = [4, 5, 6, 6]) {
// 	var result = 0;

// 	for (var number of arrNumbers) {
// 		result = result + number;
// 	}

// 	return result;
// }

// var sum = function (arrNumbers) {
// 	var result = 0;

// 	for (var i = 0; i < arrNumbers.length; i++) {
// 		result = result + arrNumbers[i];
// 	}

// 	return result;
// };

// var sum = function (arrNumbers) {
// 	var result = 0;

// 	for (var i = arrNumbers.length - 1; i >= 0; i--) {
// 		result = result + arrNumbers[i];
// 	}

// 	return result;
// };

// console.log(sum([4, 5, 7, 6]));

var data = [
	{ fishName: 'Sazan', weight: 1 },
	{ fishName: 'Beliy Amur', weight: 1.2 },
	{ fishName: "Zag'ara", weight: 0.5 },
	{ fishName: 'Piranya', weight: 0.4 },
	{ fishName: 'Laqqa', weight: 2 },
];

// var allWeight = 0;
// for (var i = 0; i < data.length; i++) {
// 	allWeight += data[i].weight;
// }

// console.log(allWeight);

var allWeight = 0;

// Ordinary function
function calCulateWeight(fish, indexjon, arr) {
	allWeight += fish.weight;
}

// Arrow function
// V1
// var calCulateWeight = (fish, index, arr) => {
// 	allWeight += fish.weight;
// };

// V2
// var calCulateWeight = (fish, index, arr) => (allWeight += fish.weight);

// V3
// var calCulateWeight = fish => (allWeight += fish.weight);

// data.forEach(calCulateWeight);

// console.log(allWeight);

// var random = [3, 4, 5];

// console.log(random.includes(3, -3));
