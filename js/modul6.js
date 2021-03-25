//! 6 MODUL
//! forEach NO RETURN 
// const arr = [1, 5, 10, 15, 20, 25, 30];
// arr.forEach((el, i, ar) => console.log(el, i, ar));


//! Map RETURN ARRAY


// const arr = [1, 5, 10, 15, 20, 25, 30];
// const newArr = arr.map((el, x) => el - 5);

// console.log(newArr);


//! fIND RETURN 1 EL

// const arr = [1, 5, 10, 15, 20, 25, 30];

// const finfMore = arr.find((el, i) => el > 25)
// console.log(finfMore);

// const findLess = arr.find(el => el < 25)
// console.log(findLess);
// const findLess1 = arr.find(el => el === 30)
// console.log(findLess1);



// const users = [
//     { id: '000', name: 'Mango', isActive: true },
//     { id: '001', name: 'Poly', isActive: false },
//     { id: '002', name: 'Ajax', isActive: true },
//     { id: '003', name: 'Chelsey', isActive: false },
//   ];


//   const findId = users.find(el => el.id === '001');
//   console.log(findId)


//! FILTER RETURN ARRAY 

// const arr = [1, 5, 10, 15, 20, 25, 30];

// const finfMore = arr.filter((el, i) => el < 15)
// console.log(finfMore);


// const users = [
//     { name: 'Mango', isActive: true },
//     { name: 'Poly', isActive: false },
//     { name: 'Ajax', isActive: true },
//     { name: 'Chelsey', isActive: false },
//   ];


//   const newUsers = users.filter(el => el.isActive);
//   const newUsers1 = users.filter(el => !el.isActive);
//   console.log(newUsers);
//   console.log(newUsers1);


//!  Array.prototype.every() RETURN TRUE OR FALSE for all element

// const users = [
//     { name: 'Mango', isActive: true },
//     { name: 'Poly', isActive: false },
//     { name: 'Ajax', isActive: true },
//     { name: 'Chelsey', isActive: false },
//   ];

//  console.log(users.every(el => el['name'] !== 'Mjngo')); // true


 //! Array.prototype.some() RETURN TRUE OR FALSE for one element

// const callback = par => par > 55;

// const arr1 = [1, 5, 7];
 
// console.log(arr1.some(callback));


//! Array.prototype.reduce() acc + el + i + arr , 0   ===//acc = 0

// const arr = [1, 5, 10, 15, 20, 25, 30];

// const result = arr.reduce((acc, el) => acc + el, 0);
// console.log(result);



const tweets = [
    { id: '000', likes: 5, tags: ['js', 'nodejs'] },
    { id: '001', likes: 2, tags: ['html', 'css'] },
    { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
    { id: '003', likes: 8, tags: ['css', 'react'] },
    { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
  ];

  const likes = tweets.reduce((acc, el) => acc + el.likes, 0); //acc = 0;
  console.log(likes);
  const countLikes = tweets =>
  tweets.reduce((acc, tweet) => totalLikes + tweet.likes, 0);
console.log(countLikes);


const countLikes1 = function (tweets) {
return tweets.reduce((acc, tweet) => acc + tweet.likes, 0)};
console.log(countLikes1);
let ppppp = countLikes1.bind(tweets);
console.log(ppppp);