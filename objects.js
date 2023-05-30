// // program to create JavaScript object using object literal
// const employee = {
//   name: 'Thaslima',
//   empId: 2,
//   languages: ['html', 'css', 'javscript'],
//   greet: function() {
//       console.log('Hello everyone.');
//   },
// };

// console.log(typeof employee); // object

// // accessing the object value
// console.log(employee.name);
// console.log(employee.languages[0]);
// employee.greet();

//program to create JavaScript object using instance of an object
// const employee = new Object ( {
//   name: 'Thaslima',
//    empId: 2,
//    languages: ['html', 'css', 'javscript'],
//    greet: function() {
//       console.log('Hello everyone.');
//   }
// });

// console.log(typeof employee); // object

// // accessing the object value
// console.log(employee.name);
// console.log(employee.languages[0]);
// employee.greet();

// program to create JavaScript object using constructor

// function Employee() {
//   (this.name = "Thaslima"),
//     (this.age = 20),
//     (this.languages = ["html", "css", "js"]),
//     (this.greet = function () {
//       console.log("Hello everyone.");
//     });
// }

// const employee = new Employee();

// console.log(typeof Employee); // function

// // accessing the object value
// console.log(employee.name);
// console.log(employee.languages[0]);
// employee.greet();

// creating an object
let student = { };

// // adding a property
// student.name = 'Aafiya';

// // adding a method
// student.greet = function() {
//     console.log(`hello ${student.name}`);
// }

// // accessing a method
// student.greet(); // hello


// const person = {
//   name: "John",
//   age: 30,
//   "last name": "Brute", //special key

//   // accessing name property by using this.name
//   greet: function () {
//     console.log(`The name is ${this.name} `);
//   }
// };

// person.greet();

// delete person.age; //delete a property

// console.log(person);

// console.log(person.last name)//It will throw error
//square bracket access
// console.log(person["last name"]);

class Laptop {
  constructor(name, model, price) {
    this.name = name;
    this.model = model;
    this.price = price;
  }

  showPrice() {
    console.log(`Price of ${this.name} is ${this.price}`);
  }
}

const lapObj = new Laptop("Marker", "ASUS", "$3000");
lapObj.showPrice();


