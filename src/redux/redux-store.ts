import {applyMiddleware, combineReducers, createStore, compose, Action} from "redux";
import contentReducer from "./content-reducer";
import dialogsReducer from "./dialogs-reducer";
import navbarReducer from "./navbar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import aapReducer from "./app-reducer";
import thunkMiddleware, { ThunkAction } from "redux-thunk";
import { reducer as formReducer } from 'redux-form'; 

let rootReducers = combineReducers({
    dialogsPage: dialogsReducer,
    contentPage: contentReducer,
    navbar: navbarReducer,
    usersPage : usersReducer,
    auth: authReducer,
    form: formReducer,
    app: aapReducer
});

type RootReducerType = typeof rootReducers; // (globalstate: AppStateType) => AppStateType
export type AppStateType = ReturnType<RootReducerType>

// types
type PropertiesTypes<T> = T extends {[key: string]: infer U} ? U : never
export type InferActionTypes<T extends {[key: string]: (...args: any[]) => any}> = ReturnType<PropertiesTypes<T>>

export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 

const store = createStore(rootReducers, composeEnhancers( applyMiddleware(thunkMiddleware)));
// @ts-ignore
window.__store__ = store;


export default store;