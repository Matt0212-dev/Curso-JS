const obj = {
    prop1: 'prop1',
    prop2: 'prop2',
}
const objFreeze = {...obj}
const objSeal = {...obj}
const objPrevent = {...obj}

Object.freeze(objFreeze)    //não pode criar, atualizar e remover propriedades
Object.seal(objSeal)    //não pode criar, pode atualizar mas não pode rmover propridades
Object.preventExtensions(objPrevent)    //não pode criar, pode atualizar e pode remover propridades  
