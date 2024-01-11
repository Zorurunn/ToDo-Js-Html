
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
        <div draggable="true" id='${props.deleteIndex}'>
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


// inProgressList.forEach((element, index) => {





// });


data.forEach((element, index) => {
    // element.addEventListener('dragstart', function (event) {
    //     event.dataTransfer.setData("text/plain", event.target.id);
    // })
    console.log(element);

    // element.addEventListener('dragstart', function (event) {

    // })


})


// data.addEventListener('dragover', function (event) {
//     if (event.target === this) {
//         event.preventDefault();
//     }
// })
// // set ID to draggable elements
// draggables.forEach(element => {
//     element.addEventListener('dragstart', (event) => {
//         event.dataTransfer.setData("text/plain", event.target.id);
//     })
// });



// doneList.addEventListener('drop', function (event) {
//     // get drag started box index
//     const id = event.dataTransfer.getData('text/plain');
//     const draggable = document.getElementById(id);
//     console.log(draggable);
//     // let startBox = draggable.getAttribute(`dragStartBox`);
// })

// element.addEventListener('dragover', function (event) {
//     if (event.target === this) {
//         event.preventDefault();
//     }
// })
