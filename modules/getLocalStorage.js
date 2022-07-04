export const checkLocal = (books) => {
  if (localStorage.getItem('tasks')) {
    books.arrayOfTasks = JSON.parse(localStorage.getItem('tasks'));
  }
};