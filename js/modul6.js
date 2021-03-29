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


// !!!TASK
// const tweets = [
//     { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//     { id: '001', likes: 2, tags: ['html', 'css'] },
//     { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//     { id: '003', likes: 8, tags: ['css', 'react'] },
//     { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
//   ];

// const allTags = tweets.reduce((acc, obj) => {
  
// return [...acc, ...obj.tags];
// }, []);
// console.log(allTags)



// const statTags = allTags.reduce((acc, tag) => {
// return {...acc, [tag]: acc[tag] ? acc[tag] +1 : 1}
// }, {});
// const statTags = allTags.reduce((acc, tag) => 
// ({...acc, [tag]: acc[tag] ? acc[tag] +1 : 1}),
//  {});
//   console.log(statTags);

// sort меняет оригинальную строку (item - nextItem)
// const arr = [9, 2, 1, 5, 19, 15, 21, 24, 22];
// console.log(arr);
// const copy = [...arr].sort((item, nextItem) => item - nextItem);

// console.log(copy);


//  =============================
// const tweets = [
//     { id: '000', likes: 5, tags: ['js', 'nodejs'], names: 'Alex' },
//     { id: '001', likes: 2, tags: ['html', 'css'], names: 'Mango' },
//     { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'], names: 'Coco'  },
//     { id: '003', likes: 8, tags: ['css', 'react'], names: 'Jack'  },
//     { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'], names: 'Viky'},
//   ];

//   const newTweets = [...tweets].sort((tweet, nextTweet) => tweet.likes - nextTweet.likes);
// console.log(newTweets);

// const sortLetters = [...tweets].sort((item, nextItem) => {
//     const result = item.names[0] > nextItem.names[0]
//     if (result) {
//         return 1;
//     }
//     return -1;

//     });
//   console.log(sortLetters)



//TASK2

// function filterArray(numbers, value) {
//     const filteredNumbers = [];
//     // Пиши код ниже этой строки
  
//   numbers.forEach(item => { 
//   if (item > value) {
//     filteredNumbers.push(item);
//   }
  
//   });
//     // Пиши код выше этой строки
//     return filteredNumbers;
//   }

// console.log(filterArray([1, 2, 13, 4, 5], 4))

  //TASK3

//   function getCommonElements(firstArray, secondArray) {
//     const commonElements = [];
//     // Пиши код ниже этой строки
//     firstArray.forEach( item => {
// if (secondArray.includes(item)) {
//      commonElements.push(item)
// };

//         }
//     )

//     return commonElements;
//     // Пиши код выше этой строки
//   }
//   console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]))

//TASK4
// Пиши код ниже этой строки
// const filterArray = (numbers, value) => {
//     const filteredNumbers = [];
  
//     numbers.forEach((number) => {
//       if (number > value) {
//         filteredNumbers.push(number);
//       }
//     });
  
//     // Пиши код выше этой строки
//     return filteredNumbers;
//   }

  //TASK9
//   function changeEven(numbers, value) {
//     // Пиши код ниже этой строки
//    const copy = [];

//    numbers.forEach(element => {
//     element % 2 === 0 ? copy.push(element + value) : copy.push(element)
//    });
//    return copy;
    
//     // Пиши код выше этой строки
//   }
//   console.log(changeEven([2, 8, 3, 7, 4, 6], 10))

//TASK10
// const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];
// // Пиши код ниже этой строки
// const planetsLengths = planets.map(el => el.length);
// console.log(planetsLengths);

//TASK11
// const books = [
//     { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//     { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//     { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//     { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//     { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
//   ];
//   // Пиши код ниже этой строки
  
//   const titles = books.map(item => item.title);

//TASK12
// const books = [
//     {
//       title: 'Последнее королевство',
//       author: 'Бернард Корнуэлл',
//       genres: ['приключения', 'историческое']
//     },
//     {
//       title: 'На берегу спокойных вод',
//       author: 'Роберт Шекли',
//       genres: ['фантастика']
//     },
//     {
//       title: 'Красна как кровь',
//       author: 'Ли Танит',
//       genres: ['ужасы', 'мистика']
//     }
//   ];
//   // Пиши код ниже этой строки
  
//   const genres = books.flatMap(el => el.genres);

//TASK13
// // Пиши код ниже этой строки
// const getUserNames = users => {
//     const arrName = users.map(el => el.name);  
//   return arrName;
//     };
//     // Пиши код выше этой строки

//TASK14
// // Пиши код ниже этой строки
// const getUserEmails = users => {
//     const arrEmail = users.map(element => element.email);
// return arrEmail;
//   };
//   // Пиши код выше этой строки

//TASK15
// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Пиши код ниже этой строки

// const evenNumbers = numbers.filter(el=>el%2===0);
// const oddNumbers = numbers.filter(el=> el%2!==0);

//TASK16

// const books = [
//     {
//       title: 'Последнее королевство',
//       author: 'Бернард Корнуэлл',
//       genres: ['приключения', 'историческое']
//     },
//     {
//       title: 'На берегу спокойных вод',
//       author: 'Роберт Шекли',
//       genres: ['фантастика', 'мистика']
//     },
//     {
//       title: 'Красна как кровь',
//       author: 'Ли Танит',
//       genres: ['ужасы', 'мистика', 'приключения']
//     }
//   ];
//   // Пиши код ниже этой строки
//   const allGenres = books.flatMap(el=> el.genres);
//   const uniqueGenres = allGenres.filter((el, i, arr) => arr.indexOf(el) === i);
//   console.log(uniqueGenres)

//TASK17
// const books = [
//     { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//     { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//     { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//     { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//     { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
//   ];
  
//   const MIN_RATING = 8;
//   const AUTHOR = 'Бернард Корнуэлл';
//   // Пиши код ниже этой строки
  
//   const topRatedBooks = books.filter(el=> el.rating >= MIN_RATING);
//   const booksByAuthor = books.filter(el => el.author === AUTHOR);

//TASK18
// Пиши код ниже этой строки
// const usersA = 
// [
//     {
//       name: 'Moore Hensley',
//       email: 'moorehensley@indexia.com',
//       eyeColor: 'blue',
//       friends: ['Sharron Pace'],
//       isActive: false,
//       balance: 2811,
//       gender: 'male'
//     },
//     {
//       name: 'Sharlene Bush',
//       email: 'sharlenebush@tubesys.com',
//       eyeColor: 'blue',
//       friends: ['Briana Decker', 'Sharron Pace'],
//       isActive: true,
//       balance: 3821,
//       gender: 'female'
//     },
//     {
//       name: 'Ross Vazquez',
//       email: 'rossvazquez@xinware.com',
//       eyeColor: 'green',
//       friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//       isActive: false,
//       balance: 3793,
//       gender: 'male'
//     },
//     {
//       name: 'Elma Head',
//       email: 'elmahead@omatom.com',
//       eyeColor: 'green',
//       friends: ['Goldie Gentry', 'Aisha Tran'],
//       isActive: true,
//       balance: 2278,
//       gender: 'female'
//     },
//     {
//       name: 'Carey Barr',
//       email: 'careybarr@nurali.com',
//       eyeColor: 'blue',
//       friends: ['Jordan Sampson', 'Eddie Strong'],
//       isActive: true,
//       balance: 3951,
//       gender: 'male'
//     },
//     {
//       name: 'Blackburn Dotson',
//       email: 'blackburndotson@furnigeer.com',
//       eyeColor: 'brown',
//       friends: ['Jacklyn Lucas', 'Linda Chapman'],
//       isActive: false,
//       balance: 1498,
//       gender: 'male'
//     },
//     {
//       name: 'Sheree Anthony',
//       email: 'shereeanthony@kog.com',
//       eyeColor: 'brown',
//       friends: ['Goldie Gentry', 'Briana Decker'],
//       isActive: true,
//       balance: 2764,
//       gender: 'female'
//     }
//   ]

// const getUsersWithEyeColor = (users, color) => {
//     const usersColor = users.filter(user=>user.eyeColor===color);
//     return usersColor
   
//    };
//    // Пиши код выше этой строки

//    console.log(getUsersWithEyeColor(usersA, 'green'));

//TASK19
// const arr = 
// [
//     {
//       name: 'Moore Hensley',
//       email: 'moorehensley@indexia.com',
//       eyeColor: 'blue',
//       friends: ['Sharron Pace'],
//       isActive: false,
//       balance: 2811,
//       gender: 'male',
//       age: 37
//     },
//     {
//       name: 'Sharlene Bush',
//       email: 'sharlenebush@tubesys.com',
//       eyeColor: 'blue',
//       friends: ['Briana Decker', 'Sharron Pace'],
//       isActive: true,
//       balance: 3821,
//       gender: 'female',
//       age: 34
//     },
//     {
//       name: 'Ross Vazquez',
//       email: 'rossvazquez@xinware.com',
//       eyeColor: 'green',
//       friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//       isActive: false,
//       balance: 3793,
//       gender: 'male',
//       age: 24
//     },
//     {
//       name: 'Elma Head',
//       email: 'elmahead@omatom.com',
//       eyeColor: 'green',
//       friends: ['Goldie Gentry', 'Aisha Tran'],
//       isActive: true,
//       balance: 2278,
//       gender: 'female',
//       age: 21
//     },
//     {
//       name: 'Carey Barr',
//       email: 'careybarr@nurali.com',
//       eyeColor: 'blue',
//       friends: ['Jordan Sampson', 'Eddie Strong'],
//       isActive: true,
//       balance: 3951,
//       gender: 'male',
//       age: 27
//     },
//     {
//       name: 'Blackburn Dotson',
//       email: 'blackburndotson@furnigeer.com',
//       eyeColor: 'brown',
//       friends: ['Jacklyn Lucas', 'Linda Chapman'],
//       isActive: false,
//       balance: 1498,
//       gender: 'male',
//       age: 38
//     },
//     {
//       name: 'Sheree Anthony',
//       email: 'shereeanthony@kog.com',
//       eyeColor: 'brown',
//       friends: ['Goldie Gentry', 'Briana Decker'],
//       isActive: true,
//       balance: 2764,
//       gender: 'female',
//       age: 39
//     }
//   ]



// // Пиши код ниже этой строки
// const getUsersWithAge = (users, minAge, maxAge) => {
//     const categoryUsersWithAge = users.filter(user => maxAge > user.age &&  minAge < user.age);
//    return categoryUsersWithAge;
//    };
//    // Пиши код выше этой строки

//    console.log(getUsersWithAge(arr, 20, 60));

//TASK20
// const arrUsers = 
// [
//     {
//       name: 'Moore Hensley',
//       email: 'moorehensley@indexia.com',
//       eyeColor: 'blue',
//       friends: ['Sharron Pace'],
//       isActive: false,
//       balance: 2811,
//       gender: 'male',
//       age: 37
//     },
//     {
//       name: 'Sharlene Bush',
//       email: 'sharlenebush@tubesys.com',
//       eyeColor: 'blue',
//       friends: ['Briana Decker', 'Sharron Pace'],
//       isActive: true,
//       balance: 3821,
//       gender: 'female',
//       age: 34
//     },
//     {
//       name: 'Ross Vazquez',
//       email: 'rossvazquez@xinware.com',
//       eyeColor: 'green',
//       friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//       isActive: false,
//       balance: 3793,
//       gender: 'male',
//       age: 24
//     },
//     {
//       name: 'Elma Head',
//       email: 'elmahead@omatom.com',
//       eyeColor: 'green',
//       friends: ['Goldie Gentry', 'Aisha Tran'],
//       isActive: true,
//       balance: 2278,
//       gender: 'female',
//       age: 21
//     },
//     {
//       name: 'Carey Barr',
//       email: 'careybarr@nurali.com',
//       eyeColor: 'blue',
//       friends: ['Jordan Sampson', 'Eddie Strong'],
//       isActive: true,
//       balance: 3951,
//       gender: 'male',
//       age: 27
//     },
//     {
//       name: 'Blackburn Dotson',
//       email: 'blackburndotson@furnigeer.com',
//       eyeColor: 'brown',
//       friends: ['Jacklyn Lucas', 'Linda Chapman'],
//       isActive: false,
//       balance: 1498,
//       gender: 'male',
//       age: 38
//     },
//     {
//       name: 'Sheree Anthony',
//       email: 'shereeanthony@kog.com',
//       eyeColor: 'brown',
//       friends: ['Goldie Gentry', 'Briana Decker'],
//       isActive: true,
//       balance: 2764,
//       gender: 'female',
//       age: 39
//     }
//   ]




// // Пиши код ниже этой строки
// const getUsersWithFriend = (users, friendName) => {
//    const userWithFriendName = users.filter(user => 
//     user.friends.includes(friendName)
//    );
//    return userWithFriendName;
// };
// // Пиши код выше этой строки

// console.log(getUsersWithFriend(arrUsers, 'Briana Decker'))

//TASK21
// Пиши код ниже этой строки
// const getFriends = (users) => {
//    const allFriensUsers = users
//    .flatMap(user => user.friends)
//    .filter((frind, i, arr) => arr.indexOf(frind) === i);
//    return allFriensUsers;
// };
// // Пиши код выше этой строки
// console.log(getFriends(arrUsers));

//TASK22

// // Пиши код ниже этой строки
// const getActiveUsers = (users) => {
//     const activeUsers = users.filter(user => user.isActive); 
//     return activeUsers;
//   };
//   // Пиши код выше этой строки

//TASK23

// // Пиши код ниже этой строки
// const getInactiveUsers = (users) => {
//     const notActiveUsers = users.filter(user => !user.isActive);
//     return notActiveUsers;
//   };
//   // Пиши код выше этой строки

//TASK24

// const books = [
//     { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//     { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//     { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//     { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//   ];
//   const BOOK_TITLE = 'Сон смешного человека';
//   const AUTHOR = 'Роберт Шекли';
//   // Пиши код ниже этой строки
  
//   const bookWithTitle = books.find(el => el.title === BOOK_TITLE);
//   const bookByAuthor = books.find(el => el.author === AUTHOR);

//TASK25

// // Пиши код ниже этой строки
// const getUserWithEmail = (users, email) => {
//     const user = users.find(user => user.email === email);
//    return user;
//  };
//  // Пиши код выше этой строки
 

//TASK26
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Пиши код ниже этой строки

// const eachElementInFirstIsEven = firstArray.every(el => el % 2=== 0);
// const eachElementInFirstIsOdd = firstArray.every(el => el % 2 !== 0);

// const eachElementInSecondIsEven = secondArray.every(el => el % 2 === 0);
// const eachElementInSecondIsOdd = secondArray.every(el => el % 2 !== 0);

// const eachElementInThirdIsEven = thirdArray.every(el => el % 2 === 0);
// const eachElementInThirdIsOdd = thirdArray.every(el => el % 2 !== 0);
// console.log(eachElementInFirstIsEven);
// console.log(eachElementInFirstIsOdd);

//TASK27

// Пиши код ниже этой строки
// const isEveryUserActive = (users) => {
//    const active = users.every(user => user.isActive)
// return active;
// };
// Пиши код выше этой строки

//TASK28

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Пиши код ниже этой строки

// const anyElementInFirstIsEven = firstArray.some(item => item % 2 === 0);
// const anyElementInFirstIsOdd = firstArray.some(item => item % 2 !== 0);

// const anyElementInSecondIsEven = secondArray.some(el => el % 2 === 0);
// const anyElementInSecondIsOdd = secondArray.some(el => el % 2 !== 0);

// const anyElementInThirdIsEven = thirdArray.some(item => item % 2 === 0);
// const anyElementInThirdIsOdd = thirdArray.some(item => item % 2 !== 0);

//TASK29
// Пиши код ниже этой строки
// const isAnyUserActive = users => 
// users.some(user => user.isActive)
// Пиши код выше этой строки

//TASK30

// const players = {
//     mango: 1270,
//     poly: 468,
//     ajax: 710,
//     kiwi: 244
//   };
//   const playtimes = Object.values(players); // [1270, 468, 710, 244]
//   // Пиши код ниже этой строки
  
//   const totalPlayTime = playtimes.reduce((acc, item) => {
//   return acc = acc + item}, 0);
  
  
//   // Пиши код выше этой строки
//   const averagePlayTime = totalPlayTime / playtimes.length;

//   console.log(playtimes);
//   console.log(totalPlayTime);
//   console.log();

// TASK31

// const players = [
//     { name: 'Манго', playtime: 1270, gamesPlayed: 4 },
//     { name: 'Поли', playtime: 469, gamesPlayed: 2 },
//     { name: 'Аякс', playtime: 690, gamesPlayed: 3 },
//     { name: 'Киви', playtime: 241, gamesPlayed: 1 },
//   ];
//   // Пиши код ниже этой строки
  
//   const totalAveragePlaytimePerGame = players.reduce((acc, item) => {
//   return acc += item.playtime / item.gamesPlayed
//   }, 0);
//   console.log(totalAveragePlaytimePerGame);

//TASK32
// Пиши код ниже этой строки
// const calculateTotalBalance = users => 
// users.reduce((acc, user) => {return acc += user.balance}, 0)
// ;
// Пиши код выше этой строки

//TASK33

// Пиши код ниже этой строки
// const getTotalFriendCount = users => {
//     return users.reduce((acc, user) => {
//     return acc += user.friends.length;
//     }, 0);  
//  };
//  // Пиши код выше этой строки

//TASK34
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   'Ли Танит',
//   'Бернард Корнуэлл',
//   'Роберт Шекли',
//   'Федор Достоевский'
// ];
// // Пиши код ниже этой строки
// const ascendingReleaseDates = [...releaseDates].sort();
// const alphabeticalAuthors = [...authors].sort();

//TASK35
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// // Пиши код ниже этой строки

// const ascendingReleaseDates = [...releaseDates]
// .sort((item, nextItem) => item - nextItem);

// const descendingReleaseDates = [...releaseDates]
// .sort((item, nextItem) => nextItem - item);

//TASK36

// const authors = [
//     'Ли Танит',
//     'Бернард Корнуэлл',
//     'Роберт Шекли',
//     'Федор Достоевский',
//     'Говард Лавкрафт'
//   ];
//   // Пиши код ниже этой строки
  
//   const authorsInAlphabetOrder = [...authors]
//   .sort((item, nextItem) => item
//   .localeCompare(nextItem));
  
//   const authorsInReversedOrder = [...authors]
//   .sort((item, nextItem) => nextItem
//   .localeCompare(item));

  //TASK37

//   const books = [
//     { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//     { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//     { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//     { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//     { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
//   ];
  // Пиши код ниже этой строки
  
//   const sortedByAuthorName = [...books].
//   sort((item, nextItem) => item.author.
//   localeCompare(nextItem.author));
  
//   const sortedByReversedAuthorName = [...books]
//   .sort((item, nextItem) => nextItem.author
//   .localeCompare(item.author));
  
//   const sortedByAscendingRating = [...books]
//   .sort((item, nextItem) => item.rating - nextItem.rating);
  
//   const sortedByDescentingRating = [...books]
//   .sort((item, nextItem) => nextItem.rating - item.rating);

//   console.log(sortedByAuthorName);
//   console.log(sortedByReversedAuthorName);
//   console.log(sortedByAscendingRating);
//   console.log(sortedByDescentingRating);

//TASK38
// const array = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male'
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female'
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male'
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female'
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male'
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male'
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female'
//   }
// ]

// //Пиши код ниже этой строки
// const sortByAscendingBalance = users => {
//     const newArrayUsers = [...users]
//     .sort((item, nextItem) => item.balance - nextItem.balance)
//        return newArrayUsers;
// };
// // Пиши код выше этой строки

// console.log(sortByAscendingBalance(array));

//TASK39

// Пиши код ниже этой строки
// const sortByDescendingFriendCount = users => {
//    const sumFriends = [...users]
//    .sort((item, nextItem) => nextItem.friends.length - item.friends.length)
//    return sumFriends;
// };
// Пиши код выше этой строки

//TASK40

// // Пиши код ниже этой строки
// const sortByName = users => {
//     return [...users]
//     .sort((item, nextItem) =>
//      item.name.localeCompare(nextItem.name))      
//   };
// // Пиши код выше этой строки

//TASK41

// const books = [
//     { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//     { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//     { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//     { title: 'Красна как кровь', author: 'Ли Танит', rating: 8.14 },
//     { title: 'Сны В Ведьмином Доме', author: 'Говард Лавкрафт', rating: 8.67 }
//   ];
//   const MIN_BOOK_RATING = 8;
//   // Пиши код ниже этой строки
  
//   const names = books.
//   filter(item => item.rating > MIN_BOOK_RATING)
//   .map(item => item.author)
//   .sort((item, nextItem) => item.localeCompare(nextItem))
   
//TASK42

//   // Пиши код ниже этой строки
// const getNamesSortedByFriendCount = users => {
//    const arrFriends = [...users]
//    .sort((item, nextItem) => item.friends.length - nextItem.friends.length)
//    .map(item => item.name)
//    return arrFriends
// };
// // Пиши код выше этой строки
  
// console.log(getNamesSortedByFriendCount(arr));

//TASK43
 //Пиши код ниже этой строки
const getSortedFriends = users => users
  .map(item => item.friends)
  .flat(1).filter((item, i, arr) => arr.indexOf(item)=== i)
  .sort((item, nextItem) => item.localeCompare(nextItem));
//Пиши код выше этой строки


//TASK44

// Пиши код ниже этой строки
const getTotalBalanceByGender = (users, gender) => users
.filter(item => item.gender === gender)
.reduce((acc, item) => {
  return acc += item.balance}, 0);
// Пиши код выше этой строки



