/************************************************************************************
 Object entries
 ***********************************************************************************/

 const data = {
   name: 'Daniel',
   age: 36,
   country: 'UY'
 }

 const myEntries = Object.entries(data);
 console.log(myEntries);
 console.log(myEntries.length);

 /************************************************************************************
 Object values
 ***********************************************************************************/
 const myValues = Object.values(data);
 console.log(myValues);
 console.log(myValues.length);

 /************************************************************************************
 Object keys
 ***********************************************************************************/
 const myKeys = Object.keys(data);
 console.log(myKeys);
 console.log(myKeys.length);

/************************************************************************************
 Padding
 ***********************************************************************************/
const string = "Hello";

console.log(string.padStart(8, ' ------'));
console.log(string.padEnd(12, ' -------'));
console.log('food'.padEnd(12, ' -------'));

/************************************************************************************
 Tailing commas
 ***********************************************************************************/
 const data = {
  name: 'Daniel',
  position: 'Developer', // <-- yep, this works now
}