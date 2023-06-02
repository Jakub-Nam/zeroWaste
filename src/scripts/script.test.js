// import {
//     setData,
//     getData,
//     deleteDoc
// } from "./database.js";
// import {
//     returnUserId
// } from "./auth.js"

// import { addToList } from './script.js';
// describe('Database Tests', () => {
//     let btnGetData;

//     beforeEach(() => {
//       // Tworzenie i dodawanie elementu do drzewa DOM
//       btnGetData = document.createElement('button');
//       document.body.appendChild(btnGetData);
//     });

//     test('Test Case', () => {
//       // Testy, które wymagają elementu btnGetData
//       // ...
//     });
//   });



// describe('addToList', () => {
//     let foodObjects;
//     let ulEle;

//     beforeEach(() => {

//     btnGetData = document.createElement('button');
//     btnGetData.classList.add('getData');
//     document.body.appendChild(btnGetData);

//     ulEle = document.createElement('ul');
//     foodObjects = Promise.resolve([{
//             docId: 1,
//             nameFood: 'Pizza'
//         },
//         {
//             docId: 2,
//             nameFood: 'Burger'
//         },
//     ]);
// });

// afterEach(() => {
//     ulEle = null;
//     foodObjects = null;
// });

// test('should add list items to ulEle', async () => {
//     await addToList(foodObjects);

//     expect(ulEle.innerHTML).toContain('Pizza');
//     expect(ulEle.innerHTML).toContain('Burger');
// });

// test('should clear ulEle before adding list items', async () => {
//     ulEle.innerHTML = '<li>Existing Item</li>';

//     await addToList(foodObjects);

//     expect(ulEle.innerHTML).not.toContain('Existing Item');
// });
// });
test('Test Case', () => {
    // Testy, które wymagają elementu btnGetData
    // ...
});