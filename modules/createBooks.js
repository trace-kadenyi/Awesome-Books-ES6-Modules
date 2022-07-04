const taskDiv = document.querySelector('#list');

export const addElementToPageFrom = (books) => {
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