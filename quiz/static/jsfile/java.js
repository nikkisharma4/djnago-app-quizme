
const quiz=[
    {
        qus: "1.  What is the size of float variable?",
        a: "16",
        b: "32",
        c: "64",
        d: "8",
        ans: "opt2"
    },{
        qus: "2. What is the default value of short variable?",
        a: "0.0",
        b: "null",
        c: "0",
        d: "None of these above",
        ans: "opt3" 
    },{
        qus: "3. What is the default value of Object variable?",
        a: "undefine",
        b: "0",
        c: "null",
        d: "1",
        ans: "optc"
    },{
    qus: "4. Which method must be implemented by all threads?",
        a: "wait()",
        b: "run()",
        c: "walk()",
        d: "None of these above",
        ans: "opt2"
    },{
        qus: "5. Which one of the following is the correct extension of the java file?",
        a: ".java",
        b: ".j",
        c: ".js",
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



