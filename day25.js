function Vue(options) {
  this.data = options.data
  Object.keys(this.data).forEach((val) => {
    Object.defineProperty(this, val, {
      get() {
        return this.data[val]
      },
      set(value) {
        this.data[val] = value
      }
    })
  })
}

let vm = new Vue({
  data: {
    message: 'hi'
  }
})

console.log(vm.message)

vm.message = 'hello'
console.log(vm.message)