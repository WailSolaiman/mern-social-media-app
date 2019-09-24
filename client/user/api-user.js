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

const saveProfileImage = (params, imageFormData, credentials) => {
    return axios({
        method: 'post',
        url: `/api/image/${params.userId}`,
        data: imageFormData,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'multipart/form-data',
            Authorization: 'Bearer ' + credentials.t,
        },
    })
}

const getProfileImage = (params, credentials) => {
    return axios({
        method: 'get',
        url: `/api/image/avatar/${params.userId}`,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + credentials.t,
        },
        responseType: 'arraybuffer',
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

const follow = (params, credentials, followId) => {
    const data = JSON.stringify({ userId: params.userId, followId: followId })
    return axios.post('/api/users/follow/', data, {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + credentials.t,
        },
    })
}

const unfollow = (params, credentials, unfollowId) => {
    const data = JSON.stringify({
        userId: params.userId,
        unfollowId: unfollowId,
    })
    return axios.post('/api/users/unfollow/', data, {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + credentials.t,
        },
    })
}

const findPeople = (params, credentials) => {
    return axios.get('/api/users/findpeople/' + params.userId, {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + credentials.t,
        },
    })
}

export {
    create,
    list,
    read,
    update,
    saveProfileImage,
    getProfileImage,
    remove,
    follow,
    unfollow,
    findPeople,
}
