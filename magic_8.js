'use strict';

document.addEventListener('DOMContentLoaded', function (event) {
    const theQuestion = document.querySelector('#theQuestion');
    const display8 = document.querySelector('#display8');
    const showName = document.querySelector('#showName');

    function showButton(event) {
        event.preventDefault();
        display8.style.display = 'none';
        const allAnswers = ["6*7","7*6","√(42^2)","3!+6","8.4*5","2^21","√(3^6)","84/2","2^5.39","√(3^3.57)","√(10^3)","√(5!+16)","e^ln42","√(φ^3-1)","sinh42","√(2^21)","84/2","√(10^3)","√(5!+16)","e^ln42","√(6^2-6)","cos42","42^(2/2)","√(3^2*2)","φ*26","cos0*42","42^(2/2)","√(3^2*2)","φ*26","sinh42","√(2^21)","84/2","7*6","√(2^21)","84/2","7*6","√(2^21)","84/2","7*6","√(2^21)","84/2","7*6"];
        const randomizedAnswers = Math.floor(Math.random() * allAnswers.length);
        const actualAnswer = allAnswers[randomizedAnswers];
        showName.innerText = actualAnswer;
        };

    theQuestion.addEventListener('submit', showButton);

    document.getElementById('submitButton').addEventListener('click', function(event) {
        theQuestion.dispatchEvent(new Event('submit')); 
        submitButton.style.display = 'none';
    });
});
