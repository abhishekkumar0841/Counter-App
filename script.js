// selecting all buttons and input
const decrementBtn = document.querySelector('#decrementBtn');
console.log(decrementBtn)


const incrementBtn = document.querySelector('#incrementBtn');
console.log(incrementBtn)

const resetBtn = document.querySelector('#resetBtn');

let input = document.querySelector('#input');

// initialize the input value to 0
let value = 0;
input.value = value;

// function for decrease the value
function decreaseValue(){
    value--;
    input.value = value;
}
// adding event listeners for decrement button
decrementBtn.addEventListener('click', decreaseValue);


// function for increase the value
function increaseValue(){
    value++;
    input.value = value;
}

// adding event listeners for increment button
// incrementBtn.addEventListener('click', increaseValue);
incrementBtn.addEventListener('click', increaseValue)


// function for reset the value
function resetValue(){
    value = 0;
    input.value = value;
}

// adding event listeners for resets the value
resetBtn.addEventListener('click', resetValue)


