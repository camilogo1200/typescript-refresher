# TypeScript Refresher

## 01 - Variable Declaration

**`var`**, **`let`**, and **`const`**, are the _**keywords**_ available to declare a variable in __TypeScript__,
However, the result ( variable creation ) variefs depending on the keyword used in the declaration.

- **`let`** and **`const`** are "new" concepts for variable declaration in Javascript
- **`let`** is similar to **`var`** in some respects, but allows users to avoid some "gotchas" in JavaScript.
- **`const`** is an augmentation of **`let`**, it prevents re-assignment to a variable, or value change

### `var` Declarations

- `var` declarations are accessible anywhere within their containing function, module, namespace, or global scope.
  regardless of the containing block.

### `let` Declarations

````typescript
let myVar = 0;
````

- `let` statements were introduced, due to the issues caused by the `var` declarations.
- `let` statements are written the same way as `var` statements
- The key difference is not the syntax, but instead the semantics

#### `let` Block scoping

- `let` uses block scoping, which means that let variables are not visible outside of their nearest containing block.

````typescript
// example of block scoping variables
function f(input: boolean) {
    let a = 100;
    if (input) {
        // Still okay to reference 'a'
        let b = a + 1;
        return b;
    }
    // Error: 'b' doesn't exist here
    return b;
}
````

- Block-scoped variables cannot be read or written before they are actually declared. ( you can't access before the
  `let` statement)

#### `let` Re-declarations and Shadowing

- With `var` variables, you can declare as many times as you need, but in the end, they are pointing to the same
  variable.
- With `let` variables you cannot re-declare a variable multiple times ( In the same block scope).

````typescript
function f(x) {
    let x = 100;  // ❌ error: interferes with parameter declaration
}

function g() {
    let x = 100;
    var x = 100; // ❌ error: can't have both declarations of 'x'
}
````

### `const` Declarations

````typescript
const pi = 3.141592653589793;
````

- `const` declarations cannot change their value once they are bound.
- `const` declarations have the same rules as `let` declarations, but you cannot re-assign to them.
- `const` internal state is still modifiable, but TypeScript lets you specify what members of an object are `readonly`

````typescript
const numLivesForCat = 9;
const kitty = {
    name: "Aurora",
    numLives: numLivesForCat,
};
// Error
kitty = {
    name: "Danielle",
    numLives: numLivesForCat,
};
// all "okay"
kitty.name = "Rory";
kitty.name = "Kitty";
kitty.name = "Cat";
kitty.numLives--;
````

## Resume: 
### `let` vs `const`

- All declarations other than those you plan to modify should use `const`.

---

# Official Documentation

- [Typescript -
  handbook - Variable Declaration](https://www.typescriptlang.org/docs/handbook/variable-declarations.html#let-declarations)

---

## Examples

````typescript
// var is an undesirable variable declaration in TypeScript
var number = 10; // ❌

const myConstantVariable = "foo"; // ✅
// The double value that is closer than any other to pi, the ratio of the circumference of a circle to its diameter.
const pi = 3.141592653589793; // ✅

````