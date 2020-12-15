import * as axios from 'axios'


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY' : '3214a09a-b287-4d4d-9d6d-14a050c8456a'
    }
})



export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
                .then(res => res.data)
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
       return instance.delete(`follow/${userId}`)
    },
    getProfile(userId) {
        return instance.get(`profile/` + userId)
    }
}
export const authAPI = {
    me() { 
        return instance.get(`auth/me`)
    }
}
// export const follow = (currentPage, pageSize) => {
//     return instance.get(`follow/${elem.id}`)
//             .then(res => res.data)
// }