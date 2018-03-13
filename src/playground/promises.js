const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      name: 'Jérôme',
      age: 32
    });
  }, 2000);
});

console.log('before');

promise.then((data) => {
  console.log('1', data);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('This is my other promise');
    }, 2000);
  });

}).then((str) => {
  console.log(str);
}).catch((error) => {
  console.log('error', error);
});

console.log('after');
