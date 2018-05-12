function deepCopyArray(arr) {
  let copyArr = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] instanceof Array && arr[i] === arr) {
      copyArr.push(copyArr)
    } else if(arr[i] instanceof Array) {
      copyArr.push(deepCopyArray(arr[i]))
    } else {
      copyArr.push(arr[i])
    }
  }
  return copyArr
}

let a1 = [1,2,[1,2,[1,2]]]
let a2 = [1,2]
a2.push(a2)
console.log(deepCopyArray(a1))
console.log(a2)
console.log(deepCopyArray(a2))
