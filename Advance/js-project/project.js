// 1. Deposit some money
// 2. Determine the number of lines to step on
// 3. Collect a bet amount
// 4. Spin the slot machine
// 5. check if the user won
// 6. give the user their winnings
// 7. play again

const prompt = require("prompt-sync")()

const ROWS = 3;
const COLS = 3;

const SYMBOLS_COUNT = {
    "A":2,
    "B":4,
    "C":6,
    "D":8
}

const SYMBOLS_VALUES = {
    "A":5,
    "B":4,
    "C":3,
    "D":2
}

const deposit = () => {
    while (true) {
        const depositAmount = prompt("Enter a deposit amount: ")
        const numberDepositAmount = parseFloat(depositAmount)
    
        if (isNaN(numberDepositAmount) || numberDepositAmount<=0) {
            console.log("Invalid deposit amount, try again");
        } else {
            return numberDepositAmount
        }
    }
}

const getNumOfLines = () => {
    while (true) {
        const lines = prompt("Enter the num of lines to bet on (1-3)")
        const numOfLines = parseFloat(lines)

        if (isNaN(numOfLines) || (0>=numOfLines) || numOfLines>3) {
            console.log("Invalid num of lines!! Try again.");
        } else {
            return numOfLines
        }
    }
}

const getBet = (balance) => {
    while (true) {
        const bet = prompt("Enter the total bet: ")
        const numBet = parseFloat(bet)
        if (isNaN(numBet) || numBet<=0 || numBet>balance) {
            console.log("Invalid bet, try again");
        } else {
            return numBet
        }
    }
}

const spin = () => {
    const symbols = []

    for (const [symbol,count] of Object.entries(SYMBOLS_COUNT)) {
        for (let i = 0; i < count; i++) {
            symbols.push(symbol)
        }
    }
    const reels = [[],[],[]]
    for (let i=0;i<COLS;i++){
        const reelSymbols = [...symbols]
        for (let j=0;j<COLS;j++){
            const randomIndex = Math.floor(Math.random() * reelSymbols.length)
            const selectedSymbol = reelSymbols[randomIndex]
        }
    }
}

spin()

const depositAmount = getBet(100)
console.log(depositAmount);