const input = document.querySelector('#title');
const author = document.querySelector('#Author');
const taskDiv = document.querySelector('#list');
const Add = document.querySelector('.add');

class AwesomeBooks {
  constructor() {
    // Empty Array To store The Tasks
    this.arrayOfTasks = [];
  }
}

const books = new AwesomeBooks();

// Check If theres Tasks In Local Storge
const checkLocal = (books) => {
  if (localStorage.getItem('tasks')) {
    books.arrayOfTasks = JSON.parse(localStorage.getItem('tasks'));
  }
};

const addElementToPageFrom = (books) => {
  // Empty Taskk Div
  taskDiv.innerHTML = '';
  // Looping on Array of Tasks
  books.forEach((task) => {
    // create Main Div
    const div = document.createElement('tr');
    div.className = 'task';
    div.setAttribute('data-id', task.id);
    // Add Title to the main div
    const title = document.createElement('td');
    title.className = 'titleTask';
    title.textContent = `"${task.title}" by`;
    title.style.marginRight = '7px';
    div.appendChild(title);
    // Add Author to the main div
    const Author = document.createElement('td');
    Author.className = 'AuthorTask';
    Author.textContent = task.author;
    div.appendChild(Author);
    // create remove button
    const span = document.createElement('button');
    span.className = 'del';
    span.type = 'button';
    span.appendChild(document.createTextNode('remove'));
    // Append Button To main Div
    div.appendChild(span);
    // Add task Div To Tasks container
    taskDiv.appendChild(div);
  });
};

const AddToStorge = (arrayOfTasks) => {
  window.localStorage.setItem('tasks', JSON.stringify(arrayOfTasks));
};

const getData = () => {
  const data = window.localStorage.getItem('tasks');
  if (data) {
    const tasks = JSON.parse(data);
    addElementToPageFrom(tasks);
  }
};

// use filter method
const deleteTask = (taskId) => {
  // eslint-disable-next-line eqeqeq
  books.arrayOfTasks = books.arrayOfTasks.filter((task) => task.id != taskId);
  AddToStorge(books.arrayOfTasks);
};

// click on task Element
const remover = () => {
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

// Trigger Get Data From Local Stroge Function
const addTaskToArray = (taskTitle, taskAuthor) => {
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

// Add task
const handlesubmit = () => {
  Add.onclick = () => {
    if (input.value !== '' && author.value !== '') {
      addTaskToArray(input.value, author.value); // Add task To Array of Tasks
      author.value = '';
      input.value = ''; // Empty Input Feild
    }
  };
};

// Add a single page navigation
const handleSinglePageNavigation = () => {
  const navItems = Array.from(document.querySelectorAll('.navItem'));
  const ListSection = document.querySelector('#ListSection');
  const AddNewSection = document.querySelector('#AddNewSection');
  const ContactSection = document.querySelector('#ContactSection');
  navItems.forEach((index) => {
    index.addEventListener('click', () => {
      switch (index.classList[1]) {
        case 'list':
          ListSection.classList.add('active');
          ListSection.classList.remove('close');
          AddNewSection.classList.add('close');
          ContactSection.classList.add('close');
          break;
        case 'AddNew':
          ListSection.classList.remove('active');
          ListSection.classList.add('close');
          AddNewSection.classList.add('active');
          AddNewSection.classList.remove('close');
          break;
        case 'contact':
          ListSection.classList.add('close');
          AddNewSection.classList.remove('active');
          AddNewSection.classList.add('close');
          ContactSection.classList.add('active');
          ContactSection.classList.remove('close');
          break;
        default:
      }
    });
  });
};

// const books = new AwesomeBooks();
handlesubmit(books);
getData(books);
checkLocal(books);
remover(books);
handleSinglePageNavigation(books);

// books.handlesubmit();
// books.getData();
// books.checkLocal();
// books.remover();
// books.handleSinglePageNavigation();