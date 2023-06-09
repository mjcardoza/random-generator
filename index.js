/* const gmNames = ["Malcolm", "Andrew", "Bradley", "Rob", "Scott", "Canoe", "Kris", "Cole", "Luke", "Jesse", "Mark", "NewGM"]; */
/* let randomName = Math.floor(Math.random()* gmNames.length);

function getName(){
    console.log(gmNames[randomName])
} */


/* function shuffle(gmNames){
    let length = gmNames.length, t, i;
    while (m){
    i = Math.floor(Math.random()* m--)

    t = gmNames[m]
    gmNames[m] = gmNames[i]
    gmNames [i] = t
}
return gmNames
}
 */
/* [... new Set(randomName)]
let listEl = document.getElementById("list-el")
 */
/* gmNames.forEach((item) => {
    let li = document.createElement("li")
    li.innerText = item
    listEl.appendChild(li)
})
 */
/* document.getElementById("gm").onclick = getName() */

/* gmNames.sort(() => Math.random() - 0.5)
console.log(gmNames)
 */

const names = ["Malcolm", "Andrew", "Bradley", "Rob", "Scott", "Canoe", "Kris", "Cole", "Luke", "Jesse", "Mark", "NewGM"];

/* subheading: Add name to list */

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

const list = document.querySelector('#names-list');
const randomNumbersList = document.querySelector('#random-numbers-list')

function addNameToList() {
    const name = getNextName();
    if (name) {
      const listItem = document.createElement('li');
      listItem.textContent = name;
      list.appendChild(listItem);
  }
}


function getRandomNumbers() {
    const numbers = Array.from({ length: 12 }, (_, i) => i + 1);
    const randomNumbers = [];
  
    while (randomNumbers.length < 12) {
      const randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
      if (!randomNumbers.includes(randomNumber)) {
        randomNumbers.push(randomNumber);
      }
    }
    return randomNumbers;
  }

function addNumberToList(){
    const randomNumbersListItem = document.createElement('li')
      const randomNum = Math.floor(Math.random()* 12) + 1
      randomNumbersListItem.textContent = randomNum
      randomNumbersList.appendChild(randomNumbersListItem)

}

/* subheading: add number to name in following list */

  const gmButton = document.querySelector('#getGm-Btn');

  gmButton.addEventListener('click', addNameToList);


  const selectButton = document.querySelector('#selectGm-Btn')
  gmButton.addEventListener('click', addNameToList);

