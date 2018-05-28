function Exposure(node) {
  this.node = node
  this.isShow = true
}
Exposure.prototype.once = function (callback) {
  window.addEventListener('scroll', () => {
    if (window.scrollY + window.innerHeight > this.node.offsetTop && this.isShow) {
      callback.call(this.node)
      this.isShow = false
    }
  })
}

