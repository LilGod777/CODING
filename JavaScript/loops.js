let i = 0

/*
while (i <= 100) {
  console.log(i)
  i++
}
*/

/*
let array = ["red", "green", "blue"]

for (let colors of array) {
  console.log(colors)
}

*/

// Loop to print numbers from 1-100 :

/*
for (let i = 0; i <= 100; i++) {
  if (i % 5 == 0 && i % 3 == 0) {
    console.log('fizzbuzz')
  } else if (i % 5 == 0) {
    console.log('buzz')
  } else if (i % 3 == 0) {
    console.log('fizz')
  } else {
    console.log(i)
  }
} 
*/

let forCount = () => {
  console.log('Counting to 5 using a for loop')
  for (let i = 1; i <= 5; i++) {
    console.log(i)
  }
}

let forOfCount = () => {
  console.log('Counting to 5 using a for of loop')
  let myArray = [1, 2, 3, 4, 33]
  for (let i of myArray) {
    console.log(i)
  }
}

let forInCount = () => {
  console.log('Counting to 5 using a for in loop')
  let myArray2 = [1, 2, 3, 4, 5, 33]
  for (let i in myArray2) {
    console.log(i)
  }
}

let whileCount = () => {
  console.log('Counting to 5 using a while loop')
  let i = 1
  while (i <= 5) {
    console.log(i)
    i++
  }
}

forCount(0)
forOfCount(0)
forInCount(0)
whileCount(0)