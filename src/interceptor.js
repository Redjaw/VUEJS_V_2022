import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000'

axios.interceptors.request.use(
    (config) => {
        config.headers.common['X-davide-header'] = 'ciao'
        return config
    },
    (error) => {
        Promise.reject(error)
    }
)

axios.interceptors.response.use(
    (res) => {
        return res.data
    },
    function (error) {
        return Promise.reject(error)
    }
)

export default axios