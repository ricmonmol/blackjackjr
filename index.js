let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = " "
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsel = document.getElementById("cards-el")


let player = {
    name: "Ric",
    chips: 200
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    sum = firstCard + secondCard
    cards = [firstCard, secondCard]
    renderGame()
}


function renderGame(){
    if (sum <= 20){
        message = "Do you want another card?"
    } else if (sum === 21){
        message = "BlackJack!"
        hasBlackJack = true
    } else {
        message = "You are out the game"
        isAlive = false;
    }

    messageEl.textContent = message 
    sumEl.textContent = "Sum: " + sum
    cardsel.textContent = "Cards: " 

    for(i = 0; i<cards.length; i++){
        cardsel.textContent += cards[i] + " "
    }
    
}

function newCard(){
    if (isAlive && !hasBlackJack){
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}

function getRandomCard(){
    let randomCard = Math.floor(Math.random()*13) + 1
    if (randomCard === 1){
        return 11
    } if (10 < randomCard){
        return 10
    } else{
        return randomCard;
    }
}