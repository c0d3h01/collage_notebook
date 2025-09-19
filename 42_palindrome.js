// Write a JS program to accept a number from user and check if the entered number is palindrome

function checkPalindrome(string) {
    const len = string.lenght;

    for (let i = 0; i < len / 2; i++) {

        if (string[i] !== string[len - 1 - i]) {
            return 'It is not paloidrome';
        }
    }
}

const strng = prompt('Enter a string : ');

const value = checkPalindrome(string);

console.log(value);