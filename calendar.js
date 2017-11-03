/* Write a program called calendar.js that displays a calendar month for May
2012 as the month and year. You must use a loop. The format of the month should
be as shown below: Hint: You can't use console log and print on the same line.
Try storing the entire row as one concatenated string and then displaying it.
 You must use loops for this one.  Do not just print the calendar as a series
 of console.log statements!  */

// Pseudocode
// create the header
// create the days of the week
// use a loop to generate the calendar # day of the week and display that week
// do this for the 5 weeks in May




console.log("\t\t May 2012"); // create the header
console.log("Sun \tMon \tTues \tWed \tThurs \tFri \tSat"); // create the days of the week


process.stdout.write("\t\t"); // create the tabs so that the calendar starts on tuesday
for (var i = 1; i <= 5; i++) { // create the 1st week
    process.stdout.write(`${i}\t`); // display the first week
}
console.log(); // start a new line
for (var i = 6; i <= 12 && i >= 6; i++) { // create the 2nd week
    process.stdout.write(`${i}\t`);
}
console.log();
for (var i = 13; i <= 19 && i >= 13; i++) { // create the 3rd week
    process.stdout.write(`${i}\t`);
}
console.log();
for (var i = 20; i <= 26 && i >= 20; i++) { // create the 4th week
    process.stdout.write(`${i}\t`);
}
console.log();
for (var i = 27; i <= 31 && i >= 27; i++) { // create the 5th week
    process.stdout.write(`${i}\t`);
}
