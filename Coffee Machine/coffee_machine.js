// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input')

// Types of coffee to sell
const espresso = {
    water: 250, milk: 0, coffee: 16, price: 4
};

const latte = {
    water: 350, milk: 75, coffee: 20, price: 7
};

const cappuccino = {
    water: 200, milk: 100, coffee: 12, price: 6
};

function main() {
    let machine = {
        money: 550, water: 400, milk: 540, coffee: 120, cups: 9
    };
    let ret = 0;
    while (!ret) {
        ret = makeChoice(machine);
    }
}


function printMachine(m) {
    console.log(`The coffee machine has:
${m.water} ml of water
${m.milk} ml of milk
${m.coffee} g of coffee beans
${m.cups} disposable cups
$${m.money} of money
`)
}

function makeEspresso(m) {
    if (m.water < espresso.water) {
        console.log("Sorry, not enough water!");

    } else if (m.coffee < espresso.coffee) {
        console.log("Sorry, not enough coffee beans!");
    } else if (m.cups <= 0) {
        console.log("Sorry, not enough cups!");
    } else {
        console.log("I have enough resources, making you a coffee!");
        let choice = Number(input("Do you want me to add some whiskey? (0 - no, 1 - yes)\n"));
        if (choice) {
            console.log("Good choice! Adding a whiskey to your coffee, thank you!");
        } else {
            console.log("You're choice...");
        }
        m.water -= espresso.water;
        m.coffee -= espresso.coffee;
        m.money += espresso.price;
        m.cups -= 1;
    }
}

function makeLatte(m) {
    if (m.water < latte.water) {
        console.log("Sorry, not enough water!");
    } else if (m.milk < latte.milk) {
        console.log("Sorry, not enough milk!");
    } else if (m.coffee < latte.coffee) {
        console.log("Sorry, not enough coffee beans!");
    } else if (m.cups <= 0) {
        console.log("Sorry, not enough cups!");
    } else {
        console.log("I have enough resources, making you a coffee!");
        let choice = Number(input("Do you want me to add some whiskey? (0 - no, 1 - yes)\n"));
        if (choice) {
            console.log("Good choice! Adding a whiskey to your coffee, thank you!");
        } else {
            console.log("You're choice...");
        }
        m.water -= latte.water;
        m.coffee -= latte.coffee;
        m.milk -= latte.milk;
        m.money += latte.price;
        m.cups -= 1;
    }
}

function makeCappuccino(m) {
    if (m.water < cappuccino.water) {
        console.log("Sorry, not enough water!");
    } else if (m.milk < cappuccino.milk) {
        console.log("Sorry, not enough milk!");
    } else if (m.coffee < cappuccino.coffee) {
        console.log("Sorry, not enough coffee beans!");
    } else if (m.cups <= 0) {
        console.log("Sorry, not enough cups!");
    } else {
        console.log("I have enough resources, making you a coffee!");
        let choice = Number(input("Do you want me to add some whiskey? (0 - no, 1 - yes)\n"));
        if (choice) {
            console.log("Good choice! Adding a whiskey to your coffee, thank you!");
        } else {
            console.log("You're choice...");
        }
        m.water -= cappuccino.water;
        m.coffee -= cappuccino.coffee;
        m.milk -= cappuccino.milk;
        m.money += cappuccino.price;
        m.cups -= 1;
    }
}

function buyCoffee(m) {
    let type = input("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, back - to main menu:\n");
    switch (type) {
        case "1":
            makeEspresso(m);
            break;
        case '2':
            makeLatte(m);
            break;
        case "3":
            makeCappuccino(m);
            break;
        case "back":
            return;
        default:
            console.error("NaN");
            break;
    }
}

function makeChoice(m) {
    let choice = input("Write action (buy, fill, take, remaining, exit):\n)");
    switch (choice) {
        case "buy":
            buyCoffee(m);
            break;
        case "fill":
            fillMachine(m);
            break;
        case "take":
            takeMoney(m);
            break;
        case "remaining":
            printMachine(m);
            break;
        case "exit":
            return 1;
        default:
            console.error("Unknown command");
            break;
    }
    return 0;
}

function fillMachine(m) {
    m.water += Number(input("Write how many ml of water you want to add:\n"));
    m.milk += Number(input("Write how many ml of milk you want to add:\n"));
    m.coffee += Number(input("Write how many g of coffee beans you want to add:\n"));
    m.cups += Number(input("Write how many disposable coffee cups you want to add:\n"));
}

function takeMoney(m) {
    console.log("I gave you $" + m.money + "\n");
    m.money = 0;
}

main();
