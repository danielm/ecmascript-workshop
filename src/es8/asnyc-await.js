const helloWorld = () => {
  return new Promise((resolve, reject) => {
    (true)
      ? setTimeout(() => resolve('hello world'), 3000)
      : reject('Test Error') // new Error
  });
};

const helloAsync = async () => {
  const hello = await helloWorld();

  console.log(hello);
};

helloAsync();

/*

*/
const anotherFunction = async () => {
  try {
    const hello = await helloWorld();
    console.log(hello);
  } catch (error) {
    console.log(`Error: ${error}`);
    console.log(error);
  }
};

anotherFunction();