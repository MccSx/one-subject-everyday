function dispatch(n, m) {
  let arr1 = []
  for (let i = 1; i <= n; i++) {
    arr1.push(i)
  }

  let arr2 = []
  if (n%m === 0) {
    let temp = 0
    for (let i = 1; i <= m; i++) {
      let n1 = temp
      let n2 = temp + n/m
      arr2.push(arr1.slice(n1, n2))
      temp = n2
    }
  } else {
    let num = n%m
    let temp = 0
    for (let i = 1; i <= num; i++) {
      let n1 = temp
      let n2 = temp + Math.ceil(n/m)
      arr2.push(arr1.slice(n1, n2))
      temp = n2
    }
    for (let j = 1; j <= (m-num); j++) {
      let n1 = temp
      let n2 = temp + Math.floor(n/m)
      arr2.push(arr1.slice(n1, n2))
    }
  }
  return arr2
}
console.log(dispatch(6,3))
console.log(dispatch(9,2))
console.log(dispatch(11,4))