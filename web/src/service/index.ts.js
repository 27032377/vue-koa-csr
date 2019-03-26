import Vue from 'vue'
import axios from 'axios'

const baseHost = window.location.origin || ''
axios.defaults.baseURL = baseHost
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.timeout = 15* 1000

const requestData = (url, data) => {
    return new Promise((resolve, reject) => {
        axios.post(url, data).then(response => {
            if (response.status === '200') {
                resolve(response)
            } else {
                reject(response)
            }
        }).catch(err => {
            reject(err)
        })
    })
}

Vue.prototype.$http = requestData
