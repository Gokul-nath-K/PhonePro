import axios from 'axios';
import { BASE_URL, HEADERS } from "../Constants/ApiConstant";

const getAll = async () => {
  const response = await axios.get(`${BASE_URL}/api/user/getAll`, {
    HEADERS
  });
  return response.data;
};

const getAllUser = async () => {
  const response = await axios.get(`${BASE_URL}/api/user/getAllUser`, {
    HEADERS,
  });
  return response.data;
};

const getById = async (id) => {
  const response = await axios.get(`${BASE_URL}/api/user/getById/` + id, {
    HEADERS,
  });
  return response.data;
};

export const UserService = {
  getAll,
  getAllUser,
  getById,
};