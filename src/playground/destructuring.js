// -Object Destructuring-

// const person = {
//   name: 'Jérôme',
//   age: 32,
//   location: {
//     city: 'Bouzonville',
//     temp: 10
//   }
// };

// const { name: firstName = 'Anonymous', age } = person;
// console.log(`${firstName} is ${age}`);

// const { city, temp: temperature } = person.location;

// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}`);
// }

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// }

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName); // Penguin, Self-Published


// -Array Destructuring-

// const address = ['50 rue de la République', 'Bouzonville', 'France', '57320'];

// const [, city, country = 'Earth'] = address;
// console.log(`You are in ${city}, ${country}`);

const item = ['Coffee (cream)', '2.00€', '2.60€', '2.75€'];
const [drink,,mediumPrice] = item;


console.log(`A medium ${drink} costs ${mediumPrice}`);
