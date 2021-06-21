function is_array(a) {
	return Array.isArray(a);
}
console.log(is_array("w3resource"));
console.log(is_array([1, 2, 4, 0]));


function clone_array(a) {
	return a.slice(0, a.length);
}
console.log(clone_array([1, 2, 4, 0]));
console.log(clone_array([1, 2, [4, 0]]));

function first(a, b) {
	if (!b) return a[0];
	return a.slice(0, b);
}

console.log(first([7, 9, 0, -2]));
console.log(first([], 3));
console.log(first([7, 9, 0, -2], 3));
console.log(first([7, 9, 0, -2], 6));
console.log(first([7, 9, 0, -2], -3));


let myColor = ["Red", "Green", "White", "Black"];
myColor.join(",");
myColor.join("+");


var arr1 = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];

arr1 = arr1.sort();

a = [1, arr1[0]];

let tempCount = 1;

for (let i = 1; i < arr1.length; i++) {
	if (arr1[i] == arr1[i - 1]) {
		tempCount++;
	} else {
		tempCount = 1;
	}

	if (tempCount > a[0]) {
		a[0] = tempCount;
		a[1] = arr1[i];
	}
}

console.log(`${a[1]} (${a[0]} times)`);