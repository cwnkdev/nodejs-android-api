const bot = require("clouddroid-bot")
//  bot.GetDevices().then((data)=>{
//     console.log(data) 
//  })

function delay(x) {
    return new Promise((done, fail) => setTimeout(done, x));
}

const test = async () => {
    let a = async () => {
        while (true) {
            await delay(1000)
            bot.Tap("emulator-5556", 51,909).then((data) => {
                console.log(data)
            })
            await delay(1000)
            bot.Tap("emulator-5556", 487,913).then((data) => {
                console.log(data)
            })
        }
    }

    let b = async () => {
        while (true) {
            await delay(1000)
            bot.Tap("emulator-5558", 101,106).then((data) => {
                console.log(data)
            })
            await delay(1000)
            bot.Tap("emulator-5558", 293,99).then((data) => {
                console.log(data)
            })
            await delay(1000)
            bot.Tap("emulator-5558", 485,107).then((data) => {
                console.log(data)
            })
            await delay(1000)
            bot.Tap("emulator-5558", 862,101).then((data) => {
                console.log(data)
            })
        }
    }

    a();
    b();
}

test();