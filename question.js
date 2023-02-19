
// "QUESTION 1

// for (var i = 0; i <= 3; i++) {
   
//     async function setTimeout() {await Promise.resolve(console.log(i), 1000)};
//     console.log(setTimeout())
// }





// for (let i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 1000);
// }

// END

// QUESTION 2

// let a = 3;
// let b = new String("d");
// let c = 3;

// console.log(a == b);     //true
// console.log(a === b);   // false
// console.log( b);       // Number
// console.log(b === c); //false

// END

// QUESTION 3

// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }


// Person.prototype.getFullName = function() {
//   return `${this.firstName} ${this.lastName}`;
// };

// const member = new Person('Lydia', 'Hallie');

// console.log(member.getFullName());

// END

// QUESTION 4


let a = {};  // b = 123 // c=456  
const b = { key: "b" };   

a[b] = 123;   
// const b = { key: "b" };
// const c = { key: "c" };
console.log(a[b]);
// a[n]=4
// a[m]=500
// console.log(a[n])
// console.log(a[m])

// a.n=4
// a.m=500
// console.log(a.n)
// console.log(a.m)

//b= 2; c=3

// a[b] = 123;     
// a[c] = 456;
// a[a]= 600;



// console.log(a[b].key);
// console.log(a[c]);
// console.log(a[a]);
// console.log(b);
// console.log(c[a]);


// END

//QUESTION 5

async function getData() {
    return await Promise.resolve('I made it!');
}

getData().then(getData=>console.log(getData))

//END

//QUESTION 6

// function addToList(item, list) {
//     return list.push(item);
   
// }

// const result = addToList('apple',['banana']);   //length return krti push method
// console.log(result);


// END

// QUESTION 7

// const add = () => {
//     const cache = {};
//     return num => {
//         if (num in cache) {
//             return `From cache! ${cache[num]}`;
//         } else {
//             const result = num + 10;
//             cache[num] = result;
//             return `Calculated! ${result}`;
//         }
//     };
// };

// const addFunction = add();
// console.log(addFunction(10));   //20 else
// console.log(addFunction(10));    //20 if
// console.log(addFunction(""));   //undefined
// console.log(addFunction(5 * 2));    //if 20

// END

// QUESTION 8 

// const promise1 = Promise.resolve('First')  
// const promise2 = Promise.reject('Second')  
// const promise3 = Promise.resolve('Third')  
// const promise4 = Promise.resolve('Fourth')  

// const runPromises = async () => {
// 	const res1 = await Promise.all([promise1, promise2])    // f,s
// 	const res2  = await Promise.all([promise3, promise4])    // fourth
// 	return [res1, res2]   //[f,s, fourth]
// }

// runPromises()
// 	.then(res => console.log(res))
// 	.catch(err => console.log(err))

// END"



// let str ="12121"
// function isPalindrome(str) {
//     // Convert string to lowercase and remove non-alphanumeric characters
//     str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
//     // Check if the string is equal to its reverse
//     return str === str.split('').reverse().join('');
//   }
//   console.log(isPalindrome(str));