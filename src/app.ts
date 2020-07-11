// unknown type
let userInput: unknown, userName: string;

userInput = 5;
userInput = 'Max';
typeof userInput === 'string' && (userName = userInput);

// never type
function generateError(message: string, code: number): never {
	throw { message: message, errorCode: code };
}

generateError('An error occurred!', 500);
