const compact = (sourceArray = []) => {
  return sourceArray.filter((element) => !!element)
}

module.exports = compact
