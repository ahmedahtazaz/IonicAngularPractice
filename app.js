const reasonInput = document.querySelector('#reason');
const amountInput = document.querySelector('#amount');

const addBtn = document.querySelector('#btn-add');
const clearBtn = document.querySelector('#btn-clear');

const expenseList = document.querySelector('#expenses-list');
const totalExpense = document.querySelector('#total-expense');

let total = 0;

const clear = () => {
    reasonInput.value = '';
    amountInput.value = '';
}

addBtn.addEventListener('click', () => {
    const enteredReason = reasonInput.value;
    const enteredAmount = amountInput.value;

    if (enteredAmount.trim().length <= 0 || enteredAmount <= 0 || enteredAmount.trim().length <= 0)
        return;

    const newItem = document.createElement('ion-item');
    newItem.textContent = enteredReason + ': $' + enteredAmount;

    total += +enteredAmount;

    expenseList.appendChild(newItem);

    totalExpense.textContent = total;

    clear();
});

clearBtn.addEventListener('click', () => clear());