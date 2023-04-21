import axios from "axios";
import { base_url } from "../../utils/base_url";

const getblogCat = async () => {
    const response = await axios.get(`${base_url}blogCat/getAllblogCat`)
    return response.data
}

const blogCatService = {
    getblogCat,
};
export default blogCatService;


