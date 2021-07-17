
exports.sizeValue =  function sizeValue(size) {
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

exports.humanValue =  function sizeValue(size) {
    if (size < 1024) return `${size}b`;
    if (size < 1024 * 1024) return `${size / 1024}kb`;
    if (size < 1024 * 1024 * 1024) return `${size / 1024 / 1024}Mb`;
    if (size < 1024 * 1024 * 1024 * 1024) return `${size / 1024 / 1024 / 1024}Gb`;
}
