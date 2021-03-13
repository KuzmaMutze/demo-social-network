type FriendsDataType = {
    img: string
    name: string
}

let initialState = {
    friendsData: [
        {img:"https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg", name:"andrey"},
        {img:"https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png", name:"anton"}
    ] as Array<FriendsDataType>
}

export type initialStateType = typeof initialState

const navbarReducer = (state = initialState, action: any): initialStateType => {
    return state;
}

export default navbarReducer;