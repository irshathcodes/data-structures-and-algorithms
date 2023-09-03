// Not the best solution in the world but works
function uniqueValuesUsingLookup(arr: number[]): number {
	const obj: Record<string, boolean> = {};
	if (arr.length === 0) return 0;

	for (let i = 0; i < arr.length; i++) {
		const value = arr[i];
		if (obj[value]) continue;
		obj[value] = true;
	}
	return Object.keys(obj).length;
}

// Good one liner
function uniqueValuesUsingSet(arr: number[]): number {
	if (arr.length === 0) return 0;
	return new Set(arr).size;
}

// Using Multiple pointers approach
function uniqueValuesUsingPointers(arr: number[]): number {
	if (arr.length === 0) return 0;
	let i = 0;

	for (let j = 1; j < arr.length; j++) {
		if (arr[i] !== arr[j]) {
			i++;
			arr[i] = arr[j];
		}
	}

	return i + 1;
}

console.log(uniqueValuesUsingPointers([1, 1, 2, 3, 3, 3, 4, 4]));
