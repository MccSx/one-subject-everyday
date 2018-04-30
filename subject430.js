var users  = [
  {
    name: 'John',
    age: 20,
    company: 'Jirengu'
  },
  {
    name: 'Pete',
    age: 18,
    company: 'Alibaba'
  },
  {
    name: 'Ann',
    age: 19,
    company: 'Tencent'
  }
]

function byField(message) {
  return function (a, b) {
    if (a[message] < b[message]) {
      return -1
    } else if (a[message] > b[message]) {
      return 1
    } else {
      return 0
    }
  }
}

let newUsersByName = users.sort(byField('name'))
console.log(newUsersByName)
// [ { name: 'Ann', age: 19, company: 'Tencent' },
//   { name: 'John', age: 20, company: 'Jirengu' },
//   { name: 'Pete', age: 18, company: 'Alibaba' } ]

/*
let newUsersByAge = users.sort(byField('age'))
console.log(newUsersByAge)
[ { name: 'Pete', age: 18, company: 'Alibaba' },
  { name: 'Ann', age: 19, company: 'Tencent' },
  { name: 'John', age: 20, company: 'Jirengu' } ]
*/

/*
let newUsersByCompany = users.sort(byField('company'))
console.log(newUsersByCompany)
[ { name: 'Pete', age: 18, company: 'Alibaba' },
  { name: 'John', age: 20, company: 'Jirengu' },
  { name: 'Ann', age: 19, company: 'Tencent' } ]
*/