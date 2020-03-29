import Mock from 'mockjs'
Mock.setup({ timeout: 400 })
Mock.mock(/\/user\/login/, 'post', (options) => {
  // console.log(options)
  return { code: 0, message: '', data: { tonken: 'token', avatar: '', uuid: 123 } }
})

Mock.mock(/\/user\/verificationcodes/, 'get', (options) => {
  // console.log(options)
  return { code: 0, message: '' }
})

Mock.mock('/user/create', 'post', (options) => {
  // console.log(options)
  return { code: 0, message: '' }
})

Mock.mock(/\/user\/profile/, 'get', (options) => {
  // console.log(options)
  return {
    code: 0,
    messge: '',
    data: {
      user: {
        name: 'aaad',
        email: '123@qq.com',
        motto: '我喜欢',
        commitTotal: 123,
        acceptedTotal: 123,
        score: 12,
        avatar: '',
        creatDate: '111-111-111',
        problemTotal: 1
      }
    }
  }
})
