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

const createAlert = () => {
    const alert = document.createElement('ion-alert');
    alert.header = 'Invalid Values';
    alert.message = 'Please Enter valid Values!';
    alert.buttons = ['OK'];

    document.body.appendChild(alert);
    return alert.present();
}

addBtn.addEventListener('click', () => {
    const enteredReason = reasonInput.value;
    const enteredAmount = amountInput.value;

    if (enteredAmount.trim().length <= 0 || enteredAmount <= 0 || enteredAmount.trim().length <= 0) {
        createAlert();
        return;
    }

    const newItem = document.createElement('ion-item');
    newItem.textContent = enteredReason + ': $' + enteredAmount;

    total += +enteredAmount;

    expenseList.appendChild(newItem);

    totalExpense.textContent = total;

    clear();
});

clearBtn.addEventListener('click', () => clear());