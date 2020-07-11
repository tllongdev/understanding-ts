function combine(input1: number | string, input2: number | string) {
	let result: number | string;
	return typeof input1 === 'number' && typeof input2 === 'number'
		? (result = input1 + input2)
		: (result = input1.toString() + input2.toString());
}

const combineAges = combine(30, 26);
console.log(combineAges);

const combinedNames = combine('Max', 'Anna');
console.log(combinedNames);
