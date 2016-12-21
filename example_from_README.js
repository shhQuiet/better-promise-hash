require('.');

let object = {
  one: new Promise((resolve, reject) => {
    resolve('somePromiseValue');
  }),
  two: 'someOtherValue'
};

Promise.hash(object).then((result) => {
  console.log(result.one); // echos "somePromiseValue"
  console.log(result.two); // echos "someOtherValue"
});