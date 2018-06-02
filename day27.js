function Vue(options) {
  let {data, computed} = options
  for (let key in data) {
    Object.defineProperty(this, key, {
      value: data[key],
      writable: true
    })
  }
  for (let key in computed) {
    Object.defineProperty(this, key, {
      get: function () {
        return computed[key].call(this)
      }
    })
  }
}