function once(fnParam) {
  let done = false
  return function fnResult() {
    if (!done) {
      fnParam()
    }
  }
  done = true
}

let log1 = once(function () {
  console.log(1)
})