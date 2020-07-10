const person: {
	name: string;
	age: number;
	hobbies: string[];
	role: [number, string];
} = {
	name: 'Maximilian',
	age: 30,
	hobbies: ['Sports', 'Cooking'],
	role: [2, 'author'], //tuple
};

// person.role.push('admin') // watch out for .push - TS will not catch err on tuples

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);

person.hobbies.forEach(hobby => console.log(hobby));
