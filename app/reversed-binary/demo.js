/**
 * @example
 *
 * $ node demo.js
 *   Enter a number...
 *   47
 *   Reversed Binary Representation: 61
 */
var rb = require("./ReversedBinary.js");

process.stdin.setEncoding('utf8');
process.stdin.resume();

process.stdout.write("Enter a number... " + "\n");

process.stdin.on('data', function(data) {
    var conversion = rb.convert(parseInt(data, 10)),
        tag = "Reversed Binary Representation: ";
    process.stdout.write(tag + conversion + "\n");
});
