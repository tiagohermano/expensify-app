// const person = {
//   name: 'Andrew',
//   age: 27,
//   location: {
//     city: 'Philadelphia',
//     temp: 89
//   }
// };
//
// const { name, age } = person;
// console.log(`${name} is ${age}`);
//
// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}`);
// };

const book = {
  title: 'Ego is the enemy',
  author: 'Ryan Holiday',
  publisher: {
    name: 'Penguin Books'
  }
};

const { name: publisherName = 'Self-Published' } = book.publisher;
console.log(publisherName);
