// let arr = [-83, -45, -21, 12, -134];


// function sortValue(a, b) {
//     if (a > b) {
//         return 1;
//     }
//     if (a == b) {
//         return 0;
//     }
//     if (a < b) {
//         return -1;
//     }
// }

// function maxValue() {
//     arr.sort(sortValue);
//     console.log(arr[length - 1]);
// }
// maxValue();


// function maxValue(arr) {
//     let value = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (value < arr[i]) {
//             value = arr[i];
//         }
//         else if (arr[i] < 0) {
//             arr[i] = arr[i] * -1;
//         }
//         value = arr[i];
//     }
//     console.log(value)
// }

// maxValue(arr);




// let str = 'max';
// let newArr = [];


// function isPalindrom(str) {
//     let arr = str.split('');
//     let newStr = arr.reverse().join('');
//     if (newStr == str) {
//         alert('Is Palindrom');
//     }
//     else {
//         alert('Is not Palindrom');
//     }
// }

// isPalindrom(str);


// function isPalindrom(str) {
//     let arr = str.split('');
//     console.log(arr);
//     for (let i = arr.length - 1; i >= 0; i--) {

//     }
// }
// }



// moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]);


// function moveZeros(arr) {
//     let newArr = [];
//     arr.forEach(element => {
//         if (element !== 0) {
//             newArr.push(element);
//         }
//     });
//     arr.forEach(element => {
//         if (element === 0) {
//             newArr.push(element);
//         }
//     });
//     console.log(arr);
//     console.log(newArr);
// }


// function fibonachi(num) {
//     let arr = [0, 1];
//     let newElem;
//     for (let i = 0; i < num; i++) {
//         newElem = arr[i] + arr[i + 1];
//         arr.push(newElem);
//     }
//     console.log(arr[num]);
// }

// fibonachi(10);


// function shortFibonachi(num) {
//     let a = 1;
//     let b = 1;
//     for (let i = 3; i <= num; i++) {
//         // let c = a + b;
//         // a = b;
//         // b = c;
//         [a,b]=[b,a+b];
//     }
//     return b;
// }

// console.log(shortFibonachi(10));


moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]);

function moveZeros(arr) {
    let arrValues = [];
    let arrZero = [];
    arr.forEach(element => {
        if (element !== 0) {
            arrValues.push(element);
        } else {
            arrZero.push(element);
        }
    });
    let merged = [...arrValues, ...arrZero];
    alert(merged);
}