import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': "5e6a7b88-234a-46df-a79f-e2b0c1324494"
    },
})

export const usersAPI = {
    getUsers (currentPage = 1, pageSize = 5)  {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },
}



