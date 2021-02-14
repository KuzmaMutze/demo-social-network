import contentReducer from "./content-reducer";
import dialogsReducer from "./dialogs-reducer";
import navbarReducer from "./navbar-reducer";


let store = {
    _state: {
        dialogsPage: {
            messagesData: [
                {message:"helo"},
                {message:"what"},
                {message:"what's up"},
                {message:"bro"},
                {message:"yo"},
                {message:"hi"},
              ],
        
            dialogsData: [
                {id:1, name:"Andrey"},
                {id:2, name:"Mike"},
                {id:3, name:"Tommy"},
                {id:4, name:"Sergey"},
                {id:5, name:"Volodya"},
                {id:6, name:"Sasha"},
              ],
    
            newMessageText: "s"
        },
    
        contentPage: {
            postData: [
                {message:"Hi, how are you?", like: 30},
                {message:"It's my first post", like: 32}
            ],
            newPostText: "sf"
        },
    
        navbar: {
            friendsData: [
                {img:"https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg", name:"andrey"},
                {img:"https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png", name:"anton"}
            ]
        }
    },
    _callSubscruber() {
    
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscruber = observer;
    },

    dispatch(action) {

        this._state.contentPage = contentReducer(this._state.contentPage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.navbar = navbarReducer(this._state.navbar, action);
        
        this._callSubscruber(this._state);
    }

};

export const addPostActionCreater = () => ({
     
    type: 'ADD-POST'
});

export const updatePostTextActionCreater = (text) => {
return {
    type: 'UPDATE-NEW-POST-TEXT', newText: text
};
};

export default store;

