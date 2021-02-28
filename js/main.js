// 1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS

const customName = document.getElementById('customname');//input
const randomize = document.querySelector('.randomize'); // btn
const story = document.querySelector('.story');//p

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}



let insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
let insertY = ["the soup kitchen", "Disneyland", "the White House"];
let insertZ = ["spontaneously combusted",
"melted into a puddle on the sidewalk",
    "turned into a slug and crawled away"];
let xItem = randomValueFromArray(insertX);
let yItem = randomValueFromArray(insertY);
let zItem = randomValueFromArray(insertZ);
let nameM;

let storyText = "It was 94 fahrenheit outside, so :" + xItem + ": went for a walk. When they got to :" + yItem + ":, they stared in horror for a few moments, then :" + zItem + ":. " + nameM + " saw the whole thing, but was not surprised — :" + xItem + ": weighs 300 pounds, and it was a hot day.";
randomize.addEventListener('click', result);

let newStory = storyText;
console.log(newStory);


function result() {

  if(customName.value !== '') {
      nameM = customName.value;
      

  }

  if(document.getElementById("uk").checked) {
    let weight = Math.round(300);
    let temperature =  Math.round(94);

  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}

