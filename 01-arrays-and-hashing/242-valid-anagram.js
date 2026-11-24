/**
 * LeetCode 242: Valid Anagram
 *
 * Pattern: Hash Map
 * Difficulty: Easy
 *
 * Time Complexity: O(n)
 * Space Complexity: O(min(n, charset))
 */

var isAnagram = function (s, t) {
    if (s.length !== t.length) return false;
    
    let countS = {};
    let countT = {};

    for (let i = 0; i < s.length; i++) {
        countS[s[i]] = (countS[s[i]] || 0) + 1
        countT[t[i]] = (countT[t[i]] || 0) + 1
    }

    // Iterate over the keys of countS
    for (let c in countS) {
        // Check if the count of character 'c' in countS matches countT.
        if (countS[c] !== (countT[c] || 0)) return false;
    }

    return true;
};