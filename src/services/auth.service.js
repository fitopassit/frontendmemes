import api from "./api";
import TokenService from "./token.service";

const signup = (username, email, password) => {
    return api
        .post("/register", {
            username,
            email,
            password,
        })
        .then((response) => {
            if (response.data.accessToken) {
                TokenService.setUser(response.data);
            }

            return response.data;
        });
};

const login = (email, password) => {
    return api
        .post("/login", {
            email,
            password,
        })
        .then((response) => {
            if (response.data.accessToken) {
                // localStorage.setItem("user", JSON.stringify(response.data));
                TokenService.setUser(response.data);
            }

            return response.data;
        });
};

const logout = () => {
    // localStorage.removeItem("user");
    TokenService.removeUser();
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

export default authService;