

var containsNearbyDuplicate = function (nums, k) {
    let window = new Set();
    let L = 0;

    for (let R = 0; R < nums.length; R++) {
        // Keep the window size at most k
        if (R - L > k) {
            window.delete(nums[L]);
            L += 1;
        }

        // Check if the current number is already in our window
        if (window.has(nums[R])) {
            return true;
        }

        // Add current number to the window
        window.add(nums[R]);
    }

    return false;
};