const promiseGenerator = require('./promise-generator');
const returnPromise = promiseGenerator.returnPromise;

const promise = returnPromise('first promise');


promise
  .then((data) => {
    console.log('third');
    // const newData = 'another thing';
    // console.log("newData:",newData);
    console.log('data:', data);
  });

console.log('first');
console.log('promise:',promise);
console.log('second');

// Not the best way to do this
// setTimeout(()=>{
//   console.log('promise 6 seconds later:',promise);
//   console.log({promise});
// },1100);

//
// The RIGHT way to do this
//

   // <--- that is just a function call. no magic there!
  // .then(() => {
  //   console.log('it is alive!');
  // });
