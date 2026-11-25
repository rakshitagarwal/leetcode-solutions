

var intersection = function (nums1, nums2) {
    let set1 = new Set(nums1); // unique
    let set2 = new Set(nums2); // unique
    const result = []

    for (let num of set1) {
        if (set2.has(num)) result.push(num)
    }

    return result
};