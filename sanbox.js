let rgx = /^([\w./:<>-]+)\s+([\w<>.-]+)\s+([\da-f]+)\s+(\d+\s+\w+\s+\w+)\s+([.\d]+[MGk]?B)\s*$/;

function sizeValue(size) {
    let [m, value, unit] = size.match(/([.\d]+)([MGk]?B)/);

    switch (unit) {
        case 'kB':
            return parseFloat(value) * 1024;
        case 'MB':
            return parseFloat(value) * 1024 * 1024;
        case 'GB':
            return parseFloat(value) * 1024 * 1024 * 1024;
    }
}

input.split(/[\n\r]+/)
    .filter(l => !!l)
    .map(line => {
        let match = line.match(rgx);
        let [, name, tag, id, created, size] = match;

        return {name, tag, id, created, size: sizeValue(size)};
    })
    .sort((a, b) => b.size - a.size)
;
