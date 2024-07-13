function add(number1, number2) {
    return number1 + number2;
   
}
function subtract(number1, number2){
    return number1 - number2;
}
function multiply(number1, number2){
    return number1 * number2
}
function divide(number1, number2){
    return number1 / number2
}
function calculate(){
    const number1input = document.getElementById('number1');
    const number2input = document.getElementById('number2')
    const resultSpan = document.getElementById('calculation-result');

    const addButton = document.getElementById('add');
    const subtractButton = document.getElementById('subtract');
    const multiplyButton = document.getElementById('multiply');
    const divideButton = document.getElementById('divide');

    addButton.addEventListener('click', ()=> {
        const number1 = parseFloat(number1input.value) || 0;
        const number2 = parseFloat(number2input.value) || 0;
        const result = add(number1, number2);
        resultSpan.textContent = result;
    });

     subtractButton.addEventListener('click', () => {
    const number1 = parseFloat(number1Input.value) || 0;
    const number2 = parseFloat(number2Input.value) || 0;
    const result = subtract(number1, number2);
    resultSpan.textContent = result;
  });

  multiplyButton.addEventListener('click', () => {
    const number1 = parseFloat(number1Input.value) || 0;
    const number2 = parseFloat(number2Input.value) || 0;
    const result = multiply(number1, number2);
    resultSpan.textContent = result;
  });

   divideButton.addEventListener('click', () => {
    const number1 = parseFloat(number1Input.value) || 0;
    const number2 = parseFloat(number2Input.value) || 0;
    const result = divide(number1, number2);
    resultSpan.textContent = result;
  });

}
calculate();
