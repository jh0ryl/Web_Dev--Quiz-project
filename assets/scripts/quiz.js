let countdown;
let quizTime = 10;
let paused = false;
let remainTime = 0;
const question = document.getElementById("question");
const choiceLetter = document.querySelectorAll(".choice-letter");
const choiceText = document.querySelectorAll(".choice-text");
const button = document.querySelectorAll(".choices");

console.log(setQ1[0].question);

function startTimer() {
    clearInterval(countdown);

    if(paused == 0) {
        quizTime = 10;
    } else {
        quizTime = remainTime;
    }
    const timer = document.getElementById("time");

    function updateTimer() {
        let minutes = Math.floor(quizTime / 60);
        let seconds = quizTime % 60;
  
        seconds = seconds < 10 ? "0" + seconds : seconds;
        minutes = minutes < 10 ? "0" + minutes : minutes;
  
        timer.textContent = `${minutes}:${seconds}`;
    }

    updateTimer();

    countdown = setInterval(() => {
        quizTime--;
  
        if (quizTime < 0) {
            clearInterval(countdown);
            paused = false;
            //call function for next question
        } else {
            updateTimer();
        }
    }, 1000);
}

function stopTimer() {
    paused = true;
    remainTime = quizTime;
    clearInterval(countdown);
}

function displayResult() {
    document.getElementById("result").style.display="flex";
    document.body.style.overflow="hidden";
    stopTimer();
}

let letterIndex = 0; 
const displayQuestion = () => {
    let questionData = setQ1[letterIndex];
    question.textContent = questionData.question;
    choiceText.forEach((letter, index) => {
        letter.textContent = questionData.answers[index];
    });
    console.log(questionData.question);
}

const nextQuestion = () => {
    letterIndex++;
    if(letterIndex < setQ1.length) {
        displayQuestion();
    } else {
        displayResult();
    }
}

const checkAnswer = (e) => {
    const selectedAnswer = e;
    const questionData = setQ1[letterIndex];
    if(selectedAnswer == questionData.correct) {
        console.log("Correct Answer");
        nextQuestion();
    } else {
        console.log("Wrong Answer");
        displayResult();
    }
}

//     displayResult();
displayQuestion(); 


