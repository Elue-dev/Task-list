const ul = document.querySelector ('.collection');
const taskInput = document.querySelector ('#task');
const form = document.querySelector ('#task-form');

document.body.addEventListener('click', (e)=> {
  if(e.target.parentElement.classList.contains('delete-item')){
    if(confirm('Are you sure you want to remove this task?')){
      e.target.parentElement.parentElement.remove();
      }
  }
});
 
 
  form.addEventListener('submit', (e) => {
    e.preventDefault();
   
    alert(`You entered the task: ${taskInput.value}`);
    
    
   
     const li = document.createElement('li');
      li.appendChild(document.createTextNode(taskInput.value));
       li.className = 'collection-item';
      
       ul.appendChild(li);
      
      
       const link = document.createElement('a');
       link.className = 'delete-item secondary-content'
       link.innerHTML = '<i class = "fa fa-remove"></i>';
       li.appendChild(link);

      
       if(taskInput.value === ''){
        alert('Add a Task to input field before submission');
        li.style.display = 'none';
     }
      else{
      li.style.display = 'block';
      }
   
      taskInput.value = '';
  });
 
 


const clearTasks = document.querySelector('.clear-tasks');

clearTasks.addEventListener('click', () => {
  if(confirm('Are you sure you want to clear all tasks?')){
  while(ul.firstChild){
    ul.removeChild(ul.firstChild);
    }
   }
  });

