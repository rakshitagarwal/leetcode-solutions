/**
 * LeetCode 1: Two Sum
 *
 * Pattern: Hash Map
 * Difficulty: Easy
 *
 * Time Complexity: O(n)
 * Space Complexity: O(min(n, charset))
 */

var twoSum = function (nums, target) {
    // Use a Map to store the value as the key and the index as the value
    let prevMap = new Map();

    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i];

        // Check if the complement exists in our Map
        if (prevMap.has(diff)) {
            return [prevMap.get(diff), i];
        }

        // Add the current number and its index to the Map
        prevMap.set(nums[i], i);
    }

    return [];
};