import {combineReducers, createStore} from "redux";
import contentReducer from "./content-reducer";
import dialogsReducer from "./dialogs-reducer";
import navbarReducer from "./navbar-reducer";

let reducers = combineReducers({
    dialogsPage: dialogsReducer,
    contentPage: contentReducer,
    navbar: navbarReducer
});

let store = createStore(reducers);

export default store;