const random = (min = 0, max = 1) => {
  const roundedMin = Math.ceil(min)
  const roundedMax = Math.floor(max)

  return Math.floor(Math.random() * (roundedMax - roundedMin)) + roundedMin
}

module.exports = random
