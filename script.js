const textinput = document.getElementById('textinput');
const addTaskbtn = document.getElementById('addTaskbtn');
const tasklist = document.getElementById('tasklist');



addTaskbtn.addEventListener('click', addTask);

function addTask(){
    const taskText = textinput.value.trim();
    if(taskText==''){
        return;
    }


    const taskItem = document.createElement('li');
    taskItem.className = 'task';

    taskItem.innerHTML = `<span>${taskText}</span><button class="deleteBtn">X</button>`

    tasklist.appendChild(taskItem);
    textinput.value = '';

    const deleteBtn = taskItem.querySelector('.deleteBtn')
  const deleteBtn = taskItem.querySelector('.deleteBtn')  deleteBtn.addEventListener('click',deleteTask)

    // tasklist.appendchile(taskItem);
    // taskinput.value='';

    // const tasktext = textinput.value;
    // console.log('hello',tasktext);
}
function toggleComplete(event) {

if(event.target.tagName =='BUTTON') {

return;
}
console.log('this', this.classList.toggle);

this.classList.toggle('completed')
function deleteTask(event){
    event.stopPropagation();
    const taskItem = this.parentElement;
    tasklist.removeChild(taskItem);
}