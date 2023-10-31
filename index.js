

const customerOrder = prompt(`hello what flavor froyo would you like?`);

const froyoOrder = {
  flavors: [`vanilla`, `strawberry`, `coffee`],

 flavorCount: (customerOrder) => {
  let flavors = [`vanilla`, `strawberry`, `coffee`];
    for (let i = 0; i < flavors.length; i++) {
      console.log(flavors[i]);
    }
  }
  

}

console.log(froyoOrder.flavorCount());