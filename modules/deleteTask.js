import AddToStorge from './setLocalStorage.js';
import books from '../scripts/index.js';

const deleteTask = (taskId) => {
  // eslint-disable-next-line eqeqeq
  books.arrayOfTasks = books.arrayOfTasks.filter((task) => task.id != taskId);
  AddToStorge(books.arrayOfTasks);
};

export default deleteTask;