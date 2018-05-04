function isMatch(str1, str2) {
  let newStr1 = [...str1].sort()
  let newStr2 = [...str2].sort()
  if (newStr1.length !== newStr2.length) {
    return false
  } else {
    let temp = true
    for (let i = 0; i < newStr1.length; i++) {
      temp = newStr1[i] === newStr2[i] ? true : false
      if (!temp) {
        break
      }
    }
    if (temp) {
      return true
    } else {
      return false
    }
  }
}

console.log(isMatch('something', 'ginhtemos'))
console.log(isMatch('hello', 'olelh'))
console.log(isMatch('aaa', 'a'))
console.log(isMatch('abb', 'baa'))