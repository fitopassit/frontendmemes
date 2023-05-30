import api from "./api";

const getAllPatterns = () => {
    return api.get("/all_patterns");
};

const getAllMyMemes = () => {
    return api.get("/posts/private");
};

const postService = {
    getAllPatterns,
    getAllMyMemes,
};

export default postService;