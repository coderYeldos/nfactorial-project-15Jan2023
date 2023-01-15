// Homework

// Part 1

// Creation of object
const footballTeam = {
    name: 'FC InnoTeam',
    rank: 1,
    budget: '$4 bln',
    isAlive: true
}

console.log(footballTeam);


// Adding elements
footballTeam.coach = 'Carlo';
footballTeam['number of players'] = 25;
console.log(footballTeam);

// Removing elements
delete footballTeam.isAlive;
delete footballTeam['rank'];
console.log(footballTeam);

// Part 2

// Creation of empty object
const vehicle = {};

// Adding element
vehicle.brandName = "RR";
vehicle.model = "Phantom";

// Changing element
vehicle.model = "Ghost";


// Removing element
delete vehicle.model;


// Part 3
let salaries = {
	Aroo: 100,
	Dalida: 160,
	Samat: 130
}

let sum = 0;
for (let key in salaries) {
    sum += salaries[key];
}
console.log(sum);



