import Mock from 'mockjs'
Mock.setup({ timeout: 400 })
Mock.mock(/\/user\/login/, 'post', (options) => {
  console.log(options)
  return { code: 0, message: '', data: { tonken: 'token', avatar: '' } }
})

Mock.mock(/\/user\/verificationcodes/, 'get', (options) => {
  console.log(options)
  return { code: 0, message: '' }
})

Mock.mock('/user/create', 'post', (options) => {
  console.log(options)
  return { code: 0, message: '' }
})
