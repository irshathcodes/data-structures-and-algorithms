function sumZero(arr: number[]): [number, number] | undefined {
	for (let i = 0; i < arr.length; i++) {
		const firstValue = arr[i];
		for (let j = i + 1; j < arr.length; j++) {
			const secondValue = arr[j];
			if (firstValue + secondValue === 0) return [firstValue, secondValue];
		}
	}

	return undefined;
}

const result = sumZero([-3, -2, -1, 2]);
console.log(result);
