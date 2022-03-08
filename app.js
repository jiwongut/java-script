//ctrl+shift+L
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

function onLoginSubmit(event){
    event.preventDefalut();
    loginForm.classList.add("hidden");
    const username = loginInput.value;
    greeting.innerText = "Hello " + username;
    console.log(username);
}

loginForm.addEventListener("submit", onLoginSubmit);

/*other events 0307
window.addEventListener("resize", handleWindowResize);
window.addEventListener("offline", handleWindowOffline);
*/
/*object 0307
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