var a = 1
function fn1() {
  function fn3() {
    function fn2() {
      console.log(a)
    }
    var a
    fn2()
    a = 4
  }
  var a =2
  return fn3
}

var fn = fn1()
fn()  //undefined