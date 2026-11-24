/**
 * LeetCode 217: Contains Duplicate
 *
 * Pattern: Hash Set
 * Difficulty: Easy
 *
 * Time Complexity: O(n)
 * Space Complexity: O(min(n, charset))
 */

var containsDuplicate = function (nums) {
    let set = new Set(nums)
    return set.size !== nums.length
};