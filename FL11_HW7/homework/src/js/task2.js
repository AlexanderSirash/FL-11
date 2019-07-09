const initialMaxRange = 8;
const initialPrizeMap = {
    '1': 100,
    '2': 50,
    '3': 25
};
const initialAttempt = 1;

const rangeScale = 4;
let maxRange = initialMaxRange;

let prizeMap = Object.assign({}, initialPrizeMap);
const prizeScale = 2;

const maxAttempt = 3;
const maxAttemptFacet = 4;
let attempt = initialAttempt;

let randomNumber;
let userNumber;

let prize = 0;

if (confirm('Do you want to play a game?')) {
    while (attempt <= maxAttempt) {

        if (attempt === 1) {
            randomNumber = Math.floor(Math.random() * (maxRange + 1));
        }

        userNumber = +prompt(`Choose a roulette pocket number from 0 to ${maxRange}
Attempts left: ${maxAttemptFacet - attempt}
Total prize: ${prize}$
Possible prize on current attempt: ${prizeMap[attempt]}`,
            '0');

        if (userNumber === randomNumber) {
            prize += prizeMap[attempt];

            if (confirm(`Congratulation, you won! Your prize is: ${prize}$. Do you want to continue?`)) {
                attempt = initialAttempt;
                maxRange += rangeScale;

                for (let key in prizeMap) {
                    if (prizeMap.hasOwnProperty(key)) {
                        prizeMap[key] *= prizeScale;
                    }
                }

                continue;
            } else {
                break;
            }

        } else if (attempt === maxRange) {
            alert(`Thank you for your participation. Your prize is: ${prize}$`);

            if (confirm('Do you want to play again?')) {
                attempt = initialAttempt;
                maxRange = initialMaxRange;
                prize = 0;
                prizeMap = Object.assign({}, initialPrizeMap);

                continue;
            } else {
                break;
            }
        }

        attempt++;
    }
} else {
    alert('You did not become a billionaire, but can.');
}
