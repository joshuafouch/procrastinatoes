document.addEventListener('DOMContentLoaded', () => {

    // get the elements
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('tasks-list');
    const addBtn = document.getElementById('add-task');

    // event listener when something is inputted
    addBtn.addEventListener('click', function() {

        const li = document.createElement('li');    // a new list element <li>

        const text = document.createTextNode(taskInput.value);  // text inputted stored in var

        const delBtn = document.createElement('button');    // a new button element <button>
        delBtn.textContent = 'Delete';   // will say 'Delete'
        delBtn.classList.add('del-btn');    // add a class to the button so we can style it

        if (taskInput.value !== '') {
            li.appendChild(text);
            li.appendChild(delBtn);

            taskList.appendChild(li);
            taskInput.value = '';
        }

    });
});