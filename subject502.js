/*
 *某个应用模块由文本框input，以及按钮A，按钮B组成。点击按钮A，回向地址urlA发出一个ajax请求，并将返回的字符串填充到input中（覆盖input中原有数据），点击按钮B
 回向地址urlB发出一个ajax请求，并将返回的字符串填充到input中
 当用户一次点击按钮A、B的时候，预期的效果是input依次被urlA、urlB返回的数据填充，但是由于到urlA的请求返回比较慢，导致urlB返回的数据被urlA的数据覆盖了，
 与用户预期的顺序不一致
*/

/*
 实现思路
 1.看到题目，可以想到Promise
     1）事件不确定个数
     2）每次事件发生都是在前一个事件基础上发生（第一个除外）
  2.每次点击生成一个Promise对象，街道执行队列上
  3.把本次Promise对象放到上一次Promise对象的then中，控制执行顺序
    并返回当前的Promise对象，更新队列
  4.点击之后应立即开始执行队列，仅需要在第一次点击时开始
    接下来会根据每个队列中Promise的状态来执行
*/

const ipt = document.querySelector('input')
let index = 0
let promiseNow

const btns = document.querySelectorAll('.btn')
const btnsArr = Array.prototype.slice.call(btns, 0)

btnsArr.forEach((ele) => {
  ele.onclick = function () {
    let promiseTemp = function () {
      return new Promise(resolve => {
        if (ele.id === 'btn_a') {
          setTimeout(() => {
            console.log('btn_a')
            ipt.value = '按钮A'
            resolve()
          }, 5000)
        } else if (ele.id === 'btn_b') {
          setTimeout(() => {
            console.log('btn_b')
            ipt.value = '按钮B'
            resolve()
          }, 1000)
        }
      })
    }

    if (inde === 0) {
      promiseNow = promiseTemp()
    } else {
      promiseNow = promiseTemp.then(() => {
        return promiseTemp()
      })
    }
    index++
  }
})