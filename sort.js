let exec = require('child_process').execSync;
let sizeValue = require('./size-value').sizeValue;
let humanValue = require('./size-value').humanValue;
let result = exec('docker images').toString();
let rgx = /^([\w./:<>-]+)\s+([\w<>.-]+)\s+([\da-f]+)\s+(\d+\s+\w+\s+\w+)\s+([.\d]+[MGk]?B)\s*$/;

let w = result.split(/[\n\r]+/);
w.shift();

let e = w
    .filter(l => !!l)
    .map(line => {
        let match = line.match(rgx);
        let [, name, tag, id, created, size] = match;

        return {name, tag, id, created, size: sizeValue(size), hs: size};
    })
    .sort((a, b) => b.size - a.size)

;

console.log(e);
