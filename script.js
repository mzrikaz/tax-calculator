const incomeTypeEl = document.getElementById("incomeType");
const amountEl = document.getElementById("amount");
const resultEl = document.getElementById("result");
const calculateBtn = document.getElementById("calculateBtn");

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

    alert(taxRate);
})