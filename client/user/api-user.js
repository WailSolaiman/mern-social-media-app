import axios from 'axios'

const create = user => {
    return axios({
        method: 'post',
        url: '/api/users/',
        data: user,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    })
}

const list = () => {
    return axios({
        method: 'get',
        url: '/api/users/',
    })
}

const read = (params, credentials) => {
    return axios({
        method: 'get',
        url: `/api/users/${params.userId}`,
        headers: headers(credentials),
    })
}

const update = (params, credentials, user) => {
    return axios({
        method: 'put',
        url: `/api/users/${params.userId}`,
        data: user,
        headers: headers(credentials),
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
        headers: headers(credentials),
        responseType: 'arraybuffer',
    })
}

const remove = (params, credentials) => {
    return axios({
        method: 'delete',
        url: `/api/users/${params.userId}`,
        headers: headers(credentials),
    })
}

const follow = (params, credentials, followId) => {
    return axios({
        method: 'post',
        url: '/api/users/follow/',
        data: { userId: params.userId, followId: followId },
        headers: headers(credentials),
    })
}

const unfollow = (params, credentials, unfollowId) => {
    return axios({
        method: 'post',
        url: '/api/users/unfollow/',
        data: {
            userId: params.userId,
            unfollowId: unfollowId,
        },
        headers: headers(credentials),
    })
}

const findPeople = (params, credentials) => {
    return axios({
        method: 'get',
        url: `/api/users/findpeople/${params.userId}`,
        headers: headers(credentials),
    })
}

const headers = credentials => ({
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + credentials.t,
})

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
