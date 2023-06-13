const names = ["Malcolm", "Andrew", "Bradley", "Rob", "Scott", "Canoe", "Kris", "Cole", "Luke", "Jesse", "Mark", "NewGM"];

/* SUBHEADING: ADD NAME TO THE LIST */ 

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
const numbersList = document.createElement('ul');
document.body.appendChild(numbersList);

function addNameToList() {
    const name = getNextName();
    if (name) {
      const listItem = document.createElement('li');
      listItem.textContent = name;
      namesList.appendChild(listItem);


      const numberListItem = document.createElement('li')
      numberListItem.textContent = randomNumber
      numbersList.appendChild(numberListItem)
  }
}

  const gmButton = document.querySelector('#getGm-Btn');

  gmButton.addEventListener('click', addNameToList);

  const selectButton = document.querySelector("#selector-Btn")

/* SUBHEADING: ADD NUMBER TO NAME USING THE 'SELECT ORDER' BUTTON */


const numbers = Array.from({ length: 12 }, (_, i) => i + 1);
const randomNumbers = [];

while (randomNumbers.length < 12) {
  const randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
  if (!randomNumbers.includes(randomNumber)) {
    randomNumbers.push(randomNumber);
  }
}

const button = document.createElement('button');
button.textContent = 'Generate Random Number';
document.body.appendChild(button);

let i = 0;
function displayRandomNumber() {
  const listItem = document.createElement('li');
  listItem.textContent = randomNumbers[i];
  numbersList.appendChild(listItem);
  
  i++;
  
  if (i < randomNumbers.length) {
    button.addEventListener('click', displayRandomNumber);
  }
}

button.addEventListener('click', displayRandomNumber);