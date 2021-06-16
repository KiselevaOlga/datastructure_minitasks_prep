const Stack = require('./Stack');

const pizzaStack = new Stack(6);

for(let i=1; i <= pizzaStack.maxSize; i++){
  let newPizza = `Pizza #${i}`;
  pizzaStack.push(newPizza);
}

try {
  pizzaStack.push(`Pizza #${7}`);
} catch(e) {
  console.log(e.message)
}

console.log(pizzaStack.peek())

while(pizzaStack.size != 0){
  console.log(pizzaStack.peek())
  pizzaStack.pop()
}

try {
  pizzaStack.pop()
} catch(e) {
  console.log(e.message)
}
