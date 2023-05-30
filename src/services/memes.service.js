import api from "./api";

const newMemes = () => {
    return api.get("/patterns/:id/add");
};

const newMemesService = {
    newMemes,
};

export default newMemesService;