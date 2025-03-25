document.addEventListener('DOMContentLoaded', () => {

    // get the elements

    // for the current date
    const currDate = document.getElementById('current-date');
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const today = new Date().toLocaleDateString('en-US', options);
    currDate.textContent = today;

    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('tasks-list');
    const addBtn = document.getElementById('add-task');
    const doneSound = new Audio('./assets/goodjob.mp3');

    // function when something is inputted
    const addTask = () => {
        if (taskInput.value !== '') {
            const li = document.createElement('li');    // a new list element <li>

            // adds text into <p> element
            const textp = document.createElement('p');
            textp.textContent = taskInput.value;

            // creates a done button
            const doneBtn = document.createElement('button');
            doneBtn.textContent = '✓';
            doneBtn.classList.add('done-btn');

            // create a delete button
            const delBtn = document.createElement('button');    // a new button element <button>
            delBtn.textContent = 'x';   // will say 'X'
            delBtn.classList.add('del-btn');    // add a class to the button so we can style it

            // add the text and buttons into the <li> parent element
            li.appendChild(doneBtn);
            li.appendChild(textp);
            li.appendChild(delBtn);

            taskList.appendChild(li);

            // reset the input field
            taskInput.value = '';
        }
    };

    // event listener for pressing add button
    addBtn.addEventListener('click', addTask);

    // event listerner for pressing enter key
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // event listener for deleting.
    taskList.addEventListener('click', function(event) {
        if (event.target.classList.contains('done-btn')) {
            const listItem = event.target.parentElement;    // gets <li>
            const textP = listItem.querySelector('p');  // get the <p> element directly
            
            if (textP.style.textDecoration === 'line-through') {
                // if text is crossed out, uncross it and change the done button back to normal
                textP.style.textDecoration = 'none';
                event.target.textContent = '✓';
            } else {
                // if task is not done, and user presses done, cross it out and change done button to redo icon
                doneSound.currentTime = 0;
                doneSound.play();
                textP.style.textDecoration = 'line-through';
                event.target.textContent = '↺';
            }
        }
        else if (event.target.classList.contains('del-btn')) {
            // delete task
            const listItem = event.target.parentElement;
            taskList.removeChild(listItem);
        }
    })
});