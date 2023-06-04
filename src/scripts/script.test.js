import {
  clearElement,
  addActiveShowClasses,
  addToList
} from './script.js';
import {
  getData
} from './database.js'
import * as script from './script.js'
import * as database from './database.js'

jest.mock('./database.js', () => {
  return () => ({
    db: jest.fn()
  });
});

test('clearElement should clear innerHTML of element', () => {
  const ul = document.createElement('ul');
  ul.innerHTML = '<li>X</li>';
  expect(clearElement(ul)).toBe('');
})

describe('addActiveShowClasses', () => {

  test('should add "active" and "show" classes to an element', () => {
    const div = document.createElement('div');
    addActiveShowClasses(div);
    expect(div.classList.contains('active')).toBe(true);
    expect(div.classList.contains('show')).toBe(true);
  });

  test('addToList should be called', () => {
    const addToListMock = jest.fn();
    jest.spyOn(script, 'addToList').mockImplementation(addToListMock);

    addToList('sampleData');
    // addToListMock('sampleData');
    // Sprawdzenie, czy metoda addToList została wywołana z poprawnymi danymi
    expect(addToListMock).toHaveBeenCalledWith('sampleData');

    // Przywrócenie oryginalnej implementacji addToList
    script.addToList.mockRestore();
  });

  test('getData should be called', () => {
    const getDataMock = jest.fn();
    // const getDataMock = jest.fn().mockReturnValue();
    jest.spyOn(database, 'getData').mockImplementation(getDataMock);

    getData();
    // Sprawdzenie, czy metoda getData została poprawnie wywołana
    expect(getDataMock).toHaveBeenCalled();

  });

});


// 

// test('should log error when an exception occurs', async () => {
//   const consoleSpy = jest.spyOn(console, 'log');
//   const main = document.createElement('div');
//   const error = new Error('Sample error');

//   // Mockowanie metody main.classList.add, aby rzucić błąd
//   jest.spyOn(main.classList, 'add').mockImplementation(() => {
//     throw error;
//   });

//   // Wywołanie funkcji showMain
//   await showMain();

//   // Sprawdzenie, czy błąd został poprawnie zalogowany
//   expect(consoleSpy).toHaveBeenCalledWith(error);

//   // Przywrócenie oryginalnej implementacji metody main.classList.add
//   main.classList.add.mockRestore();
//   console.log.mockRestore();
// });