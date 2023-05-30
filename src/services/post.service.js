import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:5000/api";

const getAllPatterns = () => {
    return axios.get(API_URL + "/all_patterns");
};

const getAllMyMemes = () => {
    return axios.get(API_URL + "/private", { headers: authHeader() });
};

const postService = {
    getAllPatterns,
    getAllMyMemes,
};

export default postService;