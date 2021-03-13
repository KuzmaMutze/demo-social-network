import axios, { AxiosResponse } from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "dfcd1a69-dd5c-48e6-9f01-dbdf80891de4"
    }
})

let data = (param: any) => {
    return param.then((response:AxiosResponse<any> ) => {
        return response.data;
    });
}

export enum ResultCodesEnum {
    Success = 0,
    Error = 1,
    CaptchaIsRequeired = 10
}

type GetLoginType = {
    data: {id: number, email: string, login: string}
    resultCode: ResultCodesEnum
    message: Array<string>
}

type LoginResponseType = {
    data: {userId: number}
    resultCode: ResultCodesEnum
    message: Array<string>
}

export const usersAPI = {
    // header auth
    getLogin () {
        return data(instance.get<GetLoginType>(`auth/me`))
    },
    login (email: string, password: string, rememberMe: boolean = false, captcha: null | string = null) {
        return data(instance.post<LoginResponseType>(`auth/login`, {email, password, rememberMe, captcha}))
    },
    logout () {
        return data(instance.delete(`auth/login`))
    },
    // users
    getUsers(currentPage: number = 1, pageSize: number = 5) {
        return data(instance.get(`users?page=${currentPage}&count=${pageSize}`))
    },
    savePhoto(photoFile: any) {
        const formData = new FormData();
        formData.append("image", photoFile);

        return data(instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }))
    },
    follow(userId: number) {
        return data(instance.post(`follow/${userId}`))
    },
    unFollow(userId: number) {
        return data(instance.delete(`follow/${userId}`))
    },
    // content profile
    getProfile(userId: number) {
        return data(instance.get(`profile/${userId}`)) 
    },
    setProfileInfo(profileInfo: string) {
        return data(instance.put(`profile/`, profileInfo))
    },
    // status
    getStatus(userId: number) {
        return data(instance.get(`profile/status/${userId}`))
    },
    updateStatus(status: string) {
        return data(instance.put(`profile/status/`, {status: status}))
    },
    // security
    getCaptcha() {
        return data(instance.get(`security/get-captcha-url`))
    }
}