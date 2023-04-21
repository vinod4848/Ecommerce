import axios from "axios";
import { base_url } from "../../utils/base_url";
const gettokenlocalStorage = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user'))
    : null

const config = {
    headers: {
        Authorization: `Bearer ${gettokenlocalStorage.token}`,
        Accept: "application/json"
    }
}
const login = async (userdata) => {
    const response = await axios.post(`${base_url}user/admin-login`, userdata)
    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data
}
const getOrders = async () => {
    const response = await axios.get(`${base_url}user/getAllOrder`, config)
    return response.data
}

const authService = {
    login,
    getOrders
};
export default authService;
