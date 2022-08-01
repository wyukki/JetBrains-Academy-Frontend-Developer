/** @format */

const input = require("sync-input");
const currencies = ["jpy", "usd", "gbp", "rub", "eur"];
const values = [113.5, 1, 0.75, 74.36, 0.89];

function getRes(fromCurr, toCurr, amount) {
  let toUSD = 1 / values[currencies.indexOf(fromCurr)];
  return [
    toUSD * amount * values[currencies.indexOf(toCurr)],
    fromCurr,
    toCurr,
    amount,
  ];
}

function readInput() {
  console.log(`What do you want to convert?\nFrom:`);
  let fromCurr = input().toLowerCase();
  if (!currencies.includes(fromCurr)) {
    console.log("Unknown currency");
    return null;
  }
  console.log("To: ");
  let wanted = input().toLowerCase();
  if (!currencies.includes(wanted)) {
    console.log("Unknown currency");
    return null;
  }
  let index = currencies.indexOf(wanted);
  console.log("Amount: ");
  let amount = Number(input());
  if (isNaN(amount)) {
    console.log("The amount has to be a number");
    return null;
  } else if (amount < 1) {
    console.log("The amount cannot be less than 1");
    return null;
  }
  return getRes(fromCurr, wanted, amount); //[amount, index, wanted, fromCurr];
}

function main() {
  console.log(`Welcome to Currency Converter!
1 USD equals 1 USD
1 USD equals 113.5 JPY
1 USD equals 0.89 EUR
1 USD equals 74.36 RUB
1 USD equals 0.75 GBP`);
  console.log(`What do you want to do?
1-Convert currencies 2-Exit program`);
  let res;
  while ((res = input()) != 2) {
    if (res == 1) {
      let data = readInput();
      if (data != null) {
        console.log(
          `Result: ${data[3]} ${data[1].toUpperCase()} equals ${data[0].toFixed(
            4
          )} ${data[2].toUpperCase()}`
        );
      }
    } else {
      console.log("Unknown input");
    }
  }

  console.log("Have a nice day!");
}

main();
