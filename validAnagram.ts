function isValidAnagram(str1: string, str2: string): boolean {
	const lookupObj: Record<string, number> = {};

	for (let char of str1) {
		lookupObj[char] = (lookupObj[char] || 0) + 1;
	}

	for (let char of str2) {
		if (!lookupObj[char]) return false;
		lookupObj[char] -= 1;
	}

	return true;
}
