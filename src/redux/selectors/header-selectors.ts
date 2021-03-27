import { AppStateType } from "../redux-store";

export const selectGetIsAuth = (state: AppStateType) => {
    return state.auth.isAuth
}
export const selectGetLogin = (state: AppStateType) => {
    return state.auth.login;
}
