/************************************************************************************
 DEFAULT PARAMS
 ***********************************************************************************/

// old way
function printUserDetails(name, age, country)
{
  var name = name || 'Daniel';
  var age = age || 36;
  var country = country || 'UY';

  console.log(name, age, country);
}

// es6
function printUserDetails2(name = 'Daniel', age='36', country = 'UY'){
  console.log(name, age, country);
}

printUserDetails2();
printUserDetails2('Cristina', 38, 'BR');

/************************************************************************************
 TEMPLATE LITERALS
 ***********************************************************************************/
function giveMeSomething()
{
  return 'Apple';
}

let hello = 'Hello';
let world = 'World';
let phrase = hello + ' ' + world;
let phrase2 = `${hello} ${world}: ${giveMeSomething()}`;

console.log(phrase);
console.log(phrase2);

/************************************************************************************
 MULTILINE STRINGS
 ***********************************************************************************/
// old way
let lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. \n" +
  " Curabitur feugiat mollis quam eget consequat.";

// es6
let lorem2 = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Curabitur feugiat mollis quam eget consequat.`;

console.log(lorem2);

/************************************************************************************
 DECONSTRUCT ELEMENTS
 ***********************************************************************************/
let person = {
  'name': 'Daniel',
  'age': 36,
  'country': 'UY'
};

//old way
console.log(person.name, person.age);

// es6
let {name, country} = person;
console.log(name, country);

/************************************************************************************
 SPREAD OPERATOR
 ***********************************************************************************/
let team1 = ['Alvaro', 'Daniel'];
let team2 = ['Noelia', 'Paola'];

let education = ['Jose', 'Estela', ...team1, ...team2];

console.log(education);

/************************************************************************************
 VAR vs LET vs CONST
 ***********************************************************************************/
{
  var myGlobalVar = "Global Var";
}

{
  let myGlobalLet = "Global let";

  console.log(myGlobalLet);
}

console.log(myGlobalVar);//myGlobalLet not available here

//--

const a = 'a';
//a = 'b';

console.log(a);

/*
    keyword     | const |  let  |  var
    global s.   |   NO     NO      YES
    function s. |   YES    YES     YES
    block s.    |   YES    YES     NO
    reasign     |   NO     YES     YES
*/

/************************************************************************************
 CREATE OBJECTS FROM PROPERTIES
 ***********************************************************************************/
let name = 'Daniel';
let age = 36;

// old way
let obj = {name: name, age: age};

// es6
let obj2 = {name, age};

console.log(obj2);

/************************************************************************************
 ARROW FUNCTIONS
 ***********************************************************************************/

 const names = [
   {
     name: 'Daniel', age: 36
   },
   {
    name: 'Noelia', age: 31
  },
 ];

 // oldway
 let listOfNames = names.map(function(item){
   return item.name;
 });

 console.log(listOfNames);

 // es6
 let listOfNames2 = names.map(item => item.name);
 console.log(listOfNames2);

/************************************************************************************
 PROMISES
 ***********************************************************************************/
const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if (false){
      resolve('All good bro!');
    } else {
      reject('Ops, i did it again');
    }
  });
};

helloPromise()
  .then(response => console.log(`All goochi: ${response}`))
  .catch(error => console.log(`Error: ${error}`));

/************************************************************************************
 CLASSES
 ***********************************************************************************/

 class Calculator {
   constructor(){
     this.valueA = 0;
     this.valueB = 0;
   }

   sum(valueA, valueB){
     this.valueA = valueA;
     this.valueB = valueB;

     return this.valueA + this.valueB;
   }
 }

 const calc = new Calculator();
 console.log(calc.sum(2, 2));

 /************************************************************************************
 Modules, import and Export
 ***********************************************************************************/
import hello from './module';
//import { hello } from './module'
//import { hello, bye } from './module'
//import { hello, bye as byeGreeting } from './module'
//import * as allGreetings from './module'
//console.log(allGreetings.hello())


console.log(hello());

/************************************************************************************
 Generatros
 ***********************************************************************************/
function* helloWorld()
{
  if (true){
    yield 'Hello, ';
  }

  if (true){
    yield 'World';
  }

  return false;
}

const myGenerator = helloWorld();
console.log(myGenerator.next());
console.log(myGenerator.next());
console.log(myGenerator.next());