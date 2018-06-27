import expenses from '../tests/fixtures/expenses';
import * as firebase from 'firebase';
var config = {
  apiKey: "AIzaSyCTGYXZakQDrrckHgLrNLfP791xONLnSDw",
  authDomain: "expensify-1b170.firebaseapp.com",
  databaseURL: "https://expensify-1b170.firebaseio.com",
  projectId: "expensify-1b170",
  storageBucket: "expensify-1b170.appspot.com",
  messagingSenderId: "371028207274"
};
firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.val());
// })

// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];
//   snapshot.forEach((child) => {
//     expenses.push({
//       id: child.key,
//       ...child.val()
//     });
//   })
//   console.log(expenses);
// })
//
// setTimeout(() => {
//   database.ref('expenses/-LFxEaU4fNKHurM9_fn1').update({
//     amount: 2000
//   });
// }, 5000)
// database.ref('expenses').push(expenses[0]);

// database.ref().on('value', (snapshot) => {
//   const name = snapshot.val().name;
//   const jobTitle = snapshot.val().job.title;
//   const jobCompany = snapshot.val().job.company;
//
//   console.log(`${name} is a ${jobTitle} at ${jobCompany}`);
// });
//
// setTimeout(() => {
//   database.ref('job/company').set('Spotify');
// }, 3500);

// database.ref().set({
//   name: 'Tiago Hermano',
//   age: 22,
//   stressLevel: 6,
//   job: {
//     title: 'Software developer',
//     company: 'Google'
//   },
//   location: {
//     city: 'Goiania',
//     country: 'Brazil'
//   },
// });
//
// database.ref('attributes').set({
//   height: 1.92,
//   weight: 76
// }).then(() => {
//   console.log('it worked');
// }).catch((e) => {
//   console.log('failed.', e);
// });
// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// });
