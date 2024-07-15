function checkAnswer(){
    const correctAnswer = "4"
    const selectAnswer = document.querySelector('input[name= quiz] :checked')
    const userAnswer = selectAnswer? selectAnswer.value :null;

    const feedback = document.getElementById('feedback');

    if (userAnswer === correctAnswer){
        feedback.textContent = "Correct! Well done.";
    }else if (feedback){
        feedback.textContent = "That's incorrect. Try again";
    }
}
const submitButton = document.getElementById('submit-answer');
submitButton.addEventListener('click', checkAnswer)