
function jsonp(url='', data={}, callbackName='callback') {
  var queryString
  var _url
  var _callbackFunc = 'fn' + jsonp.randomString()

  data[callbackName] = _callbackFunc
  queryString = jsonp.stringifyQueryString(data)
  _url = `${url}${''.includes.call(url, '?') ? '&' : '?'}${queryString}`

  if (!jsonp.isValidateURL(_url)) {
    throw new URLError('invalidate url')
  }
  return jsonp.insertScript(_url, _callbackFunc)
}

jsonp.insertScript = function insertScript(url, cbfunc) {
  window[cbfunc] = function callback(data) {
    jsonp.responseData = data
  }
  return new Promise(function (resolve, reject) {
    var scriptEl = document.createElement('script')
    var id = cbfunc + '_' + jsonp.randomString()
    scriptEl.type = 'application/jabascript'
    scriptEl.src = url
    scriptEl.id = id
    scriptEl.async = true
    scriptEl.onerror = function () {
      reject('error')
      jsonp.clearCallback(id)
    }
    scriptEl.onload = function () {
      resolve(jsonp.responseData)
      jsonp.clearCallback(id)
    }
    document.body.appendChild(scriptEl)
  })
}

jsonp.randomString =  function randomString() {
  return Math.random().toString(16).substr(2)
}

jsonp.clearCallback = function clearCallback(id) {
  var cbfunc = ''.split.call(id, '_')[0]
  delete window[cbfunc]
  delete jsonp.responseData
  document.body.removeChild(document.querySelector('#'+id))
}

jsonp.isValidateURL = function isValidateURL(url) {
  if (!url) {
    return false
  }
  var reg = /^((http|https)?):\/\/([\w-]+(\.[\w-]+)+\/?)+(\?([\w\-\.,@?^=%&:\/~\+#]*)+)?$/
  return reg.test(url)
}

jsonp.stringifyQueryString = function stringifyQueryString(queryObj) {
  if (!queryObj || typeof queryObj !== 'object') {
    return ''
  }
  var result = []
  for (var key of Object.keys(queryObj)) {
    result.push(`${key}=${queryObj[key]}`)
  }
  return result.join('&')
}

jsonp('http://photo.sina.cn/aj/index', {page: 1, cate: 'recommend'}, 'jsoncallback')
  .then(data => {
    console.log(data)
  })