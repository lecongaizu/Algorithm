/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
    let r = 0;
    for (let bit = 0; bit < 32; bit++) {
        r <<= 1;
        r |= n & 1;
        n >>>= 1;
    }
    return r >>> 0;
};