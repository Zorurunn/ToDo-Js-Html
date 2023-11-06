
const taskTitle = document.querySelector('#title');
const taskDescription = document.querySelector('#description');
const taskSubmit = document.querySelector('.task_submit');
const inProgressList = document.querySelector('.in-progress-list');
const doneList = document.querySelector('.donelist');
const hiddenAdd = document.querySelector('.hiddenAdd');
const addNewTask = document.querySelector('.addNewTask');
const form = document.querySelector("form")

let data = [
    {
        title: "first render",
        description: "first render description",
        status: 'in-progress',
        deleteIndex: 0
    }
];

const setData = (newData) => {
    data = newData;
    render();
}

const render = () => {
    inProgressList.innerHTML = "";
    doneList.innerHTML = "";

    data.forEach((item, index) => {
        item.deleteIndex = index;
        if (item.status === 'in-progress') {
            inProgressList.innerHTML += Card(item)

        } else if (item.status === 'done') {
            doneList.innerHTML += Card(item)

        }
    })
    const removeButton = document.querySelectorAll('.delete');

    removeButton.forEach(element => {
        element.addEventListener('click', (event) => {
            event.preventDefault();
            deleteTask(element);
        })
    });
}




const deleteTask = (deleteButton) => {
    const chosenTask = deleteButton.parentNode;

    const newData = data.filter((item, index) => {
        return index !== Number(chosenTask.id)

    })
    setData(newData)
}

const Card = (props) => {
    return `
        <div id='${props.deleteIndex}'>
            <button class="ok" type="click">done</button>
            <h4>Title: ${props.title}</h4>
            <p>Description: ${props.description}</p>
            <div>Status: ${props.status}</div>
            <button class="delete" type="click">delete</button>
        </div>
    `
}

addNewTask.addEventListener('click', (event) => {
    event.preventDefault();
    hiddenAdd.style.display = "block";
})

form.addEventListener("submit", (event) => {
    event.preventDefault()
    const { elements } = event.target
    const title = elements.title.value;
    const description = elements.description.value;
    const status = elements.statuslist.value;
    const newData = [...data, { title, description, status }]

    setData(newData)

})

render()

// taskSubmit.addEventListener('click', (event) => {
//     event.preventDefault();
//     if (taskTitle.value === '') return;
//     addTask(taskTitle.value);
//     taskTitle.value = '';
// })

// const addTask = (txt) => {
//     const listItem = document.createElement('li');
//     listItem.innerHTML = txt;
//     const showTask = inProgressList.appendChild(listItem);
//     console.log(showTask);

//     // タスクに削除ボタンを付与
//     const doneButton = document.createElement('button');
//     doneButton.innerHTML = 'Done';
//     listItem.appendChild(doneButton);

//     doneButton.addEventListener('click', evt => {
//         evt.preventDefault();
//         doneTasks(doneButton);
//     });
//     hiddenAdd.style.display = "none";
// }



