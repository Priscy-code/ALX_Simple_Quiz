function checkAnswer(){
    const correctAnswer ="4";

    const selectedAnswer = document.querySelector('input[name="quiz"]:checked');
    const userAnswer = selectedAnswer ? selectedAnswer.value: null;

     const feedBack = document.getElementById('feedback');

    if (userAnswer === correctAnswer){
        feedBack.textContent = "Correct! Well done."
    }else if(userAnswer !== correctAnswer) {
        feedBack.textContent= "That's incorrect.Try again!"
    }
}

const SubmitButton = document.getElementById('submit-answer');
SubmitButton.addEventListener('click', checkAnswer);
