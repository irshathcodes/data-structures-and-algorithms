function sumZeroNaiveApproach(arr: number[]): [number, number] | undefined {
	for (let i = 0; i < arr.length; i++) {
		const firstValue = arr[i];
		for (let j = i + 1; j < arr.length; j++) {
			const secondValue = arr[j];
			if (firstValue + secondValue === 0) return [firstValue, secondValue];
		}
	}

	return undefined;
}


function sumZeroPointerApproach(arr: number[]): [number, number] | undefined {
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

const result = sumZeroPointerApproach([-3, -2, -1, 0, 3, 5]);
console.log(result);
