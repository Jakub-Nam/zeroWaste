import {
  clearElement,
  addActiveShowClasses
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

test('addActiveShowClasses should add "active" and "show" classes to an element', () => {
  const div = document.createElement('div');
  addActiveShowClasses(div);
  expect(div.classList.contains('active')).toBe(true);
  expect(div.classList.contains('show')).toBe(true);
});
