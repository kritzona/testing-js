const chunk = (sourceArray = [], size = 1) => {
  let chucks = []
  if (sourceArray.length === 0) return chucks

  const countChucks = Math.ceil(sourceArray.length / size)
  for (let i = 1; i <= countChucks; i++) {
    chucks.push([])
  }

  sourceArray.forEach((element, index) => {
    const chunkIndex = Math.floor(index / size)
    chucks[chunkIndex].push(element)
  })

  return chucks
}

module.exports = chunk
