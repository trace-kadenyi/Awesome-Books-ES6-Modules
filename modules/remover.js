import { deleteTask } from './deleteTask.js';

const taskDiv = document.querySelector('#list');

export const remover = () => {
  taskDiv.addEventListener('click', (e) => {
    // remove Element from page
    if (e.target.classList.contains('del')) {
      // remove task from Local storage
      deleteTask(e.target.parentElement.getAttribute('data-id'));
      // Remove Element from page
      e.target.parentElement.remove();
    }
  });
};
