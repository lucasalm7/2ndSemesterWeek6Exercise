// greater number

let numberOne = 5
let numberTwo = 9

if (numberOne > numberTwo) {
    console.log (`The greater number of ${numberOne} and ${numberTwo} is ${numberOne}`)}
    else {
   console.log (`The greater number of ${numberOne} and ${numberTwo} is ${numberTwo}`)      
    }


    // language 
let languageFR = "fr"
let languageFRhello = "Bonjour le monde"

if (languageFR = "fr") {
    console.log (languageFRhello)
}
else {
    console.log ("Hello")
}

// score assigner

let score = 75

if (score >= 90) {
    console.log ("Your grade is A")
}
else if (score >= 80) {
    console.log ("Your grade is B")
}
else if (score >= 70) {
    console.log ("Your grade is C")
}
else {
    console.log ("Your grade is F")
}

// multiplier

for (let x = 1; x <= 10; x++ ) {
    for (let y=1; y<=10; y++) {
        console.log (`${x} * ${y} = ${x * y}`)
    }
} 

// The Expense Tracker 

let expenses = [30, 20, 40, 20]
let total = 0

expenses.forEach((price) => {
    total += price
    console.log(price)
});

console.log(`Total expense: ${total}`)

// access denied 

let age = 20
let ticket = true

if (age >= 18 && ticket) {
    console.log ("Welcome to the show!")
    }
    else {
        console.log("Access denied.")
    }