let howManyTimes = 10;

let drawCats = function (howManyTimes) {
 for (var i = 0; i < howManyTimes; i++) {
 console.log(i + " =^.^=");
 }
};
drawCats(howManyTimes);

var printMultipleTimes = function (howManyTimes, whatToDraw) {
 for (var i = 0; i < howManyTimes; i++) {
 console.log(i + " " + whatToDraw);
 }
};

printMultipleTimes(5, " =^.^=");