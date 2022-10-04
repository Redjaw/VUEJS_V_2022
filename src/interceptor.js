import axios from 'axios'

axios.interceptors.request.use(
    (config) => {
        return config
    },
    (error) => {
        Promise.reject(error)
    }
)

axios.interceptors.response.use(
    (res) => {
        return res
    },
    function(error) {
        return Promise.reject(error)
    }
)

export default axios