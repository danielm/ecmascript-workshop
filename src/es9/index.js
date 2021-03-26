/*
  Rest parameters
*/

const obj = {
  name: 'Daniel',
  age: 36,
  country: 'UY'
};

let {name, ...all} = obj;
console.log(name);
console.log(all);

/*
  Porpagation Properties
*/
const obj = {
  name: 'Daniel',
  age: 36
};

const obj2 = {
  ...obj,
  country: 'UY'
};

console.log(obj2);

/*
  Promise Finally
*/
const helloWorld = () => {
  return new Promise((resolve, reject) => {
    (true)
      ? setTimeout(() => resolve('Hello World', 3000))
      : reject('Huston, we have problems');
  });
};

helloWorld()
  .then(response => console.log(response))
  .catch(error => console.log(error))
  .finally(() => console.log('This is over'));

/*
  Regex
*/
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec('1987-03-06');
const year = match[1];
const month = match[2];
const day = match[3];

console.log(year, month, day);