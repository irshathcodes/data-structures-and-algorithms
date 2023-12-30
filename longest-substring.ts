function lengthOfLongestSubstring(s: string): number {
    let charSet = new Set<string>();
    let start = 0;
    let end = 0;
    let maxLength = 0;

    while (end < s.length) {
        const currentChar = s[end];
        if (charSet.has(currentChar)) {
            charSet.delete(s[start]);
            start++;
        } else {
            charSet.add(currentChar);
            maxLength = Math.max(charSet.size, maxLength);
            end++;
        }
    }

    return maxLength;
}
