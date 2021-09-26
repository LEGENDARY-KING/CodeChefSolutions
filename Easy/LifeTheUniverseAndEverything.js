process.stdin.resume();
process.stdin.setEncoding('utf8');

// your code goes here

process.stdin.on("data", chunk => {
    let input = chunk.split('/\r?\n/')
    input.forEach(n => {
        if (n == '42') return
        console.log(n)
    })
})