
let initialState = {
    users: [
        {id: 1, photoUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Dmitry_Nagiev_2017_4.jpg/274px-Dmitry_Nagiev_2017_4.jpg", followed:false, fullName:"Dmitriy", status: "im a boss", location: {city: "Minsk", country: "Belarus"}},
        {id: 2, photoUrl:"https://img.afisha.tut.by/static/media/340x0s/people/0f/b/dmitriy-nagiev-027054.jpg",  followed:true, fullName:"Sasha", status: "im a boss", location: {city: "Samara", country: "Russia"}},
        {id: 3, photoUrl:"https://newslenta.com/wp-content/uploads/2019/08/nagiev_1.jpg", followed:false, fullName:"Kolia", status: "im a boss", location: {city: "Moskow", country: "Russia"}},
        {id: 4, photoUrl:"https://www.infox.ru/photo/0ef/bb4/0efbb4171708f115504317829d31f35aasdasdasd5a4e496e566ed4.22782928-650x433-0efbb4171708f115504317829d31f35a.jpg", followed:true, fullName:"Roman", status: "im a boss", location: {city: "Kiew", country: "Ukraina"}}
    ]
};

 const usersReducer = (state = initialState, action) => {

    
        if (action.type === "FOLLOW") {
            return {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            };
        } else if (action.type === "UNFOLLOW") {
            return {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        } else if (action.type === 'SET-USER') {
            return { ...state, users: [...state.users, ...action.users]}
        };
    return state;
};

export const followAC = (userId) => ({type: 'FOLLOW', userId});

export const unFollowAC = (userId) => ({type: 'UNFOLLOW', userId});

export const setUsersAC = (users) => ({type: 'SET-USER', users});

export default usersReducer;