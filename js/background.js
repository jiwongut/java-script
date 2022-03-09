const images = [
    "3.jpeg",
    "4.jpeg",
    "5.jpeg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img"); //html 요소 만들기, js에만 존재함.
bgImage.src = `img/${chosenImage}`;
//console.log(bgImage);

document.body.appendChild(bgImage); //html안에 넣어주기. (1920*1277)

