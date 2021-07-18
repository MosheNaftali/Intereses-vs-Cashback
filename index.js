var amount = document.getElementById("amount");
var installments = document.getElementById("installments");
var interest = document.getElementById("interest");
var cashback = document.getElementById("cashback");
var totalInvestment = document.getElementById("total_investment");
var totalCashback = document.getElementById("total_cashback");
var form = document.getElementById("form");

function calculate(e) {
  e.preventDefault();
  let total = 0;
  for (let i = 1; i <= installments.value; i++) {
    let a = amount.value - (amount.value / installments.value) * i;
    total += (a * (interest.value / 100)) / 12;
  }

  totalInvestment.innerHTML = total;
  totalCashback.innerHTML = (amount.value * cashback.value) / 100;
  console.log((amount.value * cashback.value) / 100, total);
}

form.addEventListener("submit", calculate);
