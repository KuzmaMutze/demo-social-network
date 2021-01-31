import {combineReducers, createStore} from "redux";
import contentReducer from "./content-reducer";
import dialogsReducer from "./dialogs-reducer";
import navbarReducer from "./navbar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";

let reducers = combineReducers({
    dialogsPage: dialogsReducer,
    contentPage: contentReducer,
    navbar: navbarReducer,
    usersPage : usersReducer,
    auth: authReducer
});

let store = createStore(reducers);

export default store;