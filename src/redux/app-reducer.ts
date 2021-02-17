import { getAuth } from './auth-reducer';

const SET_INITIALZED = "samurai-network/auth/SET_INITIALZED"

export type InitialStateType = {
    initialzed: boolean
}

let initialState: InitialStateType = {
    initialzed: false,
}

const appReducer = (state = initialState, action: any): InitialStateType => {
    if (action.type === SET_INITIALZED) {
        return {
            ...state,
            initialzed: true
        }
    }
    return state;
}

export type SetInitialzedSuccessActionType = {
    type: typeof SET_INITIALZED
}

let setInitialzedSuccess = (): SetInitialzedSuccessActionType => ({type: SET_INITIALZED})

export let initializeApp = () => (dispatch: any) => {
    let promise = dispatch(getAuth());
    Promise.all([promise])
    .then(() => {
        dispatch(setInitialzedSuccess())
    })
}

export default appReducer;