const text1 = 'Thaslima';
const text2 = 'Banu';
const text3 = '     Web Developer    ';

// concatenating two strings
const result1 = text1.concat(' ', text2);
console.log(result1); 

// converting the text to uppercase
const result2 = text1.toUpperCase();
console.log(result2); 



// removing whitespace from the string
const result3 = text3.trim();
console.log(result3); 

// converting the string to an array
const result4 = text1.split();
console.log(result4); 

// slicing the string
const result5= text1.slice(1, 3);//end-1->end value
console.log(result5); 


// converting the text to lowercase
const result6 = text1.toLowerCase();
console.log(result6); 

//gets part of a string
const result7=text1.substr(2,5)//it includes the last value
console.log(result7)

//another method to get part of a string
const result8=text1.substring(2,5)//it eliminate last value return string upto end-1
console.log(result8)

//includes
const result9=text1.includes('s')
console.log(result9)

//search
const result10=text1.search('as')
console.log(result10)


//replace
const text4="Hello Javascript"
const result11=text4.replace("Javascript","world")
console.log(result11)