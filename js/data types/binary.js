function convertToBinary(decimal) {
    const log = Math.log2(decimal);
    const round = Math.floor(log)

    console.log( 2 ** round);
    return round;
}

console.log(convertToBinary(53));