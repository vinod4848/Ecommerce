import axios from "axios";
import { base_url } from "../../utils/base_url";

const getAllCategory = async () => {
    const response = await axios.get(`${base_url}category/getAllCategory`)
    return response.data
}

const ProductCategoryService = {
    getAllCategory,
};
export default ProductCategoryService;
