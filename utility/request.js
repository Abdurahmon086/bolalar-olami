import axios from 'axios'
// import { getToken, clearForLogout } from './auth'
// const runtimeConfig = useRuntimeConfig();

const service = axios.create({
  baseURL: 'http://admin.bolalarolami.uz/api/v2', // url = base url + request url
  timeout: 5000000, // request timeout
})

const router = useRouter()
function logout() {
  // clearForLogout()
  return router.push({ name: 'login' })
}

service.interceptors.request.use(
  config => {
    // const token = getToken()
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`
    // }
   return config
  },
  error => {
    console.log(error) // for debug
    return Promise.reject(error)
  },
)

service.interceptors.response.use(
  response => {
    const res = response.data
    if (response.status !== 200) {
      console.log('service.interceptors.response.use response', response)
      return Promise.reject(new Error(res.message || 'Error'))
    }
    return res
  },
  error => {
    if (error.response) {
      // message.error(error.response.data.message)
    } else {
      // message.error(error)
    }
    if (error.response.status === 401) {
        // if(error.response.data.message !== 'Login yoki parol xato') {
            logout()
        // }
    }
    return Promise.reject(error.response)
  },
)

export default service
