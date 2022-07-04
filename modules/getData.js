import { addElementToPageFrom } from './createBooks.js';

export const getData = () => {
  const data = window.localStorage.getItem('tasks');
  if (data) {
    const tasks = JSON.parse(data);
    addElementToPageFrom(tasks);
  }
};