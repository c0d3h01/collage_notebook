## Function to get 5 numbers from the user and display only the odd numbers

```js
function displayOddNumbers() {
  let numbers = [];

  // Accept 5 numbers from the user
  for (let i = 0; i < 5; i++) {
    let num = parseInt(prompt("Enter number $(i+1): "), 10);
    if (!isNaN(num)) {
      numbers.push(num);
    } else {
      alert("Please enter a valid number.");
      i--; // Decrement i to repeat this iteration
    }
  }

  let oddNumbers = numbers.filter((num) => num % 2 !== 0);

  // Display the odd numbers
  if (oddNumbers.length > 0) {
    alert("Odd numbers are: " + oddNumbers.join(", "));
    console.log("Odd numbers:", oddNumbers);
  } else {
    alert("No odd numbers were entered.");
    console.log("No odd numbers were entered.");
  }
}

displayOddNumbers();
```
