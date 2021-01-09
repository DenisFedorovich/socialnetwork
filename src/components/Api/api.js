import * as axios from 'axios';



const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "3a1abbc6-e961-44af-b869-e0b4486d2b23"
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },

    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId) {
        return instance.get(`profile/` + userId);

    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    }
}


/*
export const followUser = (u) => {

    return instance.post(`follow/${u.id}`, {})
        .then(response => {
            return response.data
        });
}

export const unfollowUser = (u) => {
    return instance.delete(`follow/${u.id}`)
        .then(response => response.data);
}*/