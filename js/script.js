//***Login btn event handler***
const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function () {
  const loginArea = document.getElementById("login-area");
  loginArea.style.display = "none";
  const transactionArea = document.getElementById("transaction-area");
  transactionArea.style.display = "block";
});

//***Deposit btn event handler***
const depositBtn = document.getElementById("addDeposit");
depositBtn.addEventListener("click", function () {
  // const depositAmount = document.getElementById("depositAmount").value;
  // const depositAmountNumber = parseFloat(depositAmount);
  const depositAmountNumber = addAmount("depositAmount"); //***Using Function***

  //***Deposit event handler***

  // const currentDeposit = document.getElementById("currentDeposit").innerHTML;
  // const currentDepositNumber = parseFloat(currentDeposit);

  // const totalDeposit = depositAmountNumber + currentDepositNumber;
  // document.getElementById("currentDeposit").innerHTML = totalDeposit;

  //***Using Function(less line of code)***
  updateAmount("currentDeposit", depositAmountNumber);

  //***Balance Event Handler***

  // const currentBalance = document.getElementById("currentBalance").innerHTML;
  // const currentBalanceNumber = parseFloat(currentBalance);

  // const totalBalalnce = depositAmountNumber + currentBalanceNumber;
  // document.getElementById("currentBalance").innerHTML = totalBalalnce;

  //***Using Function(less line of code)***
  updateAmount("currentBalance", depositAmountNumber);

  document.getElementById("depositAmount").value = "";
});

//***Withdraw Button event handler***

const withdrawBtn = document.getElementById("addwithdraw");
withdrawBtn.addEventListener("click", function () {
  // const withdrawAmount = document.getElementById("withdrawAmount").value;
  // const withdrawNumber = parseFloat(withdrawAmount);
  const withdrawAmountNumber = addAmount("withdrawAmount"); //***Using Function***

  //Withdraw Event Handler
  updateAmount("currentWithdraw", withdrawAmountNumber);
  updateAmount("currentBalance", -1 * withdrawAmountNumber);

  document.getElementById("withdrawAmount").value = "";
});

function addAmount(id) {
  const amount = document.getElementById(id).value;
  const amountNumber = parseFloat(amount);
  return amountNumber;
}

function updateAmount(id, depositAmountNumber) {
  const current = document.getElementById(id).innerHTML;
  const currentNumber = parseFloat(current);

  const totalAmount = depositAmountNumber + currentNumber;
  document.getElementById(id).innerHTML = totalAmount;
}
