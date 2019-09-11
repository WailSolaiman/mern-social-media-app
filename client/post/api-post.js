import axios from 'axios'

const create = (params, credentials, post) => {
    return axios.post('/api/posts/new/' + params.userId, JSON.stringify(post), {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + credentials.t,
        },
    })
}

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
    listNewsFeed,
    listByUser,
    like,
    unlike,
    comment,
    uncomment,
    remove,
}
