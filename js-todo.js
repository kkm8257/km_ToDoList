const toDoForm = document.querySelector('.toDoForm');

const toDoInput = toDoForm.querySelector('input');
const toDoList = document.querySelector('.UserTodoList');
const finishedList = document.querySelector('.UserFinishedList')
let toDos = [];
let finished = [];

let tempText = '';
let tempId;

function submitHandler(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = '';


}


function goToFin() {
    const btn = event.target;
    const li = btn.parentNode;

    li.childNodes[2].style.textDecoration = 'line-through';
    li.childNodes[2].style.color = 'red';

}

/////////////////////////////////////////////////////////////////////////////

function paintToDo(text) {
    const li = document.createElement('li');
    const delbtn = document.createElement('button');
    const finishbtn = document.createElement('button');
    const span = document.createElement('span');
    const newId = new Date().getTime();
    delbtn.innerText = '❌';
    delbtn.style.borderRadius = '10px';
    delbtn.style.marginRight = '3px'
    finishbtn.innerText = '✔'
    finishbtn.style.borderRadius = '10px';

    delbtn.addEventListener('click', deleteToDo);
    finishbtn.addEventListener('click', goToFin);
    span.innerText = text;
    li.appendChild(delbtn);
    li.appendChild(finishbtn);
    li.appendChild(span);
    li.id = newId;
    li.classList.add('IsPending');
    toDoList.appendChild(li);


    const toDoObj = {
        text: text,
        id: newId
    }

    toDos.push(toDoObj);
    saveToDo();

}




/////////////////////////////////////////////////////////////////////////////




/////////////////////////////////////////////////////////////////////////////

function deleteToDo(event) {
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);


    const delId = li.id;
    const cleanToDos = toDos.filter(function (toDo) {
        return toDo.id !== parseInt(delId);
    });
    toDos = cleanToDos;
    saveToDo();


}



/////////////////////////////////////////////////////////////////////////////


function saveToDo() {
    localStorage.setItem('toDo!!', JSON.stringify(toDos));

}





/////////////////////////////////////////////////////////////////////////////

function loadToDo() {
    const loadToDoSet = localStorage.getItem('toDo!!');


    if (loadToDoSet !== null) {
        const parsedToDos = JSON.parse(loadToDoSet);


        parsedToDos.forEach(function (toDo) {
            paintToDo(toDo.text);
        })



    }


}

function init() {
    loadToDo();
    toDoForm.addEventListener('submit', submitHandler);
}

init();