process.stdin.resume();
process.stdin.setEncoding('utf8');

// your code goes here


process.stdin.on('data', function (line) {
    let wda = parseInt(line.split(' ')[0]);
    let bal = parseFloat(line.split(' ')[1]);
    if (wda % 5 !== 0 || bal - 0.50 < wda) {
        console.log(bal.toFixed(2));
        return;
    }
    console.log((bal - wda - 0.50).toFixed(2));
});