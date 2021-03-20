import { BaseThunkType, InferActionTypes } from './redux-store';
import { getAuth } from './auth-reducer';
import { Dispatch } from 'redux';

let initialState = {
    initialzed: false,
}
export type InitialStateType = typeof initialState
type ActionsType = InferActionTypes<typeof actions>
// type DispatchType = Dispatch<ActionsType>
type ThunkType = BaseThunkType<ActionsType>


const appReducer = (state = initialState, action: ActionsType): InitialStateType => {
    if (action.type === "SET_INITIALZED") {
        return {
            ...state,
            initialzed: true
        }
    }
    return state;
}

export const actions = {
    setInitialzedSuccess: () => ({type: "SET_INITIALZED"} as const) 
}

export let initializeApp = (): ThunkType => (dispatch) => {
    let promise = dispatch(getAuth());
    Promise.all([promise])
    .then(() => {
        dispatch(actions.setInitialzedSuccess())
    })
}

export default appReducer;