import axios from 'axios'

const create = (params, credentials, bodyFormData) => {
    return axios({
        method: 'post',
        url: `/api/posts/new/${params.userId}`,
        data: bodyFormData,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'multipart/form-data',
            Authorization: 'Bearer ' + credentials.t,
        },
    })
}

const loadImage = (credentials, postId) => {
    return axios({
        method: 'get',
        url: `/api/posts/image/${postId}`,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + credentials.t,
        },
        responseType: 'arraybuffer',
    })
}

// const loadImage = photoId => {
//     return axios.get('/api/posts/images/', { photoId })
// }

const listNewsFeed = (params, credentials) => {
    return axios.get('/api/posts/feed/' + params.userId, {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + credentials.t,
        },
    })
}

const listByUser = (params, credentials) => {
    return axios.get('/api/posts/by/' + params.userId, {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + credentials.t,
        },
    })
}

const like = (params, credentials, postId) => {
    return axios.put(
        '/api/posts/like/',
        JSON.stringify({ userId: params.userId, postId: postId }),
        {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + credentials.t,
            },
        }
    )
}

const unlike = (params, credentials, postId) => {
    return axios.put(
        '/api/posts/unlike/',
        JSON.stringify({ userId: params.userId, postId: postId }),
        {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + credentials.t,
            },
        }
    )
}

const comment = (params, credentials, postId, comment) => {
    const commentData = {
        userId: params.userId,
        postId: postId,
        comment: comment,
    }
    return axios.put('/api/posts/comment/', JSON.stringify(commentData), {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + credentials.t,
        },
    })
}

const uncomment = (params, credentials, postId, comment) => {
    const commentData = {
        userId: params.userId,
        postId: postId,
        comment: comment,
    }
    return axios.put('/api/posts/uncomment/', JSON.stringify(commentData), {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + credentials.t,
        },
    })
}

const remove = (params, credentials) => {
    return axios.delete('/api/posts/' + params.postId, {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + credentials.t,
        },
    })
}

export {
    create,
    loadImage,
    listNewsFeed,
    listByUser,
    like,
    unlike,
    comment,
    uncomment,
    remove,
}
