import * as axios from "axios";
 


const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "dfcd1a69-dd5c-48e6-9f01-dbdf80891de4"
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 5) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            })
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
        .then(response => {
            return response.data;
        })
        //////////
        
    },
    unFollow(userId) {
        return instance.delete(`follow/${userId}`)
        .then(response => {
            return response.data;
        })
        // -
        // .then(data => {
        //     if (data.resultCode == 0) {
        //      props.unFollow(u.id)
        //     }
        // });
    }
};
    

