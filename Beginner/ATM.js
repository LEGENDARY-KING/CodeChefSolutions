process.stdin.resume();
process.stdin.setEncoding('utf8');

// your code goes here

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Please enter the amount you want to withdraw(Must be multiple of 5) And your total balance(Split with a space)", input => {
    let wda = parseInt(input.split(" ")[0])
    let bal = parseFloat(input.split(" ")[1]).toFixed(2)
    if (isNaN(wda) || isNaN(bal)) return console.log("Not a number")
    if (bal <= 0 || bal >= 2000 || wda <= 0 || wda >= 2000) return console.log("Wrong Input")
    if (wda % 5 !== 0) return console.log(bal)
    if (bal < wda) return console.log(bal)
    console.log((bal - wda - 0.50).toFixed(2))
})