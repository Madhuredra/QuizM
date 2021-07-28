const quizDB = [
    {
        question:"Ques-1 HTML stands for ?",
        a:"Hyper Text Transfir Protocol",
        b:"Hyper Text Markup Languauge",
        c:"Hyper Text Transfir Languauge",
        d:"None Of The Above",
        ans:"b"
    },
    {
        question:"Ques-2 CSS stands for ?",
        a:" Cascading Style Sheet",
        b:" Casciding Style Sheet",
        c:" Both a and b",
        d:" None of The Above",
        ans:"a"
    },
    {
        question:"Ques-3 JS stands for ?",
        a:"JavaScript",
        b:"JavaSecret",
        c:"Java",
        d:"None Of The Above",
        ans:"a"
    },
    {
        question:"Ques-4 ES stands for ?",
        a:"EcmaScript",
        b:"EkmaScript",
        c:"Both a and b",
        d:"None Of The Above",
        ans:"a"
    },
    {
        question:"Ques-5 MERN stands for",
        a:"MogoDB Express React Node",
        b:"MogoDB Express Angular Node",
        c:"None",
        d:"Both a and b",
        ans:"a"
    },
]

//get the answer of all options
const answers = document.querySelectorAll('.choose');

//for interation of question form data base
var countQues = 0;

// for score 
var score = 0;

const question = document.querySelector('.ques');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
//function for question loading

const loadQuestions = () => {
    question.innerText = quizDB[countQues].question;
    option1.innerText = quizDB[countQues].a;
    option2.innerText = quizDB[countQues].b;
    option3.innerText = quizDB[countQues].c;
    option4.innerText = quizDB[countQues].d;
}
loadQuestions();

let answer;
const getID = (clicked) => {
    answer = clicked;
    // return answer;
}
const checkAnswer = () => {
    if(answer === quizDB[countQues].ans){
        score++;
    }
    countQues++;
    if(countQues<quizDB.length){
        loadQuestions();
    }else{
        document.querySelector('.Score').innerText =  `
            Your Score is ${score} out of ${quizDB.length}`;
        document.querySelector('.hide').style.display = "block";
    }
}





















