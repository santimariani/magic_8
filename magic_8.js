'use strict';

document.addEventListener('DOMContentLoaded', function (event) {
    const theQuestion = document.querySelector('#theQuestion');
    // document.getElementById('theQuestion')
    const display8 = document.querySelector('#display8');
    // displayEight
    const showAnswer = document.querySelector('#showAnswer');

    function showButton(event) {
        event.preventDefault();
        display8.style.display = 'none';
        const allAnswers = ["6×7", "7×6", "3!×7", "√1764", "21×2", "42", "84/2", "6²-6", "2⁵+10", "7!/720", "e^ln42", "log₇7⁴²", "√(49×36)", "cos0", "ln(e⁴²)", "φ×26", "Γ(5)-18", "√(7×2)⁶", "√(4×21)", "√(6×21)", "4²+34", "√(42²)", "√(2102)", "2⁴.4", "5!÷5-5", "5!-5²+5", "6!/80", "10×4+2", "√6!÷80", "log₃3⁴²", "6+6×6", "2⁶-22", "e³+15", "3²×2", "2⁵.39", "7×6", "√(42²)", "φ×26", "log₇7⁴²", "sin42", "6!÷80"]
        const randomizedAnswers = Math.floor(Math.random() * allAnswers.length);
        const actualAnswer = allAnswers[randomizedAnswers];
        showAnswer.innerText = actualAnswer;
        // should it return somehting?
        //return actualAnswer
        };

    theQuestion.addEventListener('submit', showButton);

    document.getElementById('submitButton').addEventListener('click', function(event) {
        theQuestion.dispatchEvent(new Event('submit')); 
        submitButton.style.display = 'none';
    });
});

// console.log(showButton(event))