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
        console.warn('Obsolete method. Use ProfileAPI obj')
        return profileAPI.getProfile(userId);
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`);
    },
    getStatus(userId) {
        return instance.get(`/profile/status/${userId}`)
    },
    updateStatus(status) {
        return instance.put(`/profile/status/`, {status: status})
    }//1-st parametr, 2-nd server request
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
