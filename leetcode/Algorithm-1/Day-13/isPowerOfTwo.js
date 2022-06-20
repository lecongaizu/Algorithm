/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {

    if (n == 1) return true;
    if (n % 2 != 0 || n == 0) return false;
    while (n != 0) {
        n = Math.floor(n / 2);
        if (n == 1) return true;
        if (n % 2 != 0) return false;
    }

    return true;
};