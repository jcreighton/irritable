let drinks = [];

function addToOrder(drink) {
  drinks.push(drink);
};

function completeOrder() {
  console.log(drinks);
  // ["beer", "water"]

  for (let drink of drinks) {
    console.log(drink);
    // undefined
    makeDrink(drink);
  }

  sendOrderToTable();
}

addToOrder("beer");
addToOrder("water");


function makeDrink() {

}
