function addUpto(n: number): number {
	let total = 0;

	for (let i = 1; i <= n; i++) {
		total += i;
	}

	return total;
}

function betterAddUpto(n: number): number {
	return (n * (n + 1)) / 2;
}

// 1 2 3 4 5
const loopImplementationStart = performance.now();
console.log(addUpto(10000000000));
const loopImplementationEnd = performance.now();

const mathImplementationStart = performance.now();
console.log(betterAddUpto(10000000000));
const mathImplementationEnd = performance.now();

console.log(
	'Loop Implementation took: ',
	loopImplementationEnd - loopImplementationStart,
	'ms'
);
console.log(
	'Math implementation took: ',
	mathImplementationEnd - mathImplementationStart,
	'ms'
);
