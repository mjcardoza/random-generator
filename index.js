const names = ["Malcolm", "Andrew", "Bradley", "Rob", "Scott", "Canoe", "Kris", "Cole", "Luke", "Jesse", "Mark", "NewGM"];

/* SUBHEADING: ADD NAME TO THE LIST */ 

const gmButton = document.querySelector('#getGm-Btn');
gmButton.addEventListener('click', addNameToList);


function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

shuffleArray(names);

let currentIndex = 0;

function getNextName() {
  if (currentIndex >= names.length) {
    return null;
  }

  const name = names[currentIndex];
  currentIndex++;

  return name;
}

const namesList = document.querySelector('#names-list')
const numbersList = document.querySelector('#random-numbers-list');

function addNameToList() {
    const name = getNextName();
    if (name) {
      const listItem = document.createElement('li');
      listItem.textContent = name;
      namesList.appendChild(listItem);
    
  }
}

// SUBHEADING : ADD NUMBER TO NAME USING THE 'SELECT ORDER' BUTTON

const selectGm = document.querySelector('#selectGm-Btn')
selectGm.addEventListener('click', displayRandomNumber)

const numbers = Array.from({ length: 12 }, (_, i) => i + 1);
const randomNumbers = [];


while (randomNumbers.length < 12) {
  const randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
  if (!randomNumbers.includes(randomNumber)) {
    randomNumbers.push(randomNumber);
  }
}

let i = 0;
function displayRandomNumber() {
    const numberListItem = document.createElement('li');
    numberListItem.textContent = randomNumbers[i];
    numbersList.appendChild(numberListItem) 


  
  i++;
  
  if (i < randomNumbers.length) {
    selectGm.addEventListener('click', displayRandomNumber);
  } 
}

selectGm.addEventListener('click', displayRandomNumber);
