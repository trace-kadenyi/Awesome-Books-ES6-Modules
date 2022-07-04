import { addElementToPageFrom } from './createBooks.js';
import { AddToStorge } from './setLocalStorage.js';
import { books } from '../scripts/index.js';

export const addTaskToArray = (taskTitle, taskAuthor) => {
  // Task Data
  const task = {
    id: Date.now(),
    title: taskTitle,
    author: taskAuthor,
  };
  // Push Task to Array of Tasks
  books.arrayOfTasks.push(task);
  // Add Tasks To page
  addElementToPageFrom(books.arrayOfTasks);
  // Add Tasks to  Local Storage
  AddToStorge(books.arrayOfTasks);
};