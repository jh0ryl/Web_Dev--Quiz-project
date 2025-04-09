let countdown;
let quizTime = 10;
let paused = false;
let remainTime = 0;

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
