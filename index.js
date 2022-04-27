//const createStatsCollector = require("mocha/lib/stats-collector")

const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name = "Jeff") {
    return cats.push(name)
}
function destructivelyPrependCat(name = "Todd") {
    return cats.unshift(name)
}
function destructivelyRemoveLastCat() {
    return cats.pop()
}
function destructivelyRemoveFirstCat() {
    return cats.shift()
}
function prependCat(name = "George") {
    return [name,...cats]
}
function appendCat(name = "Rick") {
    return [...cats,name]
}
function removeLastCat() {
    return cats.slice(0,2)
}
function removeFirstCat() {
    return cats.slice(1)
}