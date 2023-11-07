
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
            const chosenTask = element.parentNode;
            deleteTask(chosenTask);
        })
    });

    const doneButton = document.querySelectorAll('.ok');
    doneButton.forEach(element => {
        element.addEventListener('click', (event) => {
            event.preventDefault();
            const chosenTask = element.parentNode;
            doneTask(chosenTask);
        })
    });

}

const deleteTask = (chosenTask) => {
    const newData = data.filter((item, index) => {
        return index !== Number(chosenTask.id)
    })
    setData(newData)
}

// asuuuu!!!!!!!!!!!!!!!
const doneTask = (chosenTask) => {
    let newData = data;
    newData.forEach((item, index) => {
        if (index === Number(chosenTask.id)) {
            item.status = "done";
        }
    })

    // let newData = (data.forEach((item, index) => {
    //     if (index === Number(chosenTask.id)) {
    //         item.status = "done";
    //     }
    // }));
    setData(newData);
}

const Card = (props) => {
    if (props.status === "done") {
        return `
        <div id='${props.deleteIndex}'>
            <h4>Title: ${props.title}</h4>
            <p>Description: ${props.description}</p>
            <div class="statusClass">Status: ${props.status}</div>
            <button class="delete" type="click">delete</button>
        </div>
    `
    } else {
        return `
        <div id='${props.deleteIndex}'>
            <button class="ok" type="submit">done</button>
            <h4>Title: ${props.title}</h4>
            <p>Description: ${props.description}</p>
            <div class="statusClass">Status: ${props.status}</div>
            <button class="delete" type="click">delete</button>
        </div>
    `
    }

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

render();