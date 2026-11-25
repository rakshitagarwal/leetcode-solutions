/**
 * LeetCode 18: 4Sum
 *
 * Pattern: Two Pointers
 * Difficulty: Medium
 *
 * Time Complexity: O(n^3)
 * Space Complexity: O(min(n, charset))
 */

var fourSum = function(nums, target) {
    let quads = [];
    if (nums.length < 4) return quads;
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 3; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;  // avoid duplicates

        for (let j = i + 1; j < nums.length - 2; j++) {
            if (j > i + 1 && nums[j] === nums[j - 1]) continue;  // avoid duplicates
            // Two pointer from here
            let left = j + 1;
            let right = nums.length - 1;
            while (left < right) {
                const sum = nums[i] + nums[j] + nums[left] + nums[right];
                if (sum === target) {
                    quads.push([nums[i], nums[j], nums[left], nums[right]]);
                    left++;
                    right--;
                    // Skip duplicates
                    while (left < right && nums[left] === nums[left - 1]) left++;
                    while (left < right && nums[right] === nums[right + 1]) right--;
                } else if (sum < target) {
                    left++;
                } else {
                    right--;
                }
            }
        }
    }

    return quads;
};