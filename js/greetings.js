//ctrl+shift+L
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username){
    greeting.innerText = `Hello ${username}`; 
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else{
    //show the greetings
    paintGreetings(savedUsername);
}
/*other events 0307
window.addEventListener("resize", handleWindowResize);
window.addEventListener("offline", handleWindowOffline);
*/
/*object 0307
값을 저장 localstorage.setItem("key", "value")

const player = ["jiwon", 1212, false, "prettie"];
const player = {
    name : "jiwon",
    points : 10,
    fat : false, };

console.log(player);
console.log(player.name); //jiwon
player.lastName = "jung"; //추가됨.

&& and || or 
const age = parseInt(prompt("How old are You?"));

if(isNaN(age)){
    //True age is Not a Number
    console.log("Please write a number");
} else if(age < 18){ 
    console.log("You r too young!");
} else{
    console.log("You can drink!");
}*/