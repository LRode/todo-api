var person = {
	name: 'Lara',
	age: 21
};

function updatePerson(obj){
	obj.age = 24;
}

updatePerson(person);
console.log(person);

// Array example

var grades = [12, 88];

function addGrade(grades){
	// changes grades
	grades.push(55);

	//new variable. Does not affect argument grades
	grades = [13, 33, 99];
}

addGrade(grades);
console.log(grades);