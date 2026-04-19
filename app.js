let balance = 0;
let user = "";

function login() {
  user = document.getElementById("username").value;
  if(user === "") {
    alert("Please enter your username");
    return;
  }
  document.getElementById("loginBox").style.display = "none";
  document.getElementById("dashboard").style.display = "block";
  document.getElementById("user").innerText = user;
}

function register() {
  alert("Registration is currently unavailable");
}

function logout() {
  location.reload();
}

function showDeposit() {
  document.getElementById("deposit").style.display = "block";
  document.getElementById("withdraw").style.display = "none";
  document.getElementById("crypto").style.display = "none";
  document.getElementById("social").style.display = "none";
}

function showWithdraw() {
  document.getElementById("deposit").style.display = "none";
  document.getElementById("withdraw").style.display = "block";
  document.getElementById("crypto").style.display = "none";
  document.getElementById("social").style.display = "none";
}

function showTrading() {
  alert("Trading functionality is coming soon");
}

function showCrypto() {
  document.getElementById("crypto").style.display = "block";
  document.getElementById("deposit").style.display = "none";
  document.getElementById("withdraw").style.display = "none";
  document.getElementById("social").style.display = "none";
  // Simulate Crypto Value
  document.getElementById("cryptoValue").innerText = "$50,000"; // This should be dynamically fetched
}

function showSocial() {
  document.getElementById("social").style.display = "block";
  document.getElementById("deposit").style.display = "none";
  document.getElementById("withdraw").style.display = "none";
  document.getElementById("crypto").style.display = "none";
}

function deposit() {
  let depositAmount = document.getElementById("depositAmount").value;
  if (depositAmount >= 3) {
    balance += parseFloat(depositAmount);
    alert("Deposit successful!");
    updateBalance();
  } else {
    alert("Minimum deposit is $3");
  }
}

function withdraw() {
  let withdrawAmount = document.getElementById("withdrawAmount").value;
  if (withdrawAmount >= 9 && withdrawAmount <= balance) {
    balance -= parseFloat(withdrawAmount);
    alert("Withdrawal successful!");
