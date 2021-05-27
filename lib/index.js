const _ = require('lodash')

const chuck = require('./functions/chuck')
const compact = require('./functions/compact')
const concat = require('./functions/concat')
const difference = require('./functions/difference')
const merge = require('./functions/merge')
const curry = require('./functions/curry')
const unique = require('./functions/unique')
const random = require('./functions/random')
const binarySearch = require('./functions/binarySearch')

console.log('- Разбитие массива на части -')
const array = ['a', 'b', 'c', 'd', 'f', 'g']
console.log(_.chunk(array, 5))
console.log(chuck(array, 5))
console.log('')

console.log('- Фильтрация отрицательных значений -')
const arrayWithNegative = [0, 'i', false, 'kek', 1]
console.log(_.compact(arrayWithNegative))
console.log(compact(arrayWithNegative))
console.log('')

console.log('- Конкатенация значений и массивов -')
console.log(_.concat([1], 2, [3], [[4]]))
console.log(concat([1], 2, [3], [[4]]))
console.log('')

console.log('- Разница первого массива от второго -')
console.log(_.difference([2, 1], [2, 3]))
console.log(difference([2, 1], [2, 3]))
console.log('')

console.log('- Слияние двух массивов -')
console.log(merge([2, 1], [2, 3]))
console.log('')

console.log('- Каррирование -')
const add = (a, b, c) => {
  return a + b + c
}
const curriedAdd = curry(add)
console.log(curriedAdd(2, 1)(1))
console.log('')

console.log('- Уникальные значения -')
console.log(unique([1, 1, 4, 65, 4]))
console.log('')

console.log('- Рандомные значения -')
console.log(random(10, 20))
console.log('')

console.log('- Бинарный поиск -')
const arrayWithNumbers = [1, 0, 10, 67, 89, 30, 31, 79]
const sortedArray = arrayWithNumbers.sort((a, b) => a - b)
console.log(binarySearch(sortedArray, 10))
console.log('')
