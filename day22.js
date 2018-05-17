function sort(arr) {
  let temp = 0
  let index = 0
  for (let i = 0; i < arr.length; i++) {
    temp = arr[i]
    index = i
    for (let j = i+1; j < arr.length; j++) {
      temp = arr[j] <= temp ? arr[j] : temp
      index = arr[j] <= temp ? j : index
    }
    arr[index] = arr[i]
    arr[i] = temp
  }
  return arr
}