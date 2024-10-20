const weightedTable = {
    'Indian': 0.5,
    'Sushi': 0.3,
    'A Little Mexican': 0.2
}

function getRandomFromWeightedTable(inputTable, previousResponse) {
    const rand = Math.random();
    let sum = 0;
    // verify all weights sum to 1
    let total = 0;
    for (const weight of Object.values(inputTable)) {
        console.log(weight)
        total += weight;
        console.log(total)
    }
    if (total !== 1) {
        throw new Error(`Weights do not sum to 1: ${total}`);

    }
    for (const [key, weight] of Object.entries(inputTable)) {
        sum += weight;
        if (rand <= sum) {
            if (key === previousResponse) {
                return getRandomFromWeightedTable(inputTable, previousResponse);
            }
            return key;
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    let buttonClicks = 0;
    const button = document.querySelector('button');
    let response
    button.addEventListener('click', function() {
        // Find H2 Tag and change it's text
        buttonClicks += 1;
        if (buttonClicks > 2) {
            response = "ChickFilA so at least Mark's happy"
        } else {
            response = getRandomFromWeightedTable(weightedTable, response);
        }
        const h2 = document.querySelector('h2');
        h2.textContent = response;
    });
});