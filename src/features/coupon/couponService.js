import axios from "axios";
import { base_url } from "../../utils/base_url";
import { Config } from "../../utils/axiosconfig";

const getCoupans = async () => {
  const response = await axios.get(`${base_url}coupon/getAllcoupon`, Config);
  return response.data;
};
const createCoupon = async (coupon) => {
  const response = await axios.post(
    `${base_url}coupon/createcoupon`,
    coupon,
    Config
  );
  return response.data;
};
const couponService = {
  getCoupans,
  createCoupon,
};
export default couponService;
