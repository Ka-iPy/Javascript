const Q1 = document.getElementById('plus1');
const Q2 = document.getElementById('plus2');
const Q3 = document.getElementById('plus3');
const Q4 = document.getElementById('plus4');

Q1.addEventListener('click', function() {
    
    this.onclick = function() {
        alert('Hello World!');
    }
});

Q2.addEventListener('click', function() {
    this.onclick = function() {
        alert('I tried making the buttons toggle!');
    }
});

Q3.addEventListener('click', function() {
    this.onclick = function() {
        alert('What do you think?');
    }
});

Q4.addEventListener('click', function() {
    this.onclick = function() {
        alert('Really bruv?');
    }
});