const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = toDoForm.querySelector("input");

const toDos = [];

function saveToDos(){ //작성한 todo 를 저장함.
    localStorage.setItem("todos", JSON.stringify(toDos)); //Stringify 문자화
}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
}


function paintToDo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerText = "x";
    button.addEventListener("click",deleteToDo);
    li.appendChild(span); //li 안에 span 넣기.
    li.appendChild(button);
    span.innerText = newTodo;
    toDoList.appendChild(li);

}


function handleToDoSubmit(event){
    event.preventDefault();
    //console.log(toDoInput.value);
    const newTodo = toDoInput.value; //새로운 todo 를 변수에 저장함.
    toDoInput.value = "";
    toDos.push(newTodo);
    paintToDo(newTodo);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);