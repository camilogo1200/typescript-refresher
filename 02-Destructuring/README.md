# TypeScript Refresher

## 02 - Destructuring

A ECMAScript 2015 feature is destructuring.

- **Destructuring** makes possible unpack values from arrays, or properties from objects, into distinct variables.
- performs the reverse operation of an array declaration

````typescript
//array
const arr = [1, 2, 3];
const [a, b, c] = arr;
// a = 1, b = 2, c = 3
````

````typescript
const obj = {a, b, c};
const {a, b, c} = obj;

// equivalent to 
// const a = obj.a, b = obj.b, c = obj.c

````

### Array Destructuring

- Basic variable assignment

````typescript
const foo = ["one", "two", "three"];

const [red, yellow, blue] = foo;

console.log(red);  // "one"
console.log(yellow); // "two"
console.log(blue); //"three"
````

### Destructuring withh more elements than the source

- In an array destructuring from an array of length N specified on the right side of the assignment, if the number of
  variables specified on the left-hand side of the assignment is greater than N, only the first N variables are assigned
  values.
- the values of the remaining variables will be undefined

### Ignoring some returned values

- you can ignore some of the returned values of the destructuring process.

```typescript

function getParams(): number[] {
    return [1, 2, 3, 4, 5]
}

const [varA, , , VarB] = getparams();
console.log({varA}) //1
console.log({varB}) //4

```

- You can also ignore all returned values
````typescript
[,,] = f();
````

---

# Official Documentation

- [Typescript -
  handbook - Variable Declaration](https://www.typescriptlang.org/docs/handbook/variable-declarations.html#let-declarations)
- [Developer Mozilla - MDM - Destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring)

---

## Examples

````typescript
const [a, b] = array;
const [a, , b] = array;
const [a = aDefault, b] = array;
const [a, b, ...rest] = array;
const [a, , b, ...rest] = array;
const [a, b, ...{pop, push}] = array;
const [a, b, ...[c, d]] = array;

const {a, b} = obj;
const {a: a1, b: b1} = obj;
const {a: a1 = aDefault, b = bDefault} = obj;
const {a, b, ...rest} = obj;
const {a: a1, b: b1, ...rest} = obj;
const {[key]: a} = obj;
````

````typescript
let a, b, a1, b1, c, d, rest, pop, push;
[a, b] = array;
[a, , b] = array;
[a = aDefault, b] = array;
[a, b, ...rest] = array;
[a, , b, ...rest] = array;
[a, b, ...{pop, push}] = array;
[a, b, ...[c, d]] = array;

({a, b} = obj); // parentheses are required
({a: a1, b: b1} = obj);
({a: a1 = aDefault, b = bDefault} = obj);
({a, b, ...rest} = obj);
({a: a1, b: b1, ...rest} = obj);

````