const curry = (fn = () => {}) => {
  return function curried(...args) {
    let totalArgs = fn.length
    let currentArgs = args.length

    if (currentArgs >= totalArgs) {
      return fn.call(null, ...args)
    }

    return (...nextArgs) => {
      return curried.call(null, ...args, ...nextArgs)
    }
  }
}

module.exports = curry
