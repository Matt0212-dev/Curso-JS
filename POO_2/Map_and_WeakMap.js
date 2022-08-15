const myMap = new Map()
const myObj = new Object()

myObj.prop1 = 'prop 1'

// myMap.set('prop1', 'prop1')
// myMap.set(true, false)
// console.log(myMap.get('prop1'))
// console.log(myMap.get(true))

const arr = []

myMap.set(myObj, 'meu objeto')
console.log(myMap.get(myObj))
myMap.set(arr, myObj)
console.log(myMap.get(arr))

const myMap2 = new Map([ [0, 'zero'], [1, 'um'], [2, 'dois'] ])
console.log(myMap2.get(0))
console.log(myMap2.get(1))
console.log(myMap2.get(2))

console.log(myMap2.has(3))
console.log(myMap2.keys())  //{ 0, 1, 2 }
console.log(myMap2.values())    //{ 'zero', 'um', 'dois' }
console.log(myMap2.entries()) //{ [0, 'zero'], [1, 'um'], [2, 'dois'] }

let keys = myMap2.keys()
for(let k of keys){
    console.log(k)
}

for(let v of myMap2.values()){
    console.log(v)
}

let _contador = new WeakMap()
class Contador{
    constructor(){
        // this.contador = 0
        _contador.set(this, 0)
    }
    increment(){
        // this.contador++
        _contador.set(this, _contador.get(this) +1)
        console.log(_contador.get(this))
    }
    get contador(){
        return _contador.get(this)
    }
}

console.log('----------------')
const c1 = new Contador()
c1.increment()
console.log(c1.contador)
c1.increment()
c1.increment()
c1.increment()
console.log(c1.contador)


