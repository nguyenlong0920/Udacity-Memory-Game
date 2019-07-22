"use strict";
/*
 * Create a list that holds all of your cards
 */
const items = ["fa fa-anchor", "fa fa-bicycle", "fa fa-bolt", "fa fa-bomb", "fa fa-cube", "fa fa-diamond", "fa fa-leaf", "fa fa-paper-plane-o",];

/*Declare global variables*/

/*set up card deck*/
const cardsList = document.querySelector('#cards-list');
let openedCards = [];
let foundCards = [];

/*set up stars for scores*/
const stars = document.querySelector('.stars').childNodes;
const finalStars = document.querySelector('.stars');

/*set up player's number of moves*/
let moves = 0;
const movesText = document.querySelector(".moves");

/*set up stopwatch to count the time*/
const timer = document.querySelector(".timer");
let howLong;
let stopwatchOn = false;
/*set up number of seconds player playing the game*/
let seconds = 0;
const secondsText = document.querySelector(".second");

/*set up restart button*/
const restart = document.querySelector(".restart");

/*set up winning notification*/
const finnish = document.querySelector('.finnish');
const finalTime = document.querySelector('.final-time');
const finalScores = document.querySelector('.final-scores');
const finalMoves = document.querySelector('.final-moves');
const again = document.querySelector('.play-again');

newCardsList();

function newCardsList() {
    /*make new random card list*/
    cardsList.innerHTML = "";
    const set = document.createElement('ul');
    set.classList.add('deck');
    let shuffleItems = shuffle(items.concat(items));
    for (let i = 0; i < shuffleItems.length; i++) {
        const list = document.createElement('li');
        list.classList.add('card');
        list.innerHTML = `<i class="${shuffleItems[i]}"></i>`;
        set.appendChild(list);
    }
    cardsList.append(set);
    /*prepare for click event*/
    cardsList.addEventListener('click', clickEvent);
}

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

function clickEvent(clicked) {
    /*procedure to be executed when player selected card*/
    let choseCard = clicked.target;
    /*when to start the stopwatch*/
    if (choseCard.classList.contains("card") && !choseCard.classList.contains("show", "open", "match")) {
        if (!stopwatchOn) {
            if (!seconds) seconds++;
            howLong = setInterval(function () {
                secondsText.innerHTML = `${seconds} seconds`;
                seconds++;
            }, 1000);
            stopwatchOn = true;
        }
        choseCard.classList.add("show", "open");
        openedCards.push(choseCard);
    }

    /*check whether 2 cards is the same or not*/
    if (openedCards.length === 2) {
        cardsList.classList.add("hold");

        moves++;
        movesText.innerHTML = `${moves}  Moves`;
        /*3 stars if moves below 15 and 2 stars if moves below 20, 1 star if moves more than 20*/
        if (moves === 15) {
            stars[5].classList.add('remove-stars');
        } 
        else if (moves ===20) {
            stars[3].classList.add('remove-stars');
        }
        
        /*2 cards are the same*/        
        if (openedCards[0].innerHTML === openedCards[1].innerHTML) {
            openedCards[0].classList.add("match");
            openedCards[1].classList.add("match");
            foundCards.push(openedCards[0]);
            foundCards.push(openedCards[1]);
            openedCards = [];
            cardsList.classList.remove("hold");
        } 
        /*2 cards are different*/
        else {
            setTimeout(function () {
                openedCards[0].classList.remove("show", "open");
                openedCards[1].classList.remove("show", "open");
                openedCards = [];
                cardsList.classList.remove("hold");
            }, 500);
        }
        /*all the cards are flipped*/
        if (foundCards.length === 16) {
            finalTime.innerText = timer.innerText;
            finalScores.innerHTML = finalStars.innerHTML;
            finalMoves.innerHTML = movesText.innerHTML.slice(0, 3);
            clearInterval(howLong);
            finnish.style.display = 'block';
        }
    }
}

/*reset all the value to the begining status*/
function restartGame() {
    stopwatchOn = false;
    moves = 0;
    movesText.innerHTML = `0 Moves`;
    seconds = 0;
    secondsText.innerText = "0 seconds";
    openedCards = [];
    foundCards = [];
    newCardsList();
    clearInterval(howLong);
    stars[5].classList.remove('remove-stars');
    stars[3].classList.remove('remove-stars');
}

/*restart button*/
again.addEventListener('click', function () {
    finnish.style.display = 'none';
    restartGame();
})

restart.addEventListener("click", restartGame);