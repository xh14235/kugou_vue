let proxyUrl = 'https://bird.ioliu.cn/v1?url='
let baseUrl = 'http://m.kugou.com'
let api = {
  newsong: baseUrl + '/?json=true',
  ranklist: baseUrl + '/rank/list&json=true',
  songlist: baseUrl + '/plist/index&json=true',
  singercategory: baseUrl + '/singer/class&json=true'
}
Reflect.ownKeys(api).forEach(key => {
  api[key] = proxyUrl + api[key]
})
export default api