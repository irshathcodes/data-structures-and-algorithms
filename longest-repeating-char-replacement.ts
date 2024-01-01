function characterReplacement(s: string, k: number): number {
    let result = 0;
    const charMap: Record<string, number> = {};
    let mostFrequentCharCount = 0;
    let start = 0;

    for (let end = 0; end < s.length; end++) {
        const currentChar = s[end];
        charMap[currentChar] = (charMap[currentChar] || 0) + 1;
        mostFrequentCharCount = Math.max(
            mostFrequentCharCount,
            charMap[currentChar]
        );

        while (end - start + 1 - mostFrequentCharCount > k) {
            charMap[s[start]]--;
            start++;
        }

        result = Math.max(result, end - start + 1);
    }

    return result;
}
