
let userInput = prompt(`type in the flavors you want to order seperated by commas.`)

flavorArray = userInput.split(`,`);

let flavorCount = {};

for(let i = 0; i < flavorArray.length; i++) {
  const flavor = flavorArray[i];
  if (flavor in flavorCount) {
    flavorCount[flavor]++
  }
  else {
    flavorCount[flavor] = 1;
  }
  flavorCount[flavor] = 1;
}
console.log(flavorCount);






