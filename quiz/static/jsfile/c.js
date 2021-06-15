
const quiz=[
    {
        qus: "1.Compiler generates ___ file.?",
        a: "object code",
        b: "excutable code",
        c: "class code",
        d: "None of these above",
        ans: "opt1"
    },{
        qus: "2. Which library functions help users to dynamically allocate memory?",
        a: " malloc() and mecalloc()",
        b: " malloc() and calloc()",
        c: " memalloc() and calloc()",
        d: "None of these above",
        ans: "opt2" 
    },{
        qus: "3. In which year was the Python language begin?",
        a: "1995",
        b: "1972",
        c: "1969",
        d: "1989",
        ans: "opt3"
    },{
    qus: "4. In which language is Python written?",
        a: "Dennis Ritchie ",
        b: " Bell ",
        c: "john crist",
        d: "None of these above",
        ans: "opt1"
    },{
        qus: "5. Which one of the following is the correct extension of the c file?",
        a: ".c",
        b: ".cat",
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



