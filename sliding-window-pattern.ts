/*
Write a function called maxSubarraySum which accepts an array
of integers and a number called n. The function should calculate
the maximum sum of n consecutive elements in the array.
*/

// Naive approach
function maxSubarraySumNaiveApproach(arr: number[], n: number): number | null {
	if (arr.length === 0) return null;
	let result = 0;

	for (let i = 0; i <= arr.length - n; i++) {
		let total = 0;

		for (let j = 0; j < n; j++) {
			total += arr[i + j];
		}

		if (total > result) {
			result = total;
		}
	}

	return result;
}

console.log(
	maxSubarraySumNaiveApproach([4, 12, 1, 2, 3, 4, 5, 10, 4, 2, 12, 8], 2)
);
