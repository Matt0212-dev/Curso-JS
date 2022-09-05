"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(x, y) {
    return x + y;
}
var multiply = function (x, y) {
    return x * y;
};
//a primeira parte é só o TIPO da função, recebe 2 numeros e retorna um numero
var subtract = function (x, y) { return x - y; };
var teste = subtract(3, 1);
var mateus = {
    name: "mateus",
    id: 0,
    isAdmin: true,
    level: 'teacher'
};
// '!!' converte para booleano
var isAdmin = function (user) { return !!user.isAdmin; };
console.log(isAdmin(mateus));
var maria = {
    name: "maria",
    id: 1
};
console.log(isAdmin(maria));
exports.default = 2;
