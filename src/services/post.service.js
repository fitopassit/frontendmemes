import api from "./api";


const getAllPatterns = () => {
    return api
        .get("/all_patterns").
        then((response) => {

            return response.data;
        });
};

const getAllMyMemes = () => {
    return api.get("/posts/private");
};

const postService = {
    getAllPatterns,
    getAllMyMemes,
};

export default postService;