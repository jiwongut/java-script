const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = toDoForm.querySelector("input");

function paintToDo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.appendChild(span); //li 안에 span 넣기.
    span.innerText = newTodo;
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    //console.log(toDoInput.value);
    const newTodo = toDoInput.value; //새로운 todo 를 변수에 저장함.
    toDoInput.value = "";
    paintToDo(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);