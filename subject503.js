function sor(str) {
  return str.split('').sort().join('')
}
function execTimes(fn, num) {
  let oldTIme = Date.now()
  return function (str) {
    for (let i = 0; i < num; i++) {
      fn(str)
    }
    let nowTime = Date.now()
    console.log(`执行${num}次，耗时${nowTime - oldTIme}ms`)
  }
}

execTimes(sor, 1000)('hello')