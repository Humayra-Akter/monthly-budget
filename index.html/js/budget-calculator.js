function updateExpense(product) {
    const productInput = document.getElementById(product + '-cost-input');
    const productCostAmountText = productInput.value;
    let productExpense = parseInt(productCostAmountText);
    if (productExpense > 0) {
        totalCost(productExpense);
    }
};
let sum = 0;
function totalCost(productExpense) {
    sum = sum + productExpense;
    return sum;
}

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
    // calculating total expense
    const totalExpense = document.getElementById('total-expense');
    totalExpense.value = sum;
});
