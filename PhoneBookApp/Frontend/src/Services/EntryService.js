import axios from "axios";
import { BASE_URL } from "../Constants/ApiConstant"

const createNewUser = async (request) => {

    const response = await axios.post(`${BASE_URL}/auth/register`, request);
    return response.data;
};

const validateUser = async (request) => {
    const response = await axios.post(`${BASE_URL}/auth/token`, request);
    return response.data;
};

export const EntryService = {
    createNewUser,
    validateUser
}