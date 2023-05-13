"use strict";
const info = document.querySelector('.info');
const increment = document.querySelector('.increment');
const decrement = document.querySelector('.decrement');
const step = document.querySelector('.step');
const time = document.querySelector('.time');
const asyncCheckBox = document.querySelector('.checkbox');
let infoValue = +info.textContent;
let stepValue = +step.value;
let timeValue = +time.value;
function activ() {
    step.addEventListener("input", function () {
        increment.classList.add('active');
        decrement.classList.add('active');
        stepValue = +step.value;
    });
    time.addEventListener("input", function () {
        asyncCheckBox.classList.add('active');
        timeValue = +time.value;
    });
    increment.addEventListener("click", function () {
        if (asyncCheckBox.checked !== true) {
            infoValue += stepValue;
            info.textContent = infoValue.toString();
        }
    });
    decrement.addEventListener("click", function () {
        if (+infoValue > 0 && asyncCheckBox.checked !== true) {
            infoValue -= stepValue;
            info.textContent = infoValue.toString();
        }
        ;
    });
}
function disable() {
    if (!stepValue || stepValue === 0) {
        increment.classList.remove('active');
        decrement.classList.remove('active');
    }
}
function timeCheck() {
    if (timeValue !== 0 && asyncCheckBox.checked === true) {
        increment.addEventListener("click", function () {
            setTimeout(() => {
                infoValue += stepValue;
                info.textContent = infoValue.toString();
            }, timeValue);
        });
        decrement.addEventListener("click", function () {
            setTimeout(() => {
                if (+infoValue > 0) {
                    infoValue -= stepValue;
                    info.textContent = infoValue.toString();
                }
            }, timeValue);
        });
    }
}
time.addEventListener("input", function () {
    timeValue = +time.value;
    timeCheck();
});
asyncCheckBox.addEventListener("click", function () {
    timeCheck();
});
function init() {
    activ();
    disable();
}
init();
