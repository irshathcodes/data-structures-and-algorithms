function searchUsingRecursion(arr: unknown[], value: unknown) {
    if (!arr.length) return false;
    const lastItem = arr[arr.length - 1];
    if (lastItem === value) {
        return true;
    } else {
        arr.pop();
        return searchUsingRecursion(arr, value);
    }
}

function iterationUsingRecursion(num: number) {
    if (num <= 0) {
        console.log("All done");
        return;
    }
    console.log("num", num);
    num--;
    iterationUsingRecursion(num);
}

function factorialUsingLoop(num: number): number {
    let total = 1;
    for (let i = num; i > 1; i--) {
        total = total * i;
    }
    return total;
}

function factorialUsingRecursion(num: number): number {
    if (num === 1) return num;

    return num * factorialUsingRecursion(num - 1);
}

function collectOddValuesUsingRecursion(arr: number[]): number[] {
    let oddArr: number[] = [];

    if (arr.length === 0) return oddArr;

    if (arr[0] % 2 !== 0) {
        oddArr.push(arr[0]);
    }

    oddArr = oddArr.concat(collectOddValuesUsingRecursion(arr.slice(1)));

    return oddArr;
}

console.log(collectOddValuesUsingRecursion([1, 2, 3, 4, 5]));

function power(base: number, exponent: number): number {
    if (exponent === 0) return 1;

    return base * power(base, exponent - 1);
}

console.log(power(2, 4));
