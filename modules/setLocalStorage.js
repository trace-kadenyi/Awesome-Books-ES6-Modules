const AddToStorge = (arrayOfTasks) => {
  window.localStorage.setItem('tasks', JSON.stringify(arrayOfTasks));
};

export default AddToStorge;