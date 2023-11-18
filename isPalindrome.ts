function isPalindromeUsingRegex(s: string): boolean {
    const cleanStr = s.toLowerCase().replace(/[^a-z0-9]/g, "");
    return cleanStr === cleanStr.split("").reverse().join("");
}

const str = "A man, a plan, a canal: Panama";
console.log(isPalindromeUsingRegex(str));
