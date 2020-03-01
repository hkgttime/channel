import axios from 'axios'
axios.interceptors.request.use((config) => {
  // 在发送请求之前做些什么
  // console.log(1)
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = 'Bearer-' + token
  }
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

axios.interceptors.response.use((response) => {
  // 对响应数据做点什么
  // console.log(2)
  return response
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error)
})
