/* Design and implement a program that will allow us to determine the length of
time needed to pay off a credit card balance, as well as the total interest paid.

The program must implement the following functions:

    displayWelcome

This function should display the welcome message to the user explaining what
the program does.

    calculateMinimumPayment

This function calculates the minimum payment. It should take balance and
minimum payment rate as arguments and return the minimum payment.

So the value you display for minimum payment is the value you get from this
method. Do not use a literal hardcoded value when you display the minimum
payment!

    displayPayments

This function displays the actual payment schedule. It should take the balance
and monthly interest rate as arguments.

Use the 1500, 18% and 2% literal values below. */

/* Pseudocode
create variable to hold the 2% payment rate
create a variable that holds the initial balance on the credit card of $1500
create a variable for each number of payments. Start at 1 for the first payment
create a variable to hold the total amount of interest that has been paid
create a variable that holds the interest rate which is 18%
create a monthly interest rate which is 18% / 12
create a function called displayWelcome that holds the welcome message and displays it to the user
create a function that calulates the minimum payment
  min payment rate is balance * payment rate
  min payment has to be a minimum of $20
create a function that displays the payment
calculate this months interest paid
  balance * monthly interest rate
calculate this months new balance
  (balance + interestPaid) - minimumPayment
calulate the year that you are paying in
display the year, balance, payment number, interest paid total and minimum
  payment to the user

/* This program will take a balance on a credit card along with your interest rate,
and payment rate with minimum payment and will display to the user how long
it will take them to pay their credit card off paying only the minimum payment.
it will also display how much interst they will pay each.
 */

displayWelcome(); // call the displayWelcome function
console.log("Year      Balance  Payment Number Interest Paid  Minimum Payment");

// variables for calculateMinimumPayment
var paymentRate = .02; // this number will not change. 2% minumum payment
var monthlyBalance = 1500; // starts at 1500 but needs to have a new sum each time

var numOfPayments = 1; // counter for how many number of payments paid. start with 1 for the 1st payment

var interestTotal = 0; //Declare a global counter for interest total that will be displayed.

// variables for displayPayments
var interestRate = .18; //18% yearly interest rate
var monthlyRate = interestRate / 12; // 18% interest rate divided by 12 months of the year = .015

var symbol = "$";


while (monthlyBalance >= 0.0) { // create a loop that calls the functions

    var minimumPayment = calculateMinimumPayment(monthlyBalance, paymentRate);
    var monthlyBalance = displayPayments(monthlyBalance, monthlyRate);

}


function displayWelcome() { // this function contains and shows the welcome message
    var message = 'This program will determine the time to pay off a credit ' +
        'card and the interest paid based on the current balance, \nthe interest rate, ' +
        'and the monthly payments made.\nBalance on your credit card: 1500 \n' +
        'Interets Rate: 18\nAssuming a minimum payment of 2% of the balance ($20 min)\n' +
        'Your minumum payment would be $30.00 ';
    console.log(message); // display the welcome message
}

//Calculates the minimum mothly payment using the formula fo current balance * .02
function calculateMinimumPayment(balance, minimumPaymentRate) {
    var minPayment = balance * minimumPaymentRate;
    if (minPayment <= 20.00) { // min payment has to be at least $20
        minPayment = 20.00;
    }
    return minPayment;
}

function displayPayments(balance, monthlyInterestRate) {

    var interestPaid = (balance * monthlyInterestRate); // This months interest
    interestTotal += interestPaid; // send the total back to counter for displaying

    var newBalance = (balance + interestPaid) - minimumPayment; // each new balance

    var year = 1 + (numOfPayments / 12.01); // the year starting at paying in the 1st year. 12 months plus 1 day.

    // numOfPayments -1 needs to be divisible by 12 to get every 13 months
    if ((numOfPayments - 1) % 12 == 0) { // display only the first showing of the year
        var displayYear = Math.floor(year);
    } else {
        var displayYear = ' ';
    }

    //last payment
    if (newBalance <= minimumPayment) {
        minimumPayment = newBalance;
    }

    console.log('\t' + displayYear + ' $ ' + newBalance.toFixed(2) + '\t\t' + numOfPayments + ' ' + symbol +
        ' ' + interestTotal.toFixed(2) + ' \t' + symbol + '\t' + minimumPayment.toFixed(2));

    numOfPayments++; // add 1 to the counter for each time through the loop for number of payments
    return newBalance;
}
