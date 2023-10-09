import axios from "axios";
import { BASE_URL, HEADERS } from "../Constants/ApiConstant";

const getAllContacts = async () => {
    const response = await axios.get(`${BASE_URL}/api/contacts/getAll`, { HEADERS });
    return response.data;
};

const getContactByUserId = async (userId, headers) => {
    const response = await axios.get(`${BASE_URL}/api/contacts/getContact/${userId}`, { HEADERS });
    return response.data;
};


const getContactsSortedByName = async (dir) => {
    const response = await axios.get(`${BASE_URL}/api/contacts/getSortedContacts/${dir}`, { HEADERS });
    return response.data;
};

const postContact = async (contact) => {
    const response = await axios.post(`${BASE_URL}/api/contacts/post`, contact, { HEADERS });
    return response.data;
};

const updateContact = async (contact, id) => {
    const response = await axios.put(`${BASE_URL}/api/contacts/update/${id}`, contact, { HEADERS });
    return response.data;
};

const deleteContact = async (id) => {
    await axios.delete(`${BASE_URL}/api/contacts/delete/${id}`, { HEADERS });
};

const deleteAllContacts = async () => {
    await axios.delete(`${BASE_URL}/api/contacts/deleteAll`, { HEADERS });
};

export const ContactService = {
    getAllContacts,
    getContactByUserId,
    getContactsSortedByName,
    postContact,
    updateContact,
    deleteContact,
    deleteAllContacts,
};