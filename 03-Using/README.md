# TypeScript Refresher

## 02 - Using

- `using` declarations is much like a `const` declaration, except that it couples the _lifetime_ of the value bond to
  the
  declaration with the scope of the variable.

- When control exits the block containing a `using` declaration, the `[Symbol.dispose]()` method of the declared value
  is executed, which allows that value to perform cleanup:

````typescript
function f() {
    using x = new C();
    doSomethingFunction(x);
} //  `x[Symbol.dispose]()` is called

//a equivalent code could be the following:
function func() {
    const x = new C();
    try {
        doSomethingFunction(x);
    } finally {
        x[Symbol.dispose]();
    }
}

````

- `using` declaration are useful for avoiding memory leaks when working with Javascript Objects that hold on to native
  references like file handlers

````typescript
{
    using file = await openFile();
    file.write(text);
    doSomethingThatMayThrow();
} // `file` is disposed, even if an error is thrown

````

- Unlike `var` , `let`, and `const`, `using` declarations do not support destructuring.

## Note:

- if the following error is showing on the console:
````typescript
 Uncaught TypeError: Symbol(Symbol.dispose) is not a function
````
- that means that your class need to implement the Disposable interface, but more important is to activate the option on the file `tsconfig.json` in the lib sectiion 

```json lines
{
  //...
  "lib": [
    "esnext.disposable"
  ],
  //...
}
````

---

# Official Documentation

- [Typescript -
  handbook - Variable Declaration](https://www.typescriptlang.org/docs/handbook/variable-declarations.html#let-declarations)
- [Developer Mozilla - MDM - Destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring)

---

## Examples

````typescript

````
