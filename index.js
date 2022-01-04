const billAmount = document.querySelector("#bill-amount");
const checkButton = document.querySelector("#check-button");
const cashGiven = document.querySelector("#cash-given");
const message = document.querySelector("#error-message");
const availableNotes = [2000, 500, 100, 20, 10, 5, 1];
const noOfNotes = document.querySelectorAll(".no-of-notes");

checkButton.addEventListener("click", function validateBillAndCashAmount() {
    hideMessage();
    if (billAmount.value > 0) {
        if (cashGiven.value >= billAmount.value) {
            const amountToBeReturned = cashGiven.value - billAmount.value;
            calculateChange(amountToBeReturned);
        } else {
            showMessage("The cash provided should be atleast equal to the billed amount");
        }
    } else {
        showMessage("Invalid Bill Amount");
    }
});


function calculateChange(amountToBeReturned){
    for(let i = 0; i < availableNotes.length; i++){
        const numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
        amountToBeReturned %= availableNotes[i];
        noOfNotes[i].innerText = numberOfNotes;
    }
    
}

function hideMessage(){
    message.style.display = "none";
}

function showMessage(msg) {
    console.log("here");
    message.style.display = "block";
    message.innerText = msg;

}