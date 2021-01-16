import {combineReducers, createStore} from "redux";
import contentReducer from "./content-reducer";
import dialogsReducer from "./dialogs-reducer";
import navbarReducer from "./navbar-reducer";

let reducers = combineReducers({
    contentReducer: contentReducer,
    dialogsReducer: dialogsReducer,
    navbarReducer: navbarReducer
});

let store = createStore(reducers);

export default store;