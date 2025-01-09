// binding the function with desired object to force use the current obj reference

function bark () {
    return `${this.name} says bow bow`
}

const dog1 = {
    name: "dog1",
    age: 3
}

console.log(bark.call(dog1))
