const unique = (array = []) => {
  if (!Array.isArray(array)) return []

  return Array.from(new Set(array))
}

module.exports = unique
