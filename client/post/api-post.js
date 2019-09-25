import axios from 'axios'

const create = (params, credentials, postData) => {
    return axios({
        method: 'post',
        url: `/api/posts/new/${params.userId}`,
        data: postData,
        headers: headers(credentials),
    })
}

const listNewsFeed = (params, credentials) => {
    return axios({
        method: 'get',
        url: `/api/posts/feed/${params.userId}`,
        headers: headers(credentials),
    })
}

const listByUser = (params, credentials) => {
    return axios({
        method: 'get',
        url: `/api/posts/by/${params.userId}`,
        headers: headers(credentials),
    })
}

const like = (params, credentials, postId) => {
    return axios({
        method: 'put',
        url: '/api/posts/like/',
        data: { userId: params.userId, postId: postId },
        headers: headers(credentials),
    })
}

const unlike = (params, credentials, postId) => {
    return axios({
        method: 'put',
        url: '/api/posts/unlike/',
        data: { userId: params.userId, postId: postId },
        headers: headers(credentials),
    })
}

const comment = (params, credentials, postId, comment) => {
    return axios({
        method: 'put',
        url: '/api/posts/comment/',
        data: {
            userId: params.userId,
            postId: postId,
            comment: comment,
        },
        headers: headers(credentials),
    })
}

const uncomment = (params, credentials, postId, comment) => {
    return axios({
        method: 'put',
        url: '/api/posts/uncomment/',
        data: {
            userId: params.userId,
            postId: postId,
            comment: comment,
        },
        headers: headers(credentials),
    })
}

const remove = (params, credentials) => {
    return axios({
        method: 'delete',
        url: `/api/posts/${params.postId}`,
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
    listNewsFeed,
    listByUser,
    like,
    unlike,
    comment,
    uncomment,
    remove,
}
