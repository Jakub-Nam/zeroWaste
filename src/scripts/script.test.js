import {
  clearElement,
  addActiveShowClasses,
  addToList
} from './script.js';

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
  test('should add "active" and "show" classes to element', async () => {
    const div = document.createElement('div');
    await addActiveShowClasses(div);
    expect(div.classList.contains('active')).toBe(true);
    expect(div.classList.contains('show')).toBe(true);
  });

  // test('call addToList with correct data', async () => {
  //   const getDataMock = jest.fn().mockReturnValue('sampleData');
  //   const addToListMock = jest.fn();
  //   jest.spyOn(global, 'addToList').mockImplementation(addToListMock);
  //   // Sprawdzenie, czy metoda getData została poprawnie wywołana
  //   expect(getDataMock).toHaveBeenCalled();

  //   // Sprawdzenie, czy metoda addToList została wywołana z poprawnymi danymi
  //   expect(addToListMock).toHaveBeenCalledWith('sampleData');

  //   // Przywrócenie oryginalnej implementacji metody addToList
  //   global.addToList.mockRestore();
  // })
  test('call addToList with correct data', () => {
    const getDataMock = jest.fn().mockReturnValue('sampleData');
    const addToListMock = jest.fn();
    jest.replaceProperty(global, 'addToList', {
      value: addToListMock
    });
  
    // Sprawdzenie, czy metoda getData została poprawnie wywołana
    expect(getDataMock).toHaveBeenCalled();
  
    // Sprawdzenie, czy metoda addToList została wywołana z poprawnymi danymi
    expect(addToListMock).toHaveBeenCalledWith('sampleData');
  
    // Przywrócenie oryginalnej wartości właściwości addToList
    jest.restoreAllMocks();
  });

});
// Mockowanie metody addToList


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