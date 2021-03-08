// function disemvowel(str) {
//   let newStr = '';
//   for (let i = 0; i < str.length; i += 1) {
//       const str1 = str.toLowerCase();
//       if ('a,e,i,o,u'.includes(str1[i])) {
//           continue;
//       }
//       newStr += str[i];
//   }
//   return newStr;
// }
// console.log(disemvowel('This website is for losers LOL'));

// const toJadenCase = function(str) {
// // Разбиваю на массив
// str = str.split(" ");
// const result = [];
// let newStr;

// for (let i = 0; i < str.length; i += 1){
// newStr = str[i].slice(0, 1).toUpperCase() + str[i].slice(1);

// result.push(newStr);
// }

//   return result.join(' ');
  
// };

// var str = "How can mirrors be real if our eyes aren't real";
// console.log(toJadenCase(str))

// function filter_list(l) {
//   const numbers = [];
//   for (const element of l) {
//     if (typeof element !== 'number' && typeof element !== isNaN) {
//       continue;
//     }
//     numbers.push(element);
//   }
//   return numbers;
// }

// console.log(filter_list([1,2,'aasf','1','123',123]));


// function squareDigits(num){
//   num = String(num);
//   num = num.split('');
//   let pow;
//   const arrayNum = [];
//   let result;


//     for (let i = 0; i < num.length; i += 1) {
// pow = Number(num[i]) * Number(num[i]);
// pow = String(pow);

// arrayNum.push(pow);

//      }
//      result = arrayNum.join('');
     
//     //  arrayNum = arrayNum.join('')
// return Number(result);
// }

// console.log(squareDigits(9494));

// function century(year) {
//   let centuryYear;
//   centuryYear = year / 100;
//   return Math.ceil(centuryYear);
// }

// console.log(century(1901))

// function digitize(n) {
//   let newN = String(n);
//    newN = newN.split('');
//    const arrayNum = [];
//    let i;
//    for (i = newN.length - 1; i >= 0; i -= 1) {
//      arrayNum.push(Number(newN[i]));
     
     
//    }
//    return arrayNum;
//  }

//  console.log(digitize(35231));

// function friend(friends){
//   const result = [];
//   for (const friend of friends) {
//     if (friend.length === 4) {
//       result.push(friend);
//     }
//   }
//   return result;
  
// }
// console.log(friend(["Ryan", "Kieran", "Mark"]));

// function findNeedle(haystack) {
//   let indexN;
//   for (let i = 0; i < haystack.length; i+= 1) {
// if (haystack[i] === 'needle') {
// indexN = i;
// console.log(haystack[i]);
// }
//   }
//   return `found the needle at position ${indexN}`;
// }

// console.log(findNeedle(['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false]));

// function findUniq(arr) {
//   let numArr = arr[0];
//   let newNumber;
//  for (let i = 0; i < arr.length; i +=0 ) {
//    if (numArr !== arr[i]) {
//     newNumber = arr[i];
//     break;
//    }

//  }
//  return newNumber
// }

// console.log(findUniq([ 0, 1, 0 ]));

// function validatePIN(pin) {

// if (pin.length !== 4 && pin.length !== 6){
//   return false;
// }
// for (let i = 0; i < pin.length; i += 1) {
//   if (isNaN(pin[i])) {
//     return false;
//   }
// }
// return true;
// }

// console.log(validatePIN('F234'));
// console.log(validatePIN('.234'));
// console.log(validatePIN('1.234'));
// console.log(validatePIN('098765'));
// console.log(validatePIN('0'));
// console.log(validatePIN('012'));
// console.log(validatePIN('0325'));
// console.log(validatePIN('045558'));
// console.log(validatePIN('07222'));

// function descendingOrder(n){
//   n = n.toString().split('').sort();
//   n = n.reverse();
//   n = n.join('');
//   n = Number(n);


// return n;

//  }
//  console.log(descendingOrder(0));
//  console.log(descendingOrder(123456789));

// function removeSmallest(numbers) {
//   if (numbers.length === 1 || numbers.length === null) {
//     return numbers;
//   }
//   if (Number(numbers)) {
//     return [];
//   }
// let littleNum = Math.min(...numbers);
// let indexLittleNum = numbers.indexOf(littleNum);
// numbers.splice(indexLittleNum, 1);

// return numbers;

// }
// console.log(removeSmallest([5, 4, 3, 2]));
// console.log(removeSmallest([5, 4, 3]));
// console.log(removeSmallest(152));
// console.log(removeSmallest([5]));
// console.log(removeSmallest([128, 31, 33, 31, 4, 60, 304, 244, 71, 141, 221, 231, 346, 59, 304, 29]));
// console.log([128, 31, 33, 31, 4, 60, 304, 244, 71, 141, 221, 231, 346, 59, 304, 29]);

function nbYear(p0, percent, aug, p) {
  let sum = p0 * percent / 100 + aug;
  let years = 0;

  for (let i = 0; i < p; i += p0 * percent / 100 + aug) {
  if (p0 < p) {
    p0  += p0 * percent / 100 + aug;
    years += 1;
   }
  }
  
  
  return years;
 
}

console.log(nbYear(100, 2, 50, 1000));
console.log(nbYear(1500000, 2.5, 10000, 2000000));