/*A CASE insensitive function function takes an array of drivers' names
and a string as arguments, and returns the matching list of drivers.*/
function findMatching(arrayOfDrivers, name) {
    return arrayOfDrivers.filter(element => element.toLowerCase() === name.toLowerCase())
}

/*Function takes an array of drivers' names and a string as arguments 
for querying the array, and returns all drivers whose names begin with the provided letters*/
function fuzzyMatch(arrayOfDrivers, letter) {
    return arrayOfDrivers.filter(element => element.toLowerCase().startsWith(letter.toLowerCase()))
}

/* Function that returns each element whose name property matches the provided string argument.*/
function matchName(arrayOfDrivers, nameValue) {
    return arrayOfDrivers.filter(element => element.name === nameValue)
}
// const drivers = [
//     {name: "Alice", hometown: "Nairobi"},
//     {name: "Zion", hometown: "Mombasa"},
//     {name: "Charles", hometown: "Kisumu"},
//     {name: "Siyad", hometown: "Mandera"},
// ]
// console.log(matchName(drivers, "Zion"))
