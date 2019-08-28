import axios from 'axios'

const create = user => {
    return axios.post('/api/users/', JSON.stringify(user), {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    })
}

const list = () => {
    return axios.get('/api/users/')
}

const read = (params, credentials) => {
    return axios.get('/api/users/' + params.userId, {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + credentials.t,
        },
    })
}

const update = (params, credentials, user) => {
    return axios.put('/api/users/' + params.userId, JSON.stringify(user), {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + credentials.t,
        },
    })
}

const remove = (params, credentials) => {
    return axios.delete('/api/users/' + params.userId, {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + credentials.t,
        },
    })
}

export { create, list, read, update, remove }
