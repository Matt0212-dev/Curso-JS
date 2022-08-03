const data = [
    {name: "Mateus", age: 31, sallary: 2000, driverLicense: true},
    {name: "João", age: 18, sallary: 1500, driverLicense: false},
    {name: "Mariana", age: 22, sallary: 4000, driverLicense: true},
    {name: "Pedro", age: 50, sallary: 7200, driverLicense: true},
    {name: "Érica", age: 16, sallary: 0, driverLicense: false},
]

//reverse
const reverseData = data.reverse()
console.log(reverseData)

//find
const highestSallary = data.find((user) => user.sallary > 5000)
console.log(highestSallary)

//findIndex
const lowerSallary = data.findIndex((user) => user.sallary > 0 && user.sallary < 2000)
console.log(lowerSallary)
data[lowerSallary].sallary += 200
console.log(data)

//includes
const numbers = [1, 2, 3, 4, 5]
const hasFour = numbers.includes(4)
console.log(hasFour)
console.log(numbers.includes(6))

//map
data.map((user) => (user.newsletter = false))
console.log(data)

//filter
const drivers = data.filter((user) => user.driverLicense);
console.log(drivers)

//reduce
const sallariesSum = data.reduce((totalSallary, user) => (totalSallary += user.sallary), 0)
console.log(sallariesSum)

//forEach
const showUser = (users) => {
    users.forEach((user) => {
        console.log(`Olá ${user.name}!`)
    })
}
showUser(data)

//some
let someoneWithNewsletter = data.some((user) => user.newsletter)
console.log(someoneWithNewsletter)
data[0].newsletter = true
someoneWithNewsletter = data.some((user) => user.newsletter)
console.log(someoneWithNewsletter)

//every
const everyUserHasName = data.every((user) => user.name)
console.log(everyUserHasName)

const everyHasGoodSallary = data.every((user) => {
    return user.sallary > 2000
})
console.log(everyHasGoodSallary)
