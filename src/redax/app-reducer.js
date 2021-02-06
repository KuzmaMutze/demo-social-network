import { getAuth } from './auth-reducer';



let initialState = {
    initialzed: false,
    
}

const aapReducer = (state = initialState, action) => {
    if (action.type === "SET-INITIALZED") {
        return {
            ...state,
            initialzed: true
        }
    }
    
    return state;
}

let setInitialzedSuccess = () => ({type: "SET-INITIALZED"})

export let initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuth());
    Promise.all([promise]).then(() => {
        dispatch(setInitialzedSuccess())
    })
}

export default aapReducer;