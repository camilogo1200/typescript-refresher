//array

const arr = [1, 2, 3];
const [a, b, c] = arr;
// a = 1, b = 2, c = 3
console.log({a}, {b}, {c})


//basic variable assignment
const foo = ["one", "two", "three"];
const [red, yellow, blue] = foo;
console.log({red});  // "one"
console.log({yellow}); // "two"
console.log({blue}); //"three"

//Undefined values when the destructuring
const carBrands = ["BMW", "MERCEDES", "AUDI"];
console.log({carBrands});

const [bmw, mercedes, audi, mazda, ford] = carBrands;
console.log({bmw}, {mercedes}, {audi}, {mazda}, {ford});

function getArray(): number[] {
    return [1, 2, 3];
}


const [one, two, three] = getArray();
console.log({one});
console.log({two});
console.log({three});


//Ignoring parameters
function getParams(): number[] {
    return [1, 2, 3, 4, 5]
}

const [varA, , , varB] = getParams();
console.log({varA})
console.log({varB})

const [varC] = getParams();
console.log({varC})


const [num1, num2, ...[numA, numB]] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log(num1, num2, numA, numB); // 1 2 3 4


