// const loanAmountValue=document.getElementById("amountloan").value;
// const interestRateValue=document.getElementById("intrate").value;
// const monthsDuration=document.getElementById("duration").value;
// const paymentMonthly=document.getElementById("payment");


// input.addEventListener("onchange", function() {

// })



function calcLoan() {

    loanAmountValue=document.getElementById("amountloan").value;

    interestRateValue=document.getElementById("intrate").value;

    monthsDuration=document.getElementById("duration").value;
    
 
    interest = (loanAmountValue * (interestRateValue * 0.01)) /monthsDuration;
    monthlyPayment = (loanAmountValue / monthsDuration + interest).toFixed(2);

    document.getElementById(
        "payment"
        ).innerHTML = `Monthly Payment: ${monthlyPayment}`;

}

input.addEventListener("onchange", calcLoan);
