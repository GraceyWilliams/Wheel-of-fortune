document.addEventListener('DOMContentLoaded', () => {
    main();
})
let word = '';

const freeLetters = ['r', 's', 't', 'l', 'n', 'e'];
let validLetters = [...freeLetters]

function main () {
    let randomWord = getRandomWord();
    renderRow(randomWord);
    let startButton = document.querySelector('#start').addEventListener('click', singleLetter);
    let letterForm = document.querySelector('#letter-form').addEventListener('submit', renderLetterForm);
}

function renderCell (letter, startOfGame) {
    let mainDiv = document.getElementById('rowHolder');
    let div1 = document.createElement('div');
    div1.classList.add('cell');
    mainDiv.appendChild(div1);
    let h1 = document.createElement('h1');
    div1.appendChild(h1);
    h1.innerText = startOfGame ? '-' : letter;
    h1.id = letter;
}

function renderRow (randomWord, startOfGame = true) {
    let mainDiv = document.getElementById('rowHolder');
    mainDiv.innerHTML = '';
    word = randomWord;
    console.log(randomWord);
    for(let i = 0; i < randomWord.length; i++) {
        renderCell(randomWord[i], startOfGame);
   }
}


function singleLetter () {
    //document.querySelectorAll('.cell').forEach(cell => word += cell.firstChild.id);
    for(let i = 0; i < freeLetters.length; i++) {
        for(let j = 0; j < word.length; j++) {
            if(freeLetters[i] === word[j]) {
                document.querySelectorAll(`#${freeLetters[i]}`).forEach(cell => cell.innerText = cell.id);
            }
        }
    }
}

function renderLetterForm(event) {
    event.preventDefault();
    const firstConstant = document.querySelector('#firstConstant').value;
    const secondConstant = document.querySelector('#secondConstant').value;
    const thirdConstant = document.querySelector('#thirdConstant').value;
    const vowel = document.querySelector('#vowel').value
    const vowels = ['a', 'e', 'i', 'o', 'u']

    for(const element of vowels) {
        if(firstConstant.includes(element)) {
            console.log(`not allowed`)
        }

        if(secondConstant.includes(element)) {
            console.log(`not allowed`)
        }

        if(thirdConstant.includes(element)) {
            console.log(`not allowed`)
        }
    }

    if(/[^aeiou]/.test(vowel)) {
        console.log('not allowed am not a vowel')
    }

    validLetters = [...freeLetters, firstConstant, secondConstant, thirdConstant, vowel]

    let updatedWord = '';

    for(let i = 0; i < word.length; i++) {
        const letter = word[i];

        if(validLetters.includes(letter)) {
            updatedWord += letter;
        } else {
            updatedWord += '-';
        }
    }

    if(!updatedWord.includes('-')) {
        alert(`You won the word was ${word}`);
        return;
      }else {
        alert(`Sorry, the answer was ${word}`);
        return;
      }

    console.log('the new updateWOrd is ', updatedWord)
    renderRow(updatedWord, false)
}







