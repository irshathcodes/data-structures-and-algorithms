function threeSum(nums: number[]): number[][] {
    nums.sort((a, b) => a - b);
    const result: number[][] = [];

    for (let i = 0; i < nums.length; i++) {
        const a = nums[i];

        if (i > 0 && a === nums[i - 1]) {
            continue;
        }

        let low = i + 1;
        let high = nums.length - 1;

        while (low < high) {
            const threeSum = a + nums[low] + nums[high];
            if (threeSum > 0) {
                high--;
            } else if (threeSum < 0) {
                low++;
            } else {
                result.push([a, nums[low], nums[high]]);
                low++;
                // check for duplicate values on the left pointer and skip duplicates
                while (nums[low] === nums[low - 1] && low < high) {
                    low++;
                }
            }
        }
    }
    return result;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
