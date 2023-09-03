function sumZero(arr: number[]): [number, number] | undefined {
	let leftIndex = 0;
	let rightIndex = arr.length - 1;

	while (leftIndex < rightIndex) {
		const leftValue = arr[leftIndex];
		const rightValue = arr[rightIndex];
		const total = leftValue + rightValue;

		if (total === 0) return [leftValue, rightValue];
		else if (total > 0) rightIndex--;
		else leftIndex++;
	}

	return undefined;
}

const result = sumZero([-3, -2, -1, 0, 3, 5]);
console.log(result);
