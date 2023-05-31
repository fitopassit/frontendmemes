import api from "./api";

const getUsersOneMouth = async () => {
    return await api
        .post("/users", {
            "startDate": "2020-05-30",
            "endDate": "2024-05-30"
        })
        .then((response) => {
            return response.data.length
        });
};

const adminService = {
    getUsersOneMouth,
};

export default adminService;