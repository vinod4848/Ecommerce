import axios from "axios";
import { base_url } from "../../utils/base_url";
import { Config } from "../../utils/axiosconfig";

const getblogCat = async () => {
  const response = await axios.get(`${base_url}blogCat/getAllblogCat`,Config);
  return response.data;
};

const createBlogCat = async (brand) => {
  const response = await axios.post(
    `${base_url}blogCat/createblogCat`,
    brand,
    Config
  );
  return response.data;
};
const blogCatService = {
  getblogCat,
  createBlogCat,
};
export default blogCatService;
