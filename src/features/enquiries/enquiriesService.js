import axios from "axios";
import { base_url } from "../../utils/base_url";

const getenquiries = async () => {
    const response = await axios.get(`${base_url}enq/getAllenq`)
    return response.data
}

const enquirieService = {
    getenquiries,
};
export default enquirieService;
