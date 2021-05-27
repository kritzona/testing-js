const merge = (array1 = [], array2 = []) => {
  let copiedArray1 = array1.slice(0)
  let copiedArray2 = array2.slice(0)

  copiedArray1.forEach((element) => {
    let foundElementIndex = copiedArray2.indexOf(element)
    if (foundElementIndex !== -1) {
      copiedArray2.splice(foundElementIndex, 1)
    }
  })

  return [...copiedArray1, ...copiedArray2]
}

module.exports = merge
