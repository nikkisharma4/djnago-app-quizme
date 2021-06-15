
const quiz=[
    {
        qus: "1. What is the maximum possible length of an identifier?",
        a: "16",
        b: "32",
        c: "64",
        d: "None of these above",
        ans: "opt4"
    },{
        qus: "2. Who developed the Python language?",
        a: "Zim Den",
        b: "Guido van Rossum",
        c: "Niene Stom",
        d: "None of these above",
        ans: "opt2" 
    },{
        qus: "3. In which year was the Python language developed?",
        a: "1995",
        b: "1972",
        c: "1955",
        d: "1989",
        ans: "opt4"
    },{
    qus: "4. In which language is Python written?",
        a: "English",
        b: "php",
        c: "c",
        d: "None of these above",
        ans: "opt3"
    },{
        qus: "5. Which one of the following is the correct extension of the Python file?",
        a: ".py",
        b: ".p",
        c: ".python",
        d: "None of these above",
        ans: "opt1"
}
];

const qus = document.querySelector(".qus");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submit= document.querySelector("#submit");
const answeres = document.querySelectorAll(".answere")
const score = document.querySelector("#score")

let questionCount=0 ;
let Myscore=0;
const loadqustn = () => {
    const questionList = quiz[questionCount];
    qus.innerText= questionList.qus;
    
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;

}
 
loadqustn();

const getcheckans = () =>{
    let answere;
    answeres.forEach((curentEle)=> {
        if(curentEle.checked){
            answere = curentEle.id;
        }
    });
    return answere

};

submit.addEventListener('click', () => {
    const checkmyans = getcheckans();
    console.log(checkmyans);

    if(checkmyans == quiz[questionCount].ans){
        Myscore++;
    };

    questionCount++;
    if(questionCount < quiz.length){
        loadqustn();
    }
    else{
        score.innerHTML=`
            <h4> Your score is ${Myscore}/${quiz.length}<h4>
        `;
    }
});



