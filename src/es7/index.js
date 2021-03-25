/************************************************************************************
 Includes (strings and arrays)
 ***********************************************************************************/
 let numbers = [1, 2, 3, 7, 8];

 if (numbers.includes(7)){
   console.log('Value found!');
 } else {
  console.log('Value Not found');
 }

let myString = "Daniel Morales";
if (myString.includes('niel')){
  console.log('String found!');
} else {
  console.log('String Not found');
}

/************************************************************************************
 Square operations
 ***********************************************************************************/
 let base = 4;
 let exponent = 3;

 let result = base ** exponent;

 console.log(result);