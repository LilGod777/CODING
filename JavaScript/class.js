class Person {
    constructor(name, age, location) {
        this.name = name
        this.age = age
        this.location = location
    }

    birthday() {
        this.age += 1
    }
}

let jared = new Person('Jared', 25, 'Baltimore')

jared.birthday()
// console.log(jared)

class Car {
    constructor(make, model) {
        this.navigation = true
        this.make = make
        this.model = model
        this.fuel = 100
        this.features = {
            "nav": true
        }

    }

    drive() {
        console.log(`Let's go on a drive!`)
        this.fuel -= 10
    }

    getGas() {
        console.log(`Filled tank!`)
        this.fuel = 100
    }
}

let daily = new Car("Mercedes", "C63 AMG S")

// daily.drive()
// console.log(daily)

// daily.getGas()
// console.log(daily)



// Creating Property
// daily.color = 'Black'
// console.log(daily)



// We can delete properties from objects
// delete daily.fuel



// Looping through objects (for in loop)
for (let key in daily) {
    console.log(key, daily[key])
}