const queotes = [ //총 10개 
    {
        quote: "Todo lo que puedes imaginar es real.",
        author: "상상하는 것은 모두 현실이 된다.",
    },
    {  
        quote: "Es gibt keinen Grenzen, nur Moeglichkeiten.",
        author: "오직 가능성만이 존재한다.",
    },
    {
        quote: "Der Zweck des Lebens ist das Leben selbst.",
        author: "인생의 목적은 인생 그 자체이다.",
    },
    {
        quote: "Action is the foundational key to all success.",
        author: "Pablo Picasso",
    },
    {
        quote: "Поехали!",
        author: "Ю́рий Гага́рин",
    },
    {
        quote: "Ich wollte ja nichts als das zu leben versuches was von selber aus mir heraus wollte, warum war das so schwer?",
        author: "Demian",
    },
    {
        quote: "sei positiv.",
        author: "be positive",
    },
    {
        quote: "Don't judge me by my successes; judge me by how many times I fell down and got back up again.",
        author: "Nelson Mandela",
    },
    {
        quote: "The most certain way to succeed is always to try just one more time.",
        author: "Thomas A.Edison",
    },
    {
        quote: "Die Zeit hellt alle wunden",
        author: "시간이 모든 것을 치유한다.",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

//random 추출
const todaysQuote = queotes[Math.floor(Math.random() * queotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
/*
Random 

Math.round() 반올림
Math.ceil() 올림
Math.floor() 내림

Math.random() = 0~1 사이의 숫자 중 무작위로.
Math.random() * [].length
*/