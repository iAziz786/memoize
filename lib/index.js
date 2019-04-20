function memoize(fn) {
  const map = new Map();
  return function newFn(arg) {
    if (map.get(arg)) {
      return map.get(arg);
    }
    return map.set(arg, fn(arg)).get(arg);
  };
}

module.exports = memoize;
