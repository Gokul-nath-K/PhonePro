import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contacts: [],
};
const ContactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    
  },
});

export const getAllContacts = (state) => state.contacts;
export const { fetchContacts } = ContactSlice.actions;

export default ContactSlice.reducer;