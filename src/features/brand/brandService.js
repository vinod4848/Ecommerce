import axios from "axios";
import { base_url } from "../../utils/base_url";
import { Config } from "../../utils/axiosconfig";
const getBrands = async () => {
  const response = await axios.get(`${base_url}brand/getAllbrand`);
  return response.data;
};
const createBrand = async (brand) => {
  const response = await axios.post(
    `${base_url}brand/createbrand`,
    brand,
    Config
  );
  return response.data;
};

const brandService = {
  getBrands,
  createBrand,
};
export default brandService;
