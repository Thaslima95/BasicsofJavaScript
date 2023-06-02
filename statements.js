//if else


// const age=42

// function eligibility(age)
// {

//     if(age < 10)
//     {
//         console.log("You are kid")
//     }
//     else if(age > 10 && age <35)
//     {
//         console.log("You are eligible to take this ride")
//     }
//     else{
//         console.log("Sorry you can't be able to take this ride")
//     }
// }

// eligibility(age)

//break
//stops the execution of the loop and comes out of the loop

// for(let i=0;i<10;i++)
// {
//     if(i>5)
//     {
//         break;
//     }
//     console.log(i)
// }

//continue skips the current iteration
//executes the next iteration
// for(let i=0;i<10;i++)
// {
//     if(i==5)
//     {
         
//         continue;//it skips the 5th iteration
       
//     }
//     console.log(i)
// }

//for..in
// const arr = [23, 54, 46, 3];
 
// let result = "";
// for (let i in arr) {
//     result += arr[i] + '\n';
// }
// console.log(result)

//while loop
//The while loop loops through a block of code as long as a specified condition is true.

// let stop=true;
// let i=0;
// while(stop)
// {
//    i++;
//    if(i==5)
//    {
//     stop=false;
//    }
//    console.log(i)

// }


//switch statements
// let a = 2 + 2;

// switch (a) {
//   case 3:
//     console.log('Too small.Its 3');
//     break;
//   case 4:
//    console.log( 'Exactly Its 4!' );
//     break;
//   case 5:
//     console.log( 'Too big.Its 5' );
//     break;
//   default:
//     console.log( "I don't know such values" );
// }


//grouping of cases
// let a = 3;

// switch (a) {
//   case 4:
//     console.log('Right!');
//     break;

//   case 3: // (*) grouped two cases
//   case 5:
//     console.log("Its the result two group of cases");
//     break;

//   default:
//     console.log('The result is strange. Really.');
// }

//Type matters

// let arg = "3"
// switch (arg) {
//   case '0':
//   case '1':
//     console.log( 'One or zero' );
//     break;

//   case '2':
//     console.log( 'Two' );
//     break;

//   case 3:
//     console.log( 'Never executes!' );
//     break;
//   default:
//     console.log( 'An unknown value' );
// }


//for loop
//print even numbers
// for(i=1;i<=10;i++)//begin;condition;step
// {
//     if(i%2===0)
//     {
//         console.log(i)
//     }
// }

//skip the parts of for loop
// let i = 0; // we have i already declared and assigned

// for (; i < 3; i++) // no need for "begin"
// { 
//   console.log( i ); 
// }

//skips the begin and step part

// let i = 0;

// for (; i < 3;)
//  {
//   console.log( i++ );
// }

//for.of arrays
// let fruits = ["Apple", "Orange", "Plum"];

// // iterates over array elements
// for (let fruit of fruits) {
//   console.log( fruit );
// }

//Looping over string
// let str="I am Thaslima"

// for(let s of str)
// {
//     console.log(s)
// }

//for..in arrays
let arr1=[1,"three",4,"five",true]

for(let a in arr1)
{
    console.log(arr1[a])
}



