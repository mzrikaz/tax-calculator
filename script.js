const incomeTypeEl = document.getElementById("incomeType");
const amountEl = document.getElementById("amount");
const resultEl = document.getElementById("result");
const calculateBtn = document.getElementById("calculateBtn");
const resultText = resultEl.textContent;

const countElement = document.getElementById("count");
const incrementBtn = document.getElementById("increment");
countElement.textContent = 0;

incrementBtn.addEventListener("click", function() {
    countElement.textContent = parseInt(countElement.textContent) + 1;
});



calculateBtn.addEventListener("click", function() {
    const incomeType = incomeTypeEl.value;
    const amount = parseFloat(amountEl.value);
    
    console.log("Income Type:", incomeType, "Amount:", amount);

    let taxRate;

    if (incomeType == "salary") {
        taxRate = 0.15; // 15% for salary
    } else if (incomeType == "business") {
        taxRate = 0.20; // 20% for business
    } else if (incomeType == "investment") {
        taxRate = 0.10; // 10% for investment
    } else {
        taxRate = 0.05; // 5% for other types
    }

    const tax = amount * taxRate;
    const netIncome = amount - tax;

    if (tax > 500) {
        resultEl.style.cssText = "color: red; font-weight: bold; font-size: 1.2em;";
    } else {
        resultEl.style.cssText = "color: green; font-weight: normal; font-size: 1.2em;";
    }

    resultEl.textContent = `Tax Amount: $${tax.toFixed(2)}, Net Income: $${netIncome.toFixed(2)}`;
    
})