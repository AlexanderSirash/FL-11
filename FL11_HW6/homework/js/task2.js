const a = +prompt('Please insert a', '0');
const b = +prompt('Please insert b', '0');
const c = +prompt('Please insert c', '0');

if (a + b > c && a + c > b && b + c > a) {
	if (a === b && b === c && a === c) {
		console.log('Equivalent triangle');
	} else if (a === b || b === c || a === c) {
		console.log('Isosceles triangle');
	} else {
		console.log('Normal triangle');
	}
} else {
	console.log('Triangle doesn’t exist');
}
