import { AppStateType } from "../redux-store"

export const getProfile = (state: AppStateType) => {
    return state.contentPage.profile
}
export const getStatus = (state: AppStateType) => {
    return state.contentPage.status
}
export const getAuthUserId = (state: AppStateType) => {
    return state.auth.userId
}
export const getIsAuth = (state: AppStateType) => {
    return state.auth.isAuth
}
