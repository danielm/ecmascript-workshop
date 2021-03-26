const somethingWillHappen = () => {
  return new Promise((resolve, reject) => {
    if (true){
      resolve('We did it !');
    } else {
      reject('Ops, we did it again');
    }
  });
};

/*somethingWillHappen()
  .then(resposne => console.log(resposne))
  .catch(error => console.error(error));
*/

/*
*/

const somethingWillHappen2 = () => {
  return new Promise((resolve, reject) => {
    if (true){
      setTimeout(() => {
        resolve('We did it 2 !');
      }, 2000);
    } else {
      reject(new Error('Ops, we did it again 2'));
    }
  });
};

/*somethingWillHappen2()
  .then(resposne => console.log(resposne))
  .catch(error => console.error(error));
*/

/*
*/
Promise.all([somethingWillHappen(), somethingWillHappen2()])
  .then(response => {
    console.log('Array of results', response);
  })
  .catch(error => {
    console.error(error)
  });