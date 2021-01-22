import axios from 'axios'

// 第1种使用方式：axios(option)
axios({
  url,
  method,
  headers,
})
// 第2种使用方式：axios(url[, option])
axios(url, {
    method,
    headers,
})
// 第3种使用方式（对于get、delete等方法）：axios[method](url[, option])
axios.get(url, {
    headers,
})
// 第4种使用方式（对于post、put等方法）：axios[method](url[, data[, option]])
axios.post(url, data, {
    headers,
})
// 第5种使用方式：axios.request(option)
axios.request({
  url,
  method,
  headers,
})
