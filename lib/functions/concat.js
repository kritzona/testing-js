const concat = (...values) => {
  let concatValues = []

  values.forEach((value) => {
    Array.isArray(value)
      ? (concatValues = [...concatValues, ...value])
      : concatValues.push(value)
  })

  return concatValues
}

module.exports = concat
