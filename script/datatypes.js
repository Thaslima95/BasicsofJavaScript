//strings example
// const name = 'aafiya';
// const name1 = "thasnim";
// const result = `The names are ${name} and ${name1}`;

// console.log(result)


//Template Literals
// const str1=`Hellow World!`;
// const str2=`This is a string with a 'single quotes' in it`;
// const str3=`This is a string with "double quotes" in it`;


// console.log(str1)
// console.log(str2)
// console.log(str3)


//Multiline string using + operator
// const message='This is a long message \n' +
// 'that spans across multiple lines \n' +
// 'in the code.'

// console.log(message)


//Multiline string using template literals
// const message=`This is a long message 
// that spans across multiple lines 
// in the code.`

// console.log(message)


//concat
// const name="Thaslima";
// console.log('Hello '+ name)


//using template literal

// const nameTemplate="Thaslima"

// console.log(`Hello this is ${nameTemplate}`)



//template literals used with expression

// const result= 4+5 ;

// console.log(`The sum of 4 + 5 is ${result}`) 

// console.log(`${result < 10 ? 'Too Low': 'Very high'}`)//ternary operator
// //if the conditions satisfy it will return first value
// //otherwise return second value


//accessing string characters
// const name="Thaslima"

// // console.log(name[0])//prints T

// console.log(name.charAt(0))//prints T


//cannot be able modify the strings
//strings are immutable

// const name="Janiel"
// name[0]="D"
// console.log(name)//Janiel bcx strings are immutable

//you can assign the variable name to a new string
// let name="Janiel";
// name="Daniel";
// console.log(name)


// const name1="Thaslima";
// const name2="thaslima";

// console.log(name1===name2)//false
// //bcx javascript is case sensitive

// //length
// const name="Thaslima"
// console.log(name.length)


//String Objects
// const name1 = 'Thaslima';
// const name2 = new String('Thaslima');

// console.log(name1); // "Thaslima"
// console.log(name2); // "Thaslima"

// console.log(typeof name1); // "string"
// console.log(typeof name2); // "object"

// console.log(name1===name2)//false
//strict equality returns true only if type also same




// const number1 = 3/0;
// console.log(number1); // Infinity

// const number2 = -3/0;
// console.log(number2); // -Infinity

// // // strings can't be divided by numbers
// const number3 = "abc"/3; 
// console.log(number3);  // NaN


//BigInt value
const value1 = 9007199251247675676740998n;

// Adding two big integers
const result1 = value1 + 1n;
console.log(result1); // "9007199251247675676740998n"

const value2 = 9007199251247675676740998n;

// Error! BitInt and number cannot be added
const result2 = value2 + 1; 
console.log(result2); 

// // BigInt value
// const value1 = 900719925124740998n;

// // Adding two big integers
// const result1 = value1 + 1n;
// console.log(result1); // "900719925124740999n"

// const value2 = 900719925124740998n;

// // Error! BitInt and number cannot be added
// const result2 = value2 + 1; 
// console.log(result2); 


// let names;
// console.log(names); // undefined

// let namess = undefined;
// console.log(namess); // undefined

