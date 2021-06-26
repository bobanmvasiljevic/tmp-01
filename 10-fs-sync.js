const { readFileSync, writeFileSync } = require('fs')
console.log('start')
const first = readFileSync('./content/first.txt', 'utf8')
setTimeout(function () {
  console.log('boo')
}, 5000)
const second = readFileSync('./content/second.txt', 'utf8')
const pocetni = readFileSync('./content/result-sync.txt', 'utf8')

console.log(first)
console.log(second)
console.log(pocetni)
writeFileSync(
  './content/result-sync.txt',
  `Here is the result :\n${first} \n${second}\n`,
  { flag: 'a' }
)
const krajnji = readFileSync('./content/result-sync.txt', 'utf8')
console.log(krajnji)
console.log('done with this task')
console.log('starting the next one')
