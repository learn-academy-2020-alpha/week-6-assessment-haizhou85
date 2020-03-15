// ASSESSMENT 6: Coding Practical Questions


// --------------------1) Create a function that takes in an array of objects and returns a sentence about each person with their names capitalized.

var people = [{name: "ford prefect", occupation: "hitchhiker"}, {name: "zaphod beeblebrox", occupation: "president of the galaxy"}, {name: "arthur dent", occupation: "radio employee"}]
// Expected output example: "Ford Prefect is a hitchhiker." "Zaphod Beeblebrox is the president of the galaxy." "Arthus Dent is a radio employee."
const capitalizeName = (arr) =>{
    //iterates through the array to reach each object
    arr.forEach(el => {
        //split first and last name into an array
        let fullNameArr = el.name.split(" ")
        //capitalize the first letter of names
        fullNameArr = fullNameArr.map(name => {
            return name.charAt(0).toUpperCase() + name.substring(1)
        })
        //join the names to get a full name
        let fullName = fullNameArr.join(" ")
        //output the results
        if (el.occupation.includes("president")){
            console.log(`${fullName} is the ${el.occupation}.`)
        }else {
            console.log(`${fullName} is a ${el.occupation}.`)
        }
    })
}

capitalizeName(people)

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the remainder of the numbers when divided by 3.

var testingArray1 = [23, "Heyyyy!", 45, -9, 0, "Yo", false]
// Expected output: [ 2, 0, -0, 0 ]
var testingArray2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

const remainderByThree = (array) =>{
    //filter with only numbers
    return array.filter(el => typeof(el) === "number")
    //output each number's remainder
                .map(value => value%3)
}

console.log(remainderByThree(testingArray1))
console.log(remainderByThree(testingArray2))




// --------------------3) Create a function that takes in two arrays as arguments returns one array with no duplicate values.

var testingArray3 = [3, 7, "hi", 10, 3, "hello", 4, "hi"]
var testingArray4 = [7, "hi", 3, 1, "hi", 4, "hello", 4, 7]
// Expected output: [ 3, 7, "hi", 10, "hello", 4, 1 ]

const noDuplicate = (arr1, arr2) => {
    //join two arrays
    let array = [...arr1, ...arr2]
    //filter the array with only unique elements
    return array.filter((el,index) => index === array.indexOf(el) )
}

console.log(noDuplicate(testingArray3, testingArray4))