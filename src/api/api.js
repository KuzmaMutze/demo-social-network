import * as axios from "axios";
 


const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "dfcd1a69-dd5c-48e6-9f01-dbdf80891de4"
    }
})

let data = (param) => {
    return param.then(response => {
        return response.data;
    });
}

export const usersAPI = {
    // header auth
    getLogin () {
        return data(instance.get(`auth/me`))
    },
    login (email, password, rememberMe = false, captcha) {
        return data(instance.post(`auth/login`, {email, password, rememberMe, captcha}))
    },
    logout () {
        return data(instance.delete(`auth/login`))
    },
    // users
    getUsers(currentPage = 1, pageSize = 5) {
        return data(instance.get(`users?page=${currentPage}&count=${pageSize}`))
    },
    savePhoto(photoFile) {
        const formData = new FormData();
        formData.append("image", photoFile);

        return data(instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }))
    },
    follow(userId) {
        return data(instance.post(`follow/${userId}`))
    },
    unFollow(userId) {
        return data(instance.delete(`follow/${userId}`))
    },
    // content profile
    getProfile(userId) {
        return data(instance.get(`profile/${userId}`)) 
    },
    setProfileInfo(profileInfo) {
        return data(instance.put(`profile/`, profileInfo))
    },
    // status
    getStatus(userId) {
        return data(instance.get(`profile/status/${userId}`))
    },
    updateStatus(status) {
        return data(instance.put(`profile/status/`, {status: status}))
    },
    // security
    getCaptcha() {
        return data(instance.get(`security/get-captcha-url`))
    }
};
    