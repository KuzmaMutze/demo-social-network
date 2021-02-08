import { getAuth } from './auth-reducer';

const SET_INITIALZED = "samurai-network/auth/SET_INITIALZED"

let initialState = {
    initialzed: false,
    
}

const aapReducer = (state = initialState, action) => {
    if (action.type === SET_INITIALZED) {
        return {
            ...state,
            initialzed: true
        }
    }
    
    return state;
}

let setInitialzedSuccess = () => ({type: SET_INITIALZED})

export let initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuth());
    Promise.all([promise])
    .then(() => {
        dispatch(setInitialzedSuccess())
    })
}

export default aapReducer;