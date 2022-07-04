import { addTaskToArray } from './addTask.js';

const Add = document.querySelector('.add');
const input = document.querySelector('#title');
const author = document.querySelector('#Author');

// Add task
export const handlesubmit = () => {
  Add.onclick = () => {
    if (input.value !== '' && author.value !== '') {
      addTaskToArray(input.value, author.value); // Add task To Array of Tasks
      author.value = '';
      input.value = ''; // Empty Input Feild
    }
  };
};