const images = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img"); //html 요소 만들기, js에만 존재함.
bgImage.src = `img/${chosenImage}`;
//console.log(bgImage);

document.body.appendChild(bgImage); //html안에 넣어주기. (1920*1277)

/* 
.append = 가장 뒤에 오도록
.prepend = 가장 앞에 오도록
*/