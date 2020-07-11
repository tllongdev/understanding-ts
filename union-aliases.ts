type Combinable = number | string; // assign alias
type ConversionDescriptor = 'as-number' | 'as-text'; //union and literal

function combine(
	input1: Combinable, // alias
	input2: number | string, // union
	resultConversion: ConversionDescriptor
) {
	let result: number | string;
	return (typeof input1 === 'number' && typeof input2 === 'number') ||
		resultConversion === 'as-number'
		? (result = +input1 + +input2)
		: (result = input1.toString() + input2.toString());
}

const combineAges = combine(30, 26, 'as-number');
console.log(combineAges);

const combinedNames = combine('Max', 'Anna', 'as-text');
console.log(combinedNames);
