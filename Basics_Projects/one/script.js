const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function(button) {
    console.log(button);
    button.addEventListener('click', function(e) {
        console.log(e);
        console.log(e.target);
        if (e.target.classList.contains('red')) {
            body.style.backgroundColor = 'red';
        }
        if (e.target.classList.contains('orange')) {
            body.style.backgroundColor = 'orange';
        }
        if (e.target.classList.contains('blue')) {
            body.style.backgroundColor = '#2196F3';
        }
        if (e.target.classList.contains('yellow')) {
            body.style.backgroundColor = '#FFEB3B';
        }
    });
});
