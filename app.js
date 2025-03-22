document.addEventListener('DOMContentLoaded', () => {

    // get the elements
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('tasks-list');
    const addBtn = document.getElementById('add-task');
    const doneSound = new Audio('./assets/goodjob.mp3');

    // event listener when something is inputted
    addBtn.addEventListener('click', function() {

        const li = document.createElement('li');    // a new list element <li>

        const text = document.createTextNode(taskInput.value);  // text inputted stored in var

        const delBtn = document.createElement('button');    // a new button element <button>
        delBtn.textContent = 'Done';   // will say 'Done'
        delBtn.classList.add('done-btn');    // add a class to the button so we can style it

        if (taskInput.value !== '') {
            li.appendChild(text);
            li.appendChild(delBtn);

            taskList.appendChild(li);
            taskInput.value = '';
        }

    });

    // event listener for deleting.
    taskList.addEventListener('click', function(event) {
        if (event.target.classList.contains('done-btn')) {
            const listItem = event.target.parentElement;    // this is the <li> the user clicks
            
            if (listItem.style.textDecoration === 'line-through') {
                listItem.style.textDecoration = 'none';
                event.target.textContent = 'Done';
            } else {
                doneSound.currentTime = 0;
                doneSound.play();
                listItem.style.textDecoration = 'line-through';
                event.target.textContent = 'Undo';
            }
        }
    })
});