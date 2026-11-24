/**
 * LeetCode 383: Ransom Note
 *
 * Pattern: Hash Map
 * Difficulty: Easy
 *
 * Time Complexity: O(n)
 * Space Complexity: O(min(n, charset))
 */

var canConstruct = function (ransomNote, magazine) {
    let map = {};
    
    for (let char of magazine) {
        map[char] = (map[char] || 0) + 1
    }

    for (let char of ransomNote) {
        if (!map[char]) return false
        else map[char] -= 1
    }

    return true
};
