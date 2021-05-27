const binarySearch = (
  array = [],
  neededElement = 0,
  left = 0,
  right = array.length,
) => {
  if (left <= right) {
    let middle = Math.floor((left + right) / 2)
    if (neededElement === array[middle]) {
      return middle
    }

    return neededElement < array[middle]
      ? binarySearch(array, neededElement, left, middle - 1)
      : binarySearch(array, neededElement, middle + 1, right)
  }

  return -1
}

module.exports = binarySearch
