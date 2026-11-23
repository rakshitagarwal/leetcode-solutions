
/**
 * LeetCode 3: Longest Substring Without Repeating Characters
 *
 * Pattern: Sliding Window + Set
 * Difficulty: Medium
 *
 * Time Complexity: O(n)
 * Space Complexity: O(min(n, charset))
 */

var lengthOfLongestSubstring = function (s) {
    let charSet = new Set();
    let l = 0;
    let res = 0;

    for (let r = 0; r < s.length; r++) {
        // While the current character is already in our set (duplicate found)
        while (charSet.has(s[r])) {
            // Remove the leftmost character from the set and shrink the window
            charSet.delete(s[l]);
            l += 1;
        }
        // Add the current character to the set
        charSet.add(s[r]);

        // Update the maximum length found so far
        res = Math.max(res, r - l + 1);
    }

    return res;
};
