class User implements Disposable {
    name: string;
    lastName: string;
    age: number;

    constructor(name: string, lastName: string, age: number) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
    }

    [Symbol.dispose]() { //the implementation of the method in Disposable interface
        console.log("Resource disposed synchronously.");
    }
}

function doSomethingWith(user: User) {
    console.log({user})
    throw new Error('Not implemented');
}

function f() {
    using user = new User("John", "Thomson", 30);
    doSomethingWith(user);
}

f();