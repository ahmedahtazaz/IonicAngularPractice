const reasonInput = document.querySelector('#reason');
const amountInput = document.querySelector('#amount');

const addBtn = document.querySelector('#btn-add');
const clearBtn = document.querySelector('#btn-clear');

addBtn.addEventListener('click', () => {
    const enteredReason = reasonInput.value;
    const enteredAmount = amountInput.value;

    if (enteredAmount.trim().length <= 0 || enteredAmount <= 0 || enteredAmount.trim().length <= 0)
        return;

    console.log(enteredAmount, enteredReason)
});

clearBtn.addEventListener('click', () => {
    console.log('Clear btn press');
});