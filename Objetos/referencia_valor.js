let x = 10
let y = {n: 10}

function mudaX(n){
    n++
    console.log(n)
}

mudaX(x)

function mudaY(obj){
    obj.n++
    console.log(obj)
}

mudaY(y)