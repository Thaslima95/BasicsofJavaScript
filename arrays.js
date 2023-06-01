//using literal

// const array1=["one",2,"Three",false]

// console.log(array1)

//using new keyword
// const array1=new Array("one",2,"Three",false)

// console.log(array1)

// const array1 = [
//     {'name': 'Thaslima'},
//     [1, 2 ,3],
//     function hello() { console.log('hello')}
// ];

// console.log(array1)


//Accessing array elements
//array index value starts from 0
// const array1=["one","two",false]

// console.log(array1[0])
// console.log(array1[2])


// let array1 = ['eat', 'sleep'];

// // add an element at the end
// array1.push('exercise');

// console.log(array1); //  ['eat', 'sleep', 'exercise']

//add an element to begining of an array use unshift()
// let array1 = ['eat', 'sleep'];

// //add an element at the start
// array1.unshift('work'); 

// console.log(array1); // ['work', 'eat', 'sleep']

//change element of  an array
// array1[1]="Walking"

// console.log(array1)//[ 'work', 'Walking', 'sleep' ]

//Suppose, an array has two elements.
// If you try to add an element at index 4 (fifth element), the third & fourth element will be undefined

// array1[4]="Drinking water"

// console.log(array1)


//Basically, if you try to add elements to high indices, the indices in between will have undefined value.


//remove an element from array

// console.log(array1)

// array1.pop()

// console.log(array1)//It removes the last element from array


let array1 = ['eat', 'sleep','walking'];

// //The shift() method removes the first element and also returns the removed element.

// let element=array1.shift()//removes first element from array

// console.log(element)
// console.log(array1)


//array length


// this gives the total number of elements in an array

// console.log(`Length of the array is ${array1.length}`)

let array2 = ['sleep', 'work', 'exercise']
let newactiviity = ['eat'];

// sorting elements in the alphabetical order
// array2.sort();
// console.log(array2); // ['exercise', 'sleep', 'work']

// //finding the index position of string
// const position = array2.indexOf('work');
// console.log(position); // 2

// const pos=array2.indexOf("Sleeping")
// console.log(pos)//element is not present in array
// //return -1

// slicing the array elements
const array3 = array2.slice(1);
console.log(array3); //[ 'work', 'exercise' ]

// concatenating two arrays
const activity = array2.concat(array3);
console.log(activity); // [ 'sleep', 'work', 'exercise', 'work', 'exercise' ]


// //toString()
// console.log(array2.toString())

// //join
// console.log(array2.join('^'))

// //splice
// //The splice() method can be used to add new items to an array

// array2.splice(2, 0, "Riding", "Running");
// //first argument denotes the position to add an element
// //second argument denotes how many elements needs to remove

// console.log(array2)