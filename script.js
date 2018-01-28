var pathFirstArrow = document.querySelector('.path-first-arrow');
var exercise = document.querySelector('.exercise');
var pathSecondArrow = document.querySelector('.path-second-arrow');
var firstNumberText = document.querySelector('.exercise-first-number');
var firstNumberInput = document.querySelector('#first-num-input');
var secondNumberInput = document.querySelector('#second-num-input');
var secondNumberText = document.querySelector('.exercise-second-number');
var ImgContainer = document.querySelector('.img-container');
var exerciseSum = document.querySelector('.exercise-sum');
var firstNumber, secondNumber, sum;
var n1x2, n1x3, n2x2, n2x3;
var sumImput;

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function getCoordinate(num) {
    var x3 = Math.ceil(num * 39);
    return x3;
}

function yAxisShift(elem, num) {
    num = ((num * 32) / 4) + 30;
    elem.style.top = '-' + num + 'px';
}

function elemShift(elem, nx) {
    var elemStyles = getComputedStyle(elem);
    var elemWidth = parseInt(elemStyles.width);
    elem.style.left = (nx + (elemWidth / 2)) + 'px';
}

function getArrowHeight(length) {
    return length / 2 * 0.86;
}


firstNumberInput.value = '';
secondNumberInput.value = '';
firstNumberInput.classList.add('input-animation');


firstNumber = getRandomInt(6, 10);
sum = getRandomInt(11, 15);
secondNumber = sum - firstNumber;

n1x3 = getCoordinate(firstNumber);
n1x2 = n1x3 / 2;

n2x3 = getCoordinate(sum);
n2x2 = (n2x3 - n1x3) / 2 + n1x3;

var n1h = 150 - Math.floor(getArrowHeight(n1x3));
var n2h = 150 - Math.floor(getArrowHeight(n2x3 - n1x3));

firstNumberText.innerHTML = firstNumber;
secondNumberText.innerHTML = secondNumber;

pathFirstArrow.setAttribute('d', `M 0 147 Q ${n1x2} ${n1h} ${n1x3} 147 L ${n1x3 - 4} 133 ${n1x3} 147 ${n1x3 - 15} 145`);
pathFirstArrow.classList.add('animation');

elemShift(firstNumberInput, n1x2);
yAxisShift(firstNumberInput, firstNumber);

elemShift(secondNumberInput, n2x2);
yAxisShift(secondNumberInput, secondNumber);

firstNumberInput.addEventListener('keyup', function (e) {

    if (firstNumberInput.value == firstNumber) {
        pathSecondArrow.setAttribute('d', `M ${n1x3} 147 Q ${n2x2} ${n2h} ${n2x3} 147 L ${n2x3 - 4} 133 ${n2x3} 147 ${n2x3 - 15} 145`);
        pathSecondArrow.classList.add('animation');
        secondNumberInput.classList.add('input-animation');

        var replaceFirstInput = document.createElement('span');
        replaceFirstInput.classList.add('first-num');
        replaceFirstInput.innerHTML = firstNumber;
        ImgContainer.replaceChild(replaceFirstInput, firstNumberInput);
        elemShift(replaceFirstInput, n1x2);
        yAxisShift(replaceFirstInput, firstNumber);
        firstNumberText.style.background = '';
    }
    else {
        firstNumberInput.style.color = 'red';
        firstNumberText.style.background = 'yellow';
    }

});

secondNumberInput.addEventListener('keyup', function (e) {
    if (secondNumberInput.value == secondNumber) {
        var replaceSecondInput = document.createElement('span');
        replaceSecondInput.classList.add('second-num-text');

        replaceSecondInput.innerHTML = secondNumber;
        ImgContainer.replaceChild(replaceSecondInput, secondNumberInput);
        elemShift(replaceSecondInput, n2x2);
        yAxisShift(replaceSecondInput, secondNumber);
        secondNumberText.style.backgroundColor = '';

        sumImput = document.createElement('input');
        sumImput.classList.add('input');
        sumImput.classList.add('input-sum');
        sumImput.classList.add('input-animation');
        exercise.replaceChild(sumImput, exerciseSum);
    }
    else {
        secondNumberInput.style.color = 'red';
        secondNumberText.style.backgroundColor = 'yellow';
    }
});

exercise.addEventListener('keyup', function (e) {
    if (e.target == sumImput) {
        if (sumImput.value == sum) {

            var replacesumImput = document.createElement('span');
            replacesumImput.classList.add('sum-text');
            replacesumImput.innerHTML = sum;
            exercise.replaceChild(replacesumImput, sumImput);
            secondNumberText.style.backgroundColor = '';

            var comlete = document.createElement('span');
            comlete.classList.add('complete');
            exercise.appendChild(comlete);

        }
        else {
            sumImput.style.color = 'red';

        }
    }
});