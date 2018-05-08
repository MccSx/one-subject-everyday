setTimeout(() => {
  console.log(4)
},0)
new Promise(resolve => {
  console.log(1)
  for (var i=0; i<10000; i++) {
    i == 9999 && resolve()
  }
  console.log(2)
}).then(() => {
  console.log(5)
  Promise.resolve(7)
  .then(v => console.log(v))
}).then(() => {
  console.log(6)
})
console.log(3)

/*
 *  1
 *  2
 *  3
 *  5
 *  7
 *  6
 *  4
*/