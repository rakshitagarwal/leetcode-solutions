

var fourSumCount = function (nums1, nums2, nums3, nums4) {
    let map = new Map(), count = 0;

    // Store frequency of all pair sums from first two arrays
    for (let a of nums1) {
        for (let b of nums2) {
            let sum = a + b;
            map.set(sum, (map.get(sum) || 0) + 1);
        }
    }
    // Find complementary sums from the remaining two arrays
    for (let c of nums3) {
        for (let d of nums4) {
            let sum = c + d;
            count += map.get(-(sum)) || 0;
        }
    }

    return count;
};