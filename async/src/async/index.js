const doSomethingAsync = () => new Promise((resolve, reject) => {
  (true)
  ? setTimeout(() => resolve('We resolved!'), 3000)
  : reject(new Error('We reject you'))
});

const doSomething = async () => {
  const something = await doSomethingAsync();

  console.log(something);
};

console.log('Before');
doSomething();
console.log('After');

/*
*/
const anotherFunction = async () => {
  try {
    const something = await doSomethingAsync();

    console.log(something);

  } catch (err){
    console.error(err);
  }
};

console.log('Before 1');
anotherFunction();
console.log('After 1');