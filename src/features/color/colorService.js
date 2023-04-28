import axios from "axios";
import { base_url } from "../../utils/base_url";
import { Config } from "../../utils/axiosconfig";

const getColors = async () => {
  const response = await axios.get(`${base_url}color/getAllcolor`);
  return response.data;
};
const createColor = async (color) => {
  const response = await axios.post(
    `${base_url}color/createcolor`,
    color,
    Config
  );
  return response.data;
};
const colorService = {
  getColors,
  createColor,
};
export default colorService;
