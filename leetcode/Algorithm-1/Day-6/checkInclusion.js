/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
 var checkInclusion = function(s1, s2) {
    let charMap = {}

    for (i = 0; i < 26; i++) {
        const charCode = 'a'.charCodeAt(0) + i;
        charMap[String.fromCharCode(charCode)] = charCode;
    }
    const s1Len = s1.length,
        s2len = s2.length;

    if (s1Len > s2len) {
        return false;
    }

    let s1Counter = 0,
        s2Counter = 0;
    for (let i = 0; i < s1Len; i++) {
        s1Counter += s1.charCodeAt(i) * charMap[s1[i]];
        s2Counter += s2.charCodeAt(i) * charMap[s2[i]];
    }

    if (s2Counter === s1Counter) {
        return true;
    }

    let left = 1,
        right = s1Len;

    while (right < s2len) {

        s2Counter -= s2.charCodeAt(left - 1) * charMap[s2[left - 1]];
        s2Counter += s2.charCodeAt(right) * charMap[s2[right]];

        if (s2Counter === s1Counter) {
            return true;
        }

        left++;
        right++;
    }

    return false;
};