import axios from "axios";
import { base_url } from "../../utils/base_url";
import { Config } from "../../utils/axiosconfig";

const getAllCategory = async () => {
  const response = await axios.get(`${base_url}category/category`,Config);
  return response.data;
};
const createCategory = async (category) => {
  const response = await axios.post(
    `${base_url}category/category`,
    category,
    Config
  );
  return response.data;
};
const ProductCategoryService = {
  getAllCategory,
  createCategory,
};
export default ProductCategoryService;
