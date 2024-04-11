function convertToBinary(decimal) {
    const log = Math.log2(decimal);
    const round = Math.floor(log);

    return Number(decimal).toString(2);

    console.log( 2 ** round);
    return round;
}

console.log(convertToBinary(53));