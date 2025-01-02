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

function fetchData() {
    let shouldReject = Math.random() < 0.5;

    return new Promise((resolve, reject) => {
        if (shouldReject) {
            reject("Something went wrong!");
        } else {
            resolve("fake ahh data");
        }
    });
}


async function fetchFakeData() {
    try{
        let res = await fetchData();
        console.log(res)
    }catch(e){
        console.log(e)
    }
}
fetchFakeData();


fetchData().then(data => {
    console.log(data)
}).catch(e => {
    console.log(e)
})

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
