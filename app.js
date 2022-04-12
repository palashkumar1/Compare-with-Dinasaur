const dinodata = [
	{
		species: "Triceratops",
		weight: 13000,
		height: 114,
		diet: "Herbavor",
		where: "North America",
		when: "Late Cretaceous",
		fact: "First discovered in 1889 by Othniel Charles Marsh",
	},
	{
		species: "Tyrannosaurus Rex",
		weight: 11905,
		height: 144,
		diet: "Carnivor",
		where: "North America",
		when: "Late Cretaceous",
		fact: "The largest known skull measures in at 5 feet long.",
	},
	{
		species: "Anklyosaurus",
		weight: 10500,
		height: 55,
		diet: "Herbavor",
		where: "North America",
		when: "Late Cretaceous",
		fact: "Anklyosaurus survived for approximately 135 million years.",
	},
	{
		species: "Brachiosaurus",
		weight: 70000,
		height: 372,
		diet: "Herbavor",
		where: "North America",
		when: "Late Jurasic",
		fact: "An asteroid was named 9954 Brachiosaurus in 1991.",
	},
	{
		species: "Stegosaurus",
		weight: 11600,
		height: 79,
		diet: "Herbavor",
		where: "North America, Europe, Asia",
		when: "Late Jurasic to Early Cretaceous",
		fact:
			"The Stegosaurus had between 17 and 22 seperate places and flat spines.",
	},
	{
		species: "Elasmosaurus",
		weight: 16000,
		height: 59,
		diet: "Carnivor",
		where: "North America",
		when: "Late Cretaceous",
		fact: "Elasmosaurus was a marine reptile first discovered in Kansas.",
	},
	{
		species: "Pteranodon",
		weight: 44,
		height: 20,
		diet: "Carnivor",
		where: "North America",
		when: "Late Cretaceous",
		fact: "Actually a flying reptile, the Pteranodon is not a dinosaur.",
	},
	{
		species: "Pigeon",
		weight: 0.5,
		height: 9,
		diet: "Herbavor",
		where: "World Wide",
		when: "Holocene",
		fact: "All birds are living dinosaurs.",
	},
];
// Create Dino Constructor
class Dino {
	constructor(species, weight, height, diet, where, when, fact) {
		this.species = species;
		this.weight = weight;
		this.height = height;
		this.diet = diet;
		this.where = where;
		this.when = when;
		this.fact = fact;
		this.image = `images/${species.toLowerCase()}.png`;
	}
}

// Create Dino Objects

const dinoObject = dinodata.map(data => new Dino(data.species, data.weight, data.height, data.diet, data.where, data.when, data.fact)
)

// Create Human Object
let human = {}



//Dino Compare Method 1 
function compareheight(object1, object2) {
	let diff = object2.height - object1.height;
	return (object2.height > object1.height) ? `The ${object2.species} is ${diff} inches more than you!`
		: (object2.height < object1.height) ? `You're ${Math.abs(diff)} inches more than the ${object2.species}!`
			: `You're as same as ${object2.species}`;

}

//Dino Compare Method 2
function compareweight(object1, object2) {
	let diff = object2.height - object1.height;
	return (object2.height > object1.height) ? `The ${object2.species} is ${diff} lbs more than you!`
		: (object2.height < object1.height) ? `You're ${Math.abs(diff)} lbs more than the ${object2.species}!`
			: `You're as same as ${object2.species}`;

}

//Dino Compare Method 3
function comparediet(object1, object2) {
	return (object2.diet === object1.diet) ? `You and ${object2.species} has the same diet!`
		: `You have so different diet! ${object2.species} is ${object2.diet}`;

}
// change facts
function changeFact(x, obj, data) {
	let ans;
	switch (x) {
		case 1:
			//comparing weight 
			ans = compareweight(obj, data);
			return ans;
		case 2:
			// for comparing height
			ans = compareheight(obj, data);
			return ans;
		case 3:
			// for comparing diet 
			ans = comparediet(obj,data);
			return ans;
		case 4:
			// return fact
			return `The ${data.species} is ${data.diet} discovered in ${data.when}`;
		case 5:
			//return fact
			return `The ${data.species} is  discovered at ${data.where}`;
		case 6:
			//return fact
			return `The ${data.species} is ${data.diet},and fact about is ${data.fact}`;
		default:
			return `You know ${data.species} is ${data.fact}`;
	}
}


// Generate Tiles for each Dino in Array
function addTiles(obj) {
	const grid = document.getElementById('grid');
	dinoObject.forEach((data) => {
		//div
		const div = document.createElement('div');
		// image 
		const image = document.createElement('img');
		const img = data.image;
		image.src = img;

		//h3
		const h3 = document.createElement('h3');
		//p
		const p = document.createElement('p');

		if (data.species === 'human') {
			h3.textContent = obj.name;
		}
		else if (data.species === 'Pigeon') {
			h3.textContent = data.species;
			p.textContent = 'All birds are Dinosaurs.';
		}
		else {
			h3.textContent = data.species;
			const x = Math.floor((Math.random() * 7) + 1);
			p.textContent = changeFact(x, obj, data);
		}

		//Add tiles to DOM
		grid.appendChild(div);
		div.classList.add('grid-item');
		div.appendChild(h3);
		div.appendChild(image);
		div.appendChild(p);
	});
}
// Use IIFE to get human data from form

function getHumanData() {
	(function () {
		human.species = "human";
		human.name = document.getElementById("name").value;
		human.height = (Number(document.getElementById("feet").value) * 12) + Number(document.getElementById("inches").value);
		human.weight = document.getElementById("weight").value;
		human.dietdiet = document.getElementById("diet").value;
		human.image = './images/human.png';
		dinoObject.splice(4, 0, human);
	}())
	let form = document.getElementById('dino-compare');
	form.remove();
	addTiles(human);
}


// On button click, prepare and display infographic
const btn = document.getElementById('btn');
btn.addEventListener('click', getHumanData);
