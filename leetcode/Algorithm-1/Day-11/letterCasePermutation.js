/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function (s) {
    const letterIndices = [];
    for (let i = 0; i < s.length; i++)
        if (s[i] >= 'a' && s[i] <= 'z' || s[i] >= 'A' && s[i] <= 'Z')
            letterIndices.push(i);

    const result = [];
    const n = letterIndices.length;

    // No letters in s. 
    if (n === 0)
        return [s];

    const currPerm = s.split('');
    const put = (i, letter) => {
        const letterIndex = letterIndices[i];
        currPerm[letterIndex] = letter;

        if (i === n - 1) {
            result.push(currPerm.join(''));
        } else {
            const nextLetterIndex = letterIndices[i + 1];
            put(i + 1, s[nextLetterIndex].toLowerCase());
            put(i + 1, s[nextLetterIndex].toUpperCase());
        }

        currPerm[letterIndex] = s[letterIndex];
    }

    // Start putting uppercase of first letter since we already put original version
    put(0, s[letterIndices[0]].toLowerCase());
    put(0, s[letterIndices[0]].toUpperCase());

    return result;
};