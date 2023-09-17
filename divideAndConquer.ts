// just a introduction to divide and conquer pattern using binary search.
function binarySearch<T extends string[] | number[]>(
	arr: T,
	value: string | number
) {
	let low = 0;
	let high = arr.length - 1;

	while (high >= low) {
		let middle = Math.floor(low + (high - low) / 2);
		if (arr[middle] === value) {
			return middle;
		} else if (arr[middle] > value) {
			high = middle - 1;
		} else {
			low = middle + 1;
		}
	}

	return -1;
}

console.log(binarySearch([1, 2, 3, 4], 4));
