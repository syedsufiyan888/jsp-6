const textinput = document.getElementById('textinput');
const addTaskbtn = document.getElementById('addTaskbtn');
const tasklist = document.getElementById('tasklist');



addTaskbtn.addEventListener('click', addTask());

function addTask(){
    const tasktext = textinput.value;
    console.log('hello',tasktext);
}
addTask()