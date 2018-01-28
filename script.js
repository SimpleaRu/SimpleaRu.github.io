var pathFirstArrow = document.querySelector('.path-first-arrow');
var arrows = document.querySelector('.arrows');
var pathSecondArrow = document.querySelector('.path-second-arrow');
var firstNumberText = document.querySelector('.exercise-first-number');
var firstNumberInput = document.querySelector('.first-num-input');
var secondNumberText = document.querySelector('.exercise-second-number');
var firstNumber, secondNumber, sum;
var n1x2, n1x3, n2x2, n2x3;

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function getCoordinate(num) {
    var x3 = Math.ceil(num * 39);
    return x3;
}

firstNumber = getRandomInt(6, 10);
sum = getRandomInt(11, 15);

n1x3 = getCoordinate(firstNumber);
n1x2 = n1x3 / 2;

n2x3 = getCoordinate(sum);
n2x2 = (n2x3 - n1x3) / 2 + n1x3;

firstNumberText.innerHTML = firstNumber;
secondNumberText.innerHTML = sum - firstNumber;

pathFirstArrow.setAttribute('d', `M 0 150 Q ${n1x2} 0 ${n1x3} 150`);
pathFirstArrow.classList.add('animation');

firstNumberInput.style.left = (n1x2 + 12 ) + 'px';
firstNumberInput.value = '';



firstNumberInput.addEventListener('keyup', function (e) {

    console.log(firstNumberInput.value);
    if (firstNumberInput.value == firstNumber) {
        pathSecondArrow.setAttribute('d', `M ${n1x3} 150 Q ${n2x2} 0 ${n2x3} 150`);
        pathSecondArrow.classList.add('animation');
    }
    else {
        firstNumberInput.style.color = 'red';
        firstNumberText.style.background = 'yellow';
    }

})


