function productExceptSelf(nums: number[]): number[] {
    const answer: number[] = [];
    answer[0] = 1;

    for (let i = 1; i < nums.length; i++) {
        answer[i] = answer[i - 1] * nums[i - 1];
    }

    let right: number = 1;

    for (let i = nums.length - 1; i >= 0; i--) {
        answer[i] = answer[i] * right;
        right = right * nums[i];
    }

    return answer;
};
