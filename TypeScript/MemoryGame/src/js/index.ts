import {cards} from './card'
import {Game} from './game'

const gameDOM = document.querySelector('[data-game]') as HTMLDivElement

const game = new Game(gameDOM, cards)
game.init()

console.log(cards)