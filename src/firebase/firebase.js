import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const db = firebase.database();

export { firebase, db as default };

// // child_removed

// db.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());  
// });

// // child_changed

// db.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val()); 
// });

// // child_added

// db.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val()); 
// });

// db.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];
//   snapshot.forEach((childSnapshot) =>{
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });
//   console.log(expenses);  
// }, (e) => {
//   console.log('something went wrong!', e);  
// });

// db.ref('expenses')
//   .once('value')
//   .then((snapshot)=> {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       })
//     });  
//     console.log(expenses);    
//   });

// db.ref('expenses').push({
//   description: 'Rent',
//   amount: 35000,
//   createdAt: 98765432100,
//   note: 'My first expense this month'
// });

// db.ref('notes').push({
//   title: 'Course Topics',
//   body: 'React Native, Angular, Python'
// });

// db.ref('notes/-L7UD-ZV9degsMzlp6y9').remove();

// db.ref().on('value', (snapshot) => {
//   const { name, job: { title, company } } = snapshot.val();
//   console.log(`${name} is a ${title} at ${company}.`);  
// }, (e) => {
//   console.log('error fetching data', e);  
// });

// db.ref('location/city')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);    
//   })
//   .catch((e) => {
//     console.log('error fetching data', e);    
//   });

// db.ref().set({
//   name: ' Jérôme Meichelbeck',
//   age: 32,
//   job: {
//     title: 'unemployed',
//     company: 'Pole Emploi'
//   },
//   stressLevel: 4,
//   location: {
//     city: 'Bouzonville',
//     country: 'France'
//   }
// }).then(() => {
//   console.log('Data is saved');
// }).catch((e) => {
//   console.log('This failed', e);
// });

// db.ref().update({
//   stressLevel: 9,
//   'job/company': 'prout',
//   'location/city': 'Creutzwald'
// });

// db.ref()
//   .remove()
//   .then(() => {
//     console.log('Removed isSingle successfully');
//   }).catch((e) => {
//     console.log(':(', e);

//   });