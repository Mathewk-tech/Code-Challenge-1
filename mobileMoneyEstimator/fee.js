function estimateTransactionFee(){
    // prompt the user to enter amount
    const userinput=prompt("Unatuma Ngapi? (KES):");
    
    // convert string to an integer
    amountToSend =parseInt(userinput);
    
     if(isNaN(amountToSend)||amountToSend<=0){
        alert("Invalid input! Please enter a positive number.");
        return;
    }
    // calculates the transactionfee by multiplying amountToSend by 1.5%
    const  transactionfee=15/1000*amountToSend; 
    // creates a variable to store the actualtransaction fee for minimum and maximum
    var actualtransactionfee;
    // it gives 10 as the value when the transactionfee is less than 10
    if(transactionfee <10){
        actualtransactionfee=10;
        // it gives 70 as the value when the transactionfee is greater than 70
    }
    else if(transactionfee>70){
        actualtransactionfee=70;
    }
    // it gives the value obtained in the transactionfee since it does not exceed 70 and is not less than 10
    else{
        actualtransactionfee=transactionfee
    }
    // calculates the amount to be debited
const amounttobedebited=(amountToSend+actualtransactionfee);
//creates a multiline string to store the output message
var message=`
    Sending KES ${amountToSend}
    Calculated Transaction Fee: KES ${actualtransactionfee}
    Total amount to be debited: KES ${amounttobedebited}\n
    Send Money Securely!
`
// to print the output to console
console.log(message);
//to display an alert pop up for the output message
alert(message);
}
//to initialize the function when the script is loaded
estimateTransactionFee();