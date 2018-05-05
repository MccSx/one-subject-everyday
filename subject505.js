var app = {
  fn1: function () {
    console.log(this)
  },
  fn2: function () {
    return function () {
      console.log(this)
    }
  },
  fn3: function () {
    function fn() {
      console.log(this)
    }
    fn()
  },
  fn4: function () {
    return {
      fn: function () {
        console.log(this)
      }
    }
  },
  fn5: function () {
    setTimeout(function () {
      console.log(this)
    }, 10)
  },
  fn6: function () {
    setTimeout(() => {
      console.log(this)
    }, 20)
  },
  fn7: function () {
    setTimeout((function () {
      console.log(this)
    }).bind(this), 30)
  },
  fn8: () => {
    setTimeout(() => {
      console.log(this)
    }, 40)
  }
}

app.fn1()    //this === app
app.fn2()()    //this === window
app.fn3()    //this == window
app.fn4().fn()    //this === fn
app.fn5()    //this === window
app.fn6()    //this === app
app.fn7()    //this === app
app.fn8()    //this === window