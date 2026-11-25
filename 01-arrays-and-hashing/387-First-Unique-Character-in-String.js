

var firstUniqChar = function (s) {
    let map = new Map();

    // Count frequency of each character
    for (let char of s) {
        map.set(char, (map.get(char) || 0) + 1);
    }

    // Find the first character with frequency 1
    for (let i = 0; i < s.length; i++) {
        if (map.get(s[i]) === 1) return i;
    }

    return -1;
};