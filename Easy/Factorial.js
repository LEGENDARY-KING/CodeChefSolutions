process.stdin.resume();
process.stdin.setEncoding('utf8');

// your code goes here

process.stdin.on("data", chunk => {
    let input = chunk.split(/\r?\n/);
    input.length = parseInt(input[0]) + 1;
    input = input.filter(a => a != undefined);
    let num = parseInt(input[0]);
    input.shift();
    input.forEach(n => {
        let factorial = 1;
        for (let i = n; i > 0; i--) {
            factorial *= i;
        }
        let stringFactorial = toPlainString(factorial);
        stringFactorial = stringFactorial.split("").reverse().join("");
        let firstNumberarr = [];
        for (let i = 1; i <= 9; i++) {
            firstNumberarr.push(stringFactorial.indexOf(i + ""));
        }
        firstNumberarr = firstNumberarr.filter(a => a != -1);
        firstNumberarr.sort()
        console.log(firstNumberarr[0])
    });
});

function toPlainString(num) {
    return ('' + +num).replace(/(-?)(\d*)\.?(\d*)e([+-]\d+)/,
        function (a, b, c, d, e) {
            return e < 0
                ? b + '0.' + Array(1 - e - c.length).join(0) + c + d
                : b + c + d + Array(e - d.length + 1).join(0);
        });
}