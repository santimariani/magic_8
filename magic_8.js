'use strict';

document.addEventListener('DOMContentLoaded', function (event) {
    const theQuestion = document.querySelector('#theQuestion');
    const display8 = document.querySelector('#display8');
    const showName = document.querySelector('#showName');

    function showButton(event) {
        event.preventDefault();
        display8.style.display = 'none';
        const formData = new FormData(event.target);
        const name = formData.get('userInput');
        showName.innerText = name;
    }

    theQuestion.addEventListener('submit', showButton);

    document.getElementById('submitButton').addEventListener('click', function(event) {
        theQuestion.dispatchEvent(new Event('submit')); 
        submitButton.style.display = 'none';
    });
});
