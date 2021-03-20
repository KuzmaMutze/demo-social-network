import { PhotosType, ProfileType } from './../types/types';
import axios, { AxiosResponse } from "axios";
import { UsersType } from "../types/types";

type ResponseType<D = {}, RC = ResultCodesEnum> = {
    data: D
    messages: Array<string>
    resultCode: RC
}

let data = (param: any) => {
    return param.then((response:AxiosResponse<any> ) => {
        return response.data;
    });
}

export const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "dfcd1a69-dd5c-48e6-9f01-dbdf80891de4"
    }
})

export enum ResultCodesEnum {
    Success = 0,
    Error = 1,
    CaptchaIsRequeired = 10
}

type GetLoginDataType = {
    id: number,
    email: string,
    login: string
}

type LoginResponseDataType = {
    userId: number
}

type GetUsersType = {
    items: Array<UsersType>
    totalCount: number
    error: string | null
}

type SavePhotoResponseDataType = {
    photos: PhotosType
}

type GetCaptchaURLResponseType = {
    url: string
}

export const usersAPI = {
    // header auth
    getLogin () {
        return data(instance.get<ResponseType<GetLoginDataType>>(`auth/me`))
    },
    login (email: string, password: string, rememberMe: boolean = false, captcha: null | string = null) {
        return data(instance.post<ResponseType<LoginResponseDataType>>(`auth/login`, {email, password, rememberMe, captcha}))
    },
    logout () {
        return data(instance.delete(`auth/login`))
    },
    // users
    getUsers(currentPage: number = 1, pageSize: number = 5) {
        return data(instance.get<GetUsersType>(`users?page=${currentPage}&count=${pageSize}`))
    },
    savePhoto(photoFile: any) {
        const formData = new FormData();
        formData.append("image", photoFile);

        return data(instance.put<ResponseType<SavePhotoResponseDataType>>(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }))
    },
    follow(userId: number) {
        return data(instance.post<ResponseType>(`follow/${userId}`))
    },
    unFollow(userId: number) {
        return data(instance.delete(`follow/${userId}`)) as Promise<ResponseType>
    },
    // content profile
    getProfile(userId: number) {
        return data(instance.get<ProfileType>(`profile/${userId}`))
    },
    setProfileInfo(profileInfo: ProfileType) {
        return data(instance.put<ResponseType>(`profile/`, profileInfo))
    },
    // status
    getStatus(userId: number) {
        return data(instance.get<string>(`profile/status/${userId}`))
    },
    updateStatus(status: string) {
        return data(instance.put<ResponseType>(`profile/status/`, {status: status}))
    },
    // security
    getCaptcha() {
        return data(instance.get<GetCaptchaURLResponseType>(`security/get-captcha-url`))
    }
}