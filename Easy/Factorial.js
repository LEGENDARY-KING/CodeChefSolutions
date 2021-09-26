process.stdin.resume();
process.stdin.setEncoding('utf8');

// your code goes here

process.stdin.on("data", chunk => {
    let input = chunk.split(/\r?\n/);
    input.length = parseInt(input[0]) + 1;
    input = input.filter(a => a !== undefined);
    let num = parseInt(input[0]);
    input.shift();
    input.forEach(n => {
        var count = 0;
        for (var i = 5; n / i > 0; i *= 5) {
            count = count + Math.floor(n / i);
        }
        console.log(count);
    });
});

