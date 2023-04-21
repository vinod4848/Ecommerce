import axios from "axios";
import { base_url } from "../../utils/base_url";

const getAllProduct = async () => {
    const response = await axios.get(`${base_url}product/getAllProduct`)
    return response.data
}

const productService = {
    getAllProduct,
};
export default productService;
