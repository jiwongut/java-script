const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = toDoForm.querySelector("input");

let toDos = [];
const TODOS_KEY = "todos";

/*function sayHello(item){
    console.log("this is the ", item);
}*/

function saveToDos(){ //작성한 todo 를 저장함.
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //Stringify 문자화
}

function deleteToDo(event){
    const li = event.target.parentElement;
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    li.remove();
    saveToDos();
    //console.log(typeof li.id); = string
}

function paintToDo(newTodo){ //newTodo는 객체
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerText = "x";
    button.addEventListener("click",deleteToDo);
    li.appendChild(span); //li 안에 span 넣기.
    li.appendChild(button);
    span.innerText = newTodo.text;
    toDoList.appendChild(li);

}

function handleToDoSubmit(event){
    event.preventDefault();
    //console.log(toDoInput.value);
    const newTodo = toDoInput.value; //새로운 todo 를 변수에 저장함.
    toDoInput.value = "";
    const newTodoObject = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObject);
    paintToDo(newTodoObject);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
if(savedToDos !== null) {
    const parsedToDOs = JSON.parse(savedToDos);
    toDos = parsedToDOs; //update
    parsedToDOs.forEach(paintToDo); //function을 더 간결하게 "arrow function"
    //console.log(parsedToDOs);
}

/*지우고 싶은 item을 제외한다. filter
ex1) 
function sexyFilter(){
    return true or false
    return !== 3 3만 제외하고 반환
}
true > [1, 2, 3, 4, 5].filter(sexyFilter)
false > [] 반환.

ex2)
const arr = ["a", "b", "c"]
function sexyFilter(food){ return food !== "a"}
arr.filter(sexyFilter)
["b", "c"] 반환.
*/