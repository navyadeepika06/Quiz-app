const quizData = [{
    question: "Which of the following had written by 'Ali Hazelwood'?",
    a: "The love hypothesis",
    b: "Bound by Honor",
    c: "Eleven times",
    d: "Verity",
    correct: "a",
},
{
    question: "Who is the female lead of 'Ugly Love'?",
    a: "Rachel",
    b: "Aria",
    c: "Tate",
    d: "Julie",
    correct: "c",
},
{
    question: "Which is a trilogy?",
    a: "It ends with us",
    b: "To all the boys",
    c: "Twisted love",
    d: "none of the above",
    correct: "b",
},
{
    question: "Which is the most popular fictional character?",
    a: "Adam",
    b: "Alex",
    c: "Sagan",
    d: "Atlas",
    correct: "d",
}
];
let index = 0;
let correct = 0,
incorrect = 0,
total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']")
const loadQuestion = () => {
if (total === index) {
    return quizEnd()
}
reset()
const data = quizData[index]
questionBox.innerHTML = `${index + 1}) ${data.question}`
allInputs[0].nextElementSibling.innerText = data.a
allInputs[1].nextElementSibling.innerText = data.b
allInputs[2].nextElementSibling.innerText = data.c
allInputs[3].nextElementSibling.innerText = data.d
}

document.querySelector("#submit").addEventListener(
"click",
function() {
    const data = quizData[index]
    const ans = getAnswer()
    if (ans === data.correct) {
        correct++;
    } else {
        incorrect++;
    }
    index++;
    loadQuestion()
}
)

const getAnswer = () => {
let ans;
allInputs.forEach(
    (inputEl) => {
        if (inputEl.checked) {
            ans = inputEl.value;
        }
    }
)
return ans;
}

const reset = () => {
allInputs.forEach(
    (inputEl) => {
        inputEl.checked = false;
    }
)
}

const quizEnd = () => {
document.getElementsByClassName("container")[0].innerHTML = `
    <div class="col">
        <h3 class="w-100"> Congratulations!, you've scored ${correct} / ${total} </h3>
    </div>
`
}
loadQuestion(index);