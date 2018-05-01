const obj = {a:1, b:2, c:3}
function select(obj, arr) {
  let temp = {}
  arr.forEach((val) => {
    temp[val] = obj[val]
  })
  console.log(temp)
}

select(obj, ['a','c'])