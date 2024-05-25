'use strict';

document.addEventListener('DOMContentLoaded', function (event) {

    const theQuestion = document.querySelector('#theQuestion');

    theQuestion.addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const name = formData.get('theAnswer');

        const showName = document.querySelector('#showName');
        showName.innerText = name;
    })

})