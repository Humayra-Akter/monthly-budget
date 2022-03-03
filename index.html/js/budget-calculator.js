function updateExpense(product) {
    const productInput = document.getElementById(product + '-cost-input');
    const productCostAmountText = productInput.value;
    let productExpense = parseInt(productCostAmountText);
    if (productExpense > 0) {
        totalCost(productExpense);
    }
    else {
        const failError = document.getElementById('notify-fail');
        failError.style.display = 'block';
        totalCost();
    }
    //productInput.value = '';
};
let sum = 0;
function totalCost(productExpense) {
    sum = sum + productExpense;
    return sum;
};
function finalBalance(incomeInput) {
    totalCost();
    const balance = incomeInput - sum;
    return balance;
}
//calling input function

document.getElementById('calculate-btn').addEventListener('click', function () {
    updateExpense('food');
});
document.getElementById('calculate-btn').addEventListener('click', function () {
    updateExpense('rent');
});
document.getElementById('calculate-btn').addEventListener('click', function () {
    updateExpense('clothes');
});
document.getElementById('calculate-btn').addEventListener('click', function () {

});
document.getElementById('calculate-btn').addEventListener('click', function () {
    // calculating total expense
    const totalExpense = document.getElementById('total-expense');
    totalExpense.value = sum;
});
document.getElementById('calculate-btn').addEventListener('click', function () {
    const incomeInputField = document.getElementById('income-input-field');
    const incomeInputText = incomeInputField.value;
    const incomeInput = parseInt(incomeInputText);
    if (incomeInput > 0) {
        finalBalance(incomeInput);
        const balanceField = document.getElementById('balance-field');
        balanceField.value = balance;
    }
});