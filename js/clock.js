const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
    //clock.innerText = `${string(date.getHours()}:${string(date.getMinutes()}:${string(date.getSeconds()}`;
}

getClock(); //바로 실행 후 1초 간격으로 실행시키기
setInterval(getClock, 1000);

/* 0309
setTimeout(sayHello, 5000);
setInterval(sayHello, 5000); //5000ms

padStart(2, "0") 2자리 수가 아닌 경우 앞에 0 붙임.
*/
