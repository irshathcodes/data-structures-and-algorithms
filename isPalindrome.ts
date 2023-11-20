function isPalindromeUsingRegex(s: string): boolean {
    const cleanStr = s.toLowerCase().replace(/[^a-z0-9]/g, "");
    return cleanStr === cleanStr.split("").reverse().join("");
}

function isPalindromeUsingTwoPointers(s: string): boolean {
    let low = 0;
    let high = s.length - 1;

    function isLowercaseAlphaNumeric(value: string): boolean {
        return Boolean(
            (value >= "a" && value <= "z") || (value >= "0" && value <= "9")
        );
    }

    while (high >= low) {
        const firstValue = s[low].toLowerCase();
        const lastValue = s[high].toLowerCase();

        if (!isLowercaseAlphaNumeric(firstValue)) {
            low++;
        } else if (!isLowercaseAlphaNumeric(lastValue)) {
            high--;
        } else {
            if (firstValue !== lastValue) return false;
            high--;
            low++;
        }
    }
    return true;
}

const str = "A man, a plan, a canal: Panama";
console.log(isPalindromeUsingRegex(str));
console.log(isPalindromeUsingTwoPointers(str));
