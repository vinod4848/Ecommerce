import axios from "axios";
import { base_url } from "../../utils/base_url";

const getblogs = async () => {
    const response = await axios.get(`${base_url}blog/getAllBlog`)
    return response.data
}

const blogService = {
    getblogs,
};
export default blogService;
