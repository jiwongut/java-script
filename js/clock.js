const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

getClock(); //바로 실행 후 1초 간격으로 실행시키기
setInterval(getClock, 1000);

/* 0309
setTimeout(sayHello, 5000);
setInterval(sayHello, 5000); //5000ms

padStart(2, "0") 2자리 수가 아닌 경우 앞에 0 붙임.
*/
