// KATA
// function alphabetPosition(text) {
//     var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
//      "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v",
//      "w", "x", "y", "z"];
//    text = text.toLowerCase().replace(/[^a-z]/gi, '').split('');
//    console.log(text);
//    const resaltArray = text.map((el, i) => el = alphabet.indexOf(el) + 1);



//   return resaltArray.join(' ');
//  }

//  console.log(alphabetPosition("The sunset sets at twelve o' clock.", " ENDEDWDW"));
//  console.log(alphabetPosition("aa", " ENDEDWDW"));


// KATA 

// function dashatize(num) {

//     if (num === 0 || num === '0' || isNaN(num)) {
//         return num.toString();
//     }
//     else {
//         num = Math.abs(num);

//         const numLength = num.length;
//         const array = num.toString().split('')
//         const arrayNum = array.map(element =>
//             Number(element)
//         );
//         const result = [];
//         for (let i = 0; i < arrayNum.length; i += 1) {
//             if (arrayNum[i] % 2 !== 0) {
//                 result.push(`-${arrayNum[i]}-`);

//             }
//             else { result.push(arrayNum[i]) };


//         };
//         const string = result.join('').replace('--', '-').replace('--', '-').replace('--', '-').replace('--', '-').split('');
//         if (string[0] === '-') {
//             string.splice(0, 1);
//         }
//         if (string[string.length - 1] === '-') {
//             string.splice(-1, 1);

//         }
//         return string.join('');
//     }

// }

// console.log(dashatize(5474));
// console.log(dashatize(274));
// console.log(dashatize(974302));
// console.log(dashatize(NaN));

//KATA


// function main(num, fun) {
//     if (fun === undefined) {
//         return num;
//     }
//     return fun(num);
// };

// function zero(fun) { return main(0, fun) };
// function one(fun) { return main(1, fun) };
// function two(fun) { return main(2, fun) };
// function three(fun) { return main(3, fun) };
// function four(fun) { return main(4, fun) };
// function five(fun) { return main(5, fun) };
// function six(fun) { return main(6, fun) };
// function seven(fun) { return main(7, fun); };
// function eight(fun) { return main(8, fun) };
// function nine(fun) { return main(9, fun) };

// function plus(num) {
//     return function (nums) {
//         return nums + num;
//     }
// };
// function minus(num) {
//     return function (nums) {
//         return nums - num;
//     }
// };
// function times(num) {
//     return function (nums) {
//         return nums * num;
//     }
// }
// function dividedBy(num) {
//     return function (nums) {
//         return nums / num;
//     }
// }


// console.log(seven(times(five())));
// console.log(eight(minus(three())));

//KATA


// function rot13(string) {
//     const arrEn = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
//     const arr = string.split('').map(el => {
//         if (/[~`!#$%+-/*\^&=\-\[\]\\';,/{}|\\:<>\?0-9' ']/g.test(el)) {
//             return el;
//         }
//         else if (el.toUpperCase() === el) {
//             let index = arrEn.indexOf(el.toLowerCase());
//             el = index >= 13 ? arrEn[index - 13] : arrEn[index + 13];
//             return el.toUpperCase();
//         }
//         else {
//             let index = arrEn.indexOf(el);
//             return index >= 13 ? arrEn[index - 13] : arrEn[index + 13];
//         }
//     });
//     let newString = arr.join('');
//     if (/[a-z]/i.test(newString)) {
//         return newString;
//     }
//     return eval(newString);
// };
// console.log(rot13('1+1 h'));

//KATA

// function stockList(listOfArt, listOfCat) {
//     let totalAmountOfBooks = 0;
//     const cats = listOfCat.map(el => {
//         const stockListsWithCat = listOfArt.filter(sl => {
//             //   console.log(sl.indexOf(el) === 0);
//             return sl.indexOf(el) === 0
//         })
//         //  console.log(stockListsWithCat);
//         const booksInStockList = stockListsWithCat.map(sl => parseInt(sl.split(' ')[1]))

//         const amountOfBooks = booksInStockList.reduce((acc, curr) => {
//             return acc + curr
//         }, 0)
//         console.log(amountOfBooks);
//         totalAmountOfBooks += amountOfBooks
//         console.log(totalAmountOfBooks);
//         return `(${el} : ${amountOfBooks})`
//     })
//     if (totalAmountOfBooks === 0) return ''
//     return cats.join(' - ')
// }

// const b = ["ABAR 200", "CDXE 500", "BKWR 250", "BTSQ 890", "DRTY 600"];
// const c = ["A", "B"]

// console.log(stockList(b, c));

// function findEvenIndex(arr) {
//     let sunLeft = 0;
//     let index;
//     const total = arr.reduce((acc, el, i) => {

//         const total = acc + el;
//         //   console.log(total);
//         //  console.log(el);
//         return total;
//     });

//     arr.forEach((el, i) => {
//         if ((total - el) / 2 === sunLeft) {
//             sunLeft += el;
//             return index = i;

//         };
//         sunLeft += el;
//     })

//     return index;
// }
// console.log(findEvenIndex([20, 10, 30, 10, 10, 15, 35]));

//KATA
// Array.prototype.square = function () {
//     return this.map(el => Math.pow(el, 2));
// };

// Array.prototype.cube = function () {
//     return this.map(el => Math.pow(el, 3));
// };
// Array.prototype.average = function () {
//     if (this.length < 1) {
//         return NaN;
//     }
//     return this.reduce((acc, el) => (acc + el / this.length), 0)
// };
// Array.prototype.sum = function () {
//     if (this.length < 1) {
//         return NaN;
//     }
//     return this.reduce((acc, el) => acc + el)
// };
// Array.prototype.even = function () {
//     return this.filter((el) => el % 2 === 0)
// };

// Array.prototype.odd = function () {
//     return this.filter((el) => el % 2 !== 0)
// };
// const numbers = [1, 2, 3];
// console.log(numbers.square());
// console.log(numbers.cube());
// console.log(numbers.average());
// console.log(numbers.sum());
// console.log(numbers.even());
// console.log(numbers.odd());

//KATA
// const obj = {};
// function count(string) {
//     return string.split('').reduce((a, el) =>
//         ({ ...a, [el]: a[el] ? a[el] + 1 : 1 }), {});
// };


//console.log(count('dvdx'))

//KATA 
// function looseChange(cents) {
//     if (cents < 1) {
//         return {Quarters:0,Dimes:0,Nickels:0,Pennies: 0};    
//     }
//     const obj = {
//         Quarters: Math.floor(cents / 25),
//         Dimes: Math.floor((cents % 25) / 10),
//         Nickels: Math.floor(((cents % 25) % 10) / 5),
//         Pennies: Math.floor(((cents % 25) % 10) % 5)
//     };
//     return obj;
// };

// console.log(looseChange(-4.935))

// function findUniq(arr) {
//     return arr.sort().reduce((acc, el, i) => acc === el ? arr[arr.length - 1] : acc);
// };

// console.log(findUniq([3, 10, 3, 3, 3]));

// function solution(n) {
//     return Number.isInteger(n) ? n : (Math.ceil(n) - n > 0.75 ? Math.ceil(n) - 1 : (Math.ceil(n) - n > 0.5 ? Math.ceil(n) - 0.5 : (Math.ceil(n) - n > 0.25) ? Math.ceil(n) - 0.5 : Math.ceil(n)));

// };
// console.log(solution(4.2));

//KATA

// var uniqueInOrder = function (iterable) {
//     const result = iterable.replace(/(.)\1+/g, '$1')
//     return result;
// }

// console.log(uniqueInOrder('AAAABBBCCDAABBB'))

function upArray(arr) {
    // console.log(String(Number(arr.join('')) + 1));

    return arr.join('').length > arr.length ? null
        : arr.length === 0 ? null
            : String(Number(arr.join('') + 1) + 1).split('').map(Number)

};
console.log(upArray([9, 2, 2, 3, 3, 7, 2, 0, 3, 6, 8, 5, 4, 7, 7, 5, 8, 0, 7, 5, 3, 2, 6, 7, 8, 4, 2, 4, 2, 6, 7, 8, 7, 4, 5, 2, 2]));