type Action<T = string> = {
    action: T
}

const step1: Action<number> = {
    action: 0
}

step1.action = 20

const step2: Action<boolean> = {
    action: true
}

const step3: Action = {
    action: 'teste'
}

console.log(step1)
console.log(step2)
console.log(step3)


type NumberOrString = number | string
interface ActionI<T extends NumberOrString = string, U = number>{
    action: T,
    timestamp: U
}

const step4: ActionI = {
    action: 'delete',
    timestamp: 123
}

const historyAction: Array<ActionI> = []

const addAction = <T extends ActionI & {id: number}>(obj: T) => {
// const addAction = <T extends {action: string, timestamp: number, id: number}>(obj: T) => {
    console.log('addAction')
    console.log(obj)
    const result = {
        ...obj,
        _id: obj.id + "_" + obj.timestamp
    }
    historyAction.push(result)
}

addAction({
    action: 'delete',
    timestamp: 123,
    teste: 'ola',
    id: 123
})
console.log(historyAction)

 