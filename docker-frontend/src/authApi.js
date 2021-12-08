import axios from "axios"

function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

const API_URL = 'http://localhost/api/users/'

async function login(user) {
    await timeout(1500)
    return axios.post(`${API_URL}login`, user)
}

async function register(user) {
    await timeout(1500)
    return axios.post(`${API_URL}register`, user)
}
const api = {login: login, register: register}
export default api