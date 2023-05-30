import axios from "axios";

const API_URL = "http://localhost:5000/api"

const signup = (username, email, password) => {
    return axios
        .post(API_URL+"/register",{
            username,
            email,
            password,
        })
        .then ((response)=>{
            if (response.data.accessToken){
                localStorage.setItem("user", JSON.stringify(response.data));
            }
            return response.data;
        });
};

const login = (email, password) => {
    return axios
        .post(API_URL+"/login",{
        email,
        password
    })
    .then ((response)=>{
        if(response.data.accessToken){
            localStorage.setItem("user", JSON.stringify(response.data));
        }
       return response.data;
    });
};

const logout = () => {
    localStorage.removeItem("user");
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};

const authService = {
    signup,
    login,
    logout,
    getCurrentUser,
};
export  default authService;