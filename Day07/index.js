var student = { name: "David Rayy", sclass: "VI", rollno: 12 };

for (key in student) console.log(key);

var student = { name: "David Rayy", sclass: "VI", rollno: 12 };

console.log("Defore delete", student);
delete student.rollno;
console.log("After delete", student);

var student = { name: "David Rayy", sclass: "VI", rollno: 12 };
var size = 0;
for (key in student) size++;

console.log("size", size);

var library = [
	{ author: "Bill Gates", title: "The Road Ahead", readingStatus: true },
	{ author: "Steve Jobs", title: "Walter Isaacson", readingStatus: true },
	{
		author: "Suzanne Collins",
		title: "Mockingjay: The Final Book of The Hunger Games",
		readingStatus: false,
	},
];

console.table(library);

const cylinder = {
	pi: Math.PI,
	radius: 10,
	height: 10,
	volume: function () {
		return this.pi * Math.pow(this.radius, 2) * this.height;
	},
};

var vol = parseFloat(cylinder.volume().toFixed(4));

console.log(vol);



var library = [
	{ title: "The Road Ahead", author: "Bill Gates", libraryID: 1254 },
	{ title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4264 },
	{
		title: "Mockingjay: The Final Book of The Hunger Games",
		author: "Suzanne Collins",
		libraryID: 3245,
	},
];

library.sort((a, b) => a.libraryID - b.libraryID);