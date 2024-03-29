const functions = require('./promise-generator');

const returnPromise = functions.returnPromise;
const returnRejectedPromise = functions.returnRejectedPromise;

// throw new Error('ooooops');

returnPromise('one',1000)
  .then((data) => {
    console.log('promise one:',data);
    return returnRejectedPromise('two',1000);
  })
  .catch((err) => {
    // throw err;
    console.log('different err:',err);
//  return returnPromise('error handling promise',1);
//  return 42;
  })
  .then((data) => {
    console.log('promise two:',data);
    return returnPromise('three',1000);
  })
  .then((data) => {
    console.log(data);
    return returnPromise('four',1000);
  })
  .then((data) => {
    console.log(data);
    return returnPromise('five',1000);
  })
  .then((data) => {
    console.log(data);
    return returnPromise('six',1000);
  })
  .catch((err) => {
    // throw err;
    console.log('err:',err);
  })
  ;
