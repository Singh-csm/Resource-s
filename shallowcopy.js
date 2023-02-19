


const originalArray = [1, 2, 3];
const copiedArray = originalArray.slice(2);

// Modify the original array
originalArray.push(4);

console.log(originalArray); // Output: [1, 2, 3, 4]
console.log(copiedArray); // Output: [1, 2, 3]
