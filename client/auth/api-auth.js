import axios from 'axios'

const signin = user => {
    return axios({
        method: 'post',
        url: '/auth/signin/',
        data: user,
        withCredentials: true,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    })
}

const signout = () => {
    return axios({
        method: 'get',
        url: '/auth/signout/',
    })
}

export { signin, signout }
