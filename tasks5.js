function logWhileEqual(number) {
    if (number < 0 || number > 10) {
        console.log("Argument should be between 0 and 10");
        return;
    }

    let randomNum;

    do {
        randomNum = Math.floor(Math.random() * 11);
        console.log(`Random Number: ${randomNum}, Argument: ${number}`);
    } while (randomNum === number);
}

logWhileEqual(5);

//////////////////////////////////////////////////////

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function sleepFunc() {
    console.log('First');
    await sleep(2000); 
    console.log('Second');
}

sleepFunc();
