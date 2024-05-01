/*
Create 4 functions for the 4 main mathematical operations
(-,+,/,*). Return the calculated value and then output it to the
screen.
*/


// Function to add two numbers

function Sum(a, b) {
    return a + b;
}
console.log(Sum(13, 14));  

// Function to subtract one number from another

function Subtract(a, b) {
    return a - b;
}
console.log(Subtract(14, 6));  

// Function to multiply two numbers

function Multiply(a, b) {
    return a * b;
}
console.log(Multiply(5, 3));  

// Function to divide one number by another

function Divide(a, b) {
    if (b === 0) {
        console.error('Error: Division by zero');
        return undefined;  
    }
    return a / b;
}
console.log(Divide(20, 4));  
console.log(Divide(20, 0));  

/*
console.log("Testing Math Functions:");
console.log("Sum(13, 14):", Sum(13, 14));  // Expected Output: 27
console.log("Subtract(14, 6):", Subtract(14, 6));  // Expected Output: 8
console.log("Multiply(5, 3):", Multiply(5, 3));  // Expected Output: 15
console.log("Divide(20, 4):", Divide(20, 4));  // Expected Output: 5
console.log("Divide(20, 0):", Divide(20, 0));  // Expected Error Output: Error: Division by zero
*/
